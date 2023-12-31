import React, { useState } from 'react'
import EmailInput from '@/components/auth/form-components/EmailInput'
import PasswordInput from '@/components/auth/form-components/PasswordInput'
import axios from 'axios'
import store, { type RootState } from '@/redux/store'
import { setCurrentUser } from '@/redux/authSlice'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

export default function SmallNavLogin (): JSX.Element {
  const router = useRouter()

  const auth = useSelector((state: RootState) => state.auth)

  const [email, setEmail] = useState('')
  const [psw, setPsw] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleEmailChange = (value: string): void => {
    setEmail(value)
  }

  const handlePswChange = (value: string): void => {
    setPsw(value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    try {
      const response = await axios.post('/api/auth/getUserByEmail', {
        emailInput: email,
        pswInput: psw
      })

      setErrorMessage(response.data.error)

      const user = response.data.user

      store.dispatch(setCurrentUser(user._id))

      if (user !== undefined) {
        void router.push('/profile')
      }
    } catch (error) {
      console.error('Error fetching user:', error)
    }
  }

  return (
    <>
    {auth.auth
      ? (
          <h1>You are logged in!</h1>
        )
      : (
        <>
            <h1>Sign-In</h1>
            <form className='small-login' onSubmit={(event) => { void handleSubmit(event) }}>
              <EmailInput changeFunction={handleEmailChange} />
              <PasswordInput type='password' changeFunction={handlePswChange} matchError={false} />
              <div className="small-login-buttons">
                <button className='quick-login'>
                  <svg className="svg-icon google" fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 210" >
                    <path d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40 c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105 S0,162.897,0,105z"/>
                  </svg>
                </button>
                <button className='quick-login'>
                  <svg className="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M530.110473 865.48373l109.783359 0 0 0.067538C621.25431 865.550245 577.021899 865.550245 530.110473 865.48373L530.110473 865.48373 530.110473 865.48373zM335.854211 161.582095c-15.820314 0.276293-31.776727 1.306762-46.085618 3.990894-15.548114 2.956332-29.717835 6.878664-43.88858 14.100136-14.375405 7.291057-26.755364 17.267269-37.832653 28.065196-10.797927 11.07422-20.770046 23.524786-28.063149 37.832653-7.153934 14.170744-11.144828 28.27088-14.103206 43.88551-2.680039 14.308891-3.714602 30.265304-3.990894 46.089711-0.067538 3.576455-0.067538 6.878664-0.137123 12.038174l-0.204661 309.542962c0 3.919263 0.067538 8.184403 0.067538 12.863982 0.137123 11.211343 0.207731 15.819291 0.275269 21.115923 0.276293 15.820314 1.310855 31.780821 3.990894 46.088688 1.306762 6.808056 2.750647 13.343913 4.607948 19.672038 2.408863 8.184403 5.434779 16.166191 9.495258 24.142863 7.29208 14.379499 17.265222 26.759457 28.063149 37.832653 11.07729 10.800997 23.527856 20.774139 37.832653 28.066219 14.170744 7.153934 28.27395 11.143805 43.88858 14.103206 14.308891 2.680039 30.265304 3.711532 46.085618 3.986801 5.296633 0.070608 9.904581 0.137123 21.118993 0.275269 10.660804 0.070608 19.396769 0.137123 25.862018 0.137123l147.204643 0L530.040888 592.328513l-88.526219 0 0-102.149495 87.908142 0 0-95.067192c0-72.982198 56.406684-125.261888 129.318274-125.261888l94.378507 2.066055 0 98.089016-72.088852 0c-20.840654 0-37.766139 23.044856-37.766139 43.956118l0 76.216869 106.349143 0-15.134699 102.217033-94.582145 0 0 273.086655 4.541433 0c6.465249 0 15.201214-0.070608 25.862018-0.137123 8.873088-0.070608 13.620206-0.137123 17.813714-0.137123 1.102101 0 2.204202 0 3.372817-0.070608 15.820314-0.276293 31.780821-1.306762 46.088688-3.990894 15.544021-2.955308 29.714765-6.878664 43.88551-14.100136 14.375405-7.29208 26.755364-17.264199 37.832653-28.066219 10.79895-11.07422 20.774139-23.524786 28.066219-37.832653 7.153934-14.169721 11.140735-28.27088 14.100136-43.88551 2.683109-14.308891 3.714602-30.265304 3.990894-46.089711 0.067538-5.296633 0.137123-9.904581 0.275269-21.115923 0.066515-10.660804 0.137123-19.396769 0.137123-25.862018L865.863377 382.595768l0-7.496741c0-5.230118-0.070608-11.419074-0.137123-18.436908-0.137123-11.211343-0.207731-15.819291-0.275269-21.115923-0.276293-15.823384-1.306762-31.780821-3.990894-46.089711-2.958378-15.544021-6.878664-29.714765-14.100136-43.88551-7.29208-14.375405-17.267269-26.759457-28.066219-37.832653-11.07729-10.797927-23.524786-20.774139-37.832653-28.065196-14.170744-7.154957-28.27395-11.144828-43.88551-14.100136-14.308891-2.683109-30.269397-3.714602-46.088688-3.990894-5.296633-0.070608-9.904581-0.137123-21.115923-0.275269-10.731412-0.070608-19.467377-0.137123-25.932626-0.137123L382.835222 161.169703c-6.465249 0-15.201214 0.067538-25.862018 0.137123C345.758792 161.443949 341.150844 161.511487 335.854211 161.582095L335.854211 161.582095zM335.854211 161.582095" /></svg>
                </button>
                <button type="submit">Login</button>
                <p className='serverError'>{errorMessage}</p>
              </div>
            </form>
          </>
        )
    }
    </>
  )
}
