import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { type RootState } from '@/redux/store' // Adjust the import path based on your project structure
import { useRouter } from 'next/router'
import Nav from '@/components/navbar/Nav'
import { type UserInterface } from '@/mongoDB/models/user' // Adjust the import path based on your project structure
/* import connectDB from '@/mongoDB/db'
import { User } from '@/mongoDB/models/user'
import { type GetServerSideProps } from 'next' */

interface ProfileProps {
  // Define the expected properties from the server-side props
  // Adjust the properties based on your UserInterface
  user: UserInterface | null
}

/* export const getServerSideProps: GetServerSideProps<ProfileProps> = async () => {
  const auth = useSelector((state: RootState) => state.auth)

  try {
    await connectDB() // Connect to your database

    const query = { _id: auth._id }
    const user = await User.findOne(query).lean().exec()

    return {
      props: {
        user: (user != null) || null // Assign the user value directly or null if not found
      }
    }
  } catch (err) {
    console.error(err)
    return {
      props: {
        user: null
      }
    }
  }
} */

const Profile: React.FC<ProfileProps> = ({ user }: ProfileProps) => {
  const router = useRouter()
  const auth = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    console.log(auth)
    if (!auth.auth) {
      void router.push('/auth/sign-in')
    }
  }, [auth, router])

  return (
    <>
      <Nav />
      <div className='profile'>
        Successfully Authenticated
        {/* Display user profile data here */}
      </div>
    </>
  )
}

export default Profile
