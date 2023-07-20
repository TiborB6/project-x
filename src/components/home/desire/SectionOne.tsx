import React, { useEffect, useState } from 'react'

export default function SectionOne (): JSX.Element {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.unobserve(entry.target)
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.section-one')
    hiddenElements?.forEach((el) => {
      observer.observe(el)
    })
  }, [])

  return (
    <>
      <div className="section-one">
        <div className={`description hidden ${isIntersecting ? 'show' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
            <path d="M480-120 80-600l120-240h560l120 240-400 480ZM368-630h224l-75-150h-74l-75 150Zm82 381v-321H183l267 321Zm60 0 267-321H510v321Zm149-381h136l-75-150H584l75 150Zm-494 0h136l75-150H240l-75 150Z"/>
          </svg>
          <h1>Highest Quality</h1>
          <p>
            Unparalleled luxury. Meticulously crafted with the finest materials. Impeccable quality. Elevate your standards with perfection.
          </p>
        </div>
        <div className={`description hidden ${isIntersecting ? 'show' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
          <path d="M352-180q-119-40-196-143T79-560q0-32 5-64t16-63l-64 37-30-51 173-100 100 172-52 30-58-99q-14 33-21.5 68t-7.5 71q0 116 68.5 205T383-233l-31 53Zm288-520v-60h115q-48-66-120.5-103T480-900q-69 0-128.5 25T246-806l-31-54q54-47 121-73.5T479-960q88 0 166 35.5T780-824v-76h60v200H640ZM595-80 422-180l100-172 51 30-58 101q130-13 217.5-109.5T820-559q0-21-2.5-41t-7.5-40h62q4 20 6 40t2 40q0 143-89.5 253T562-168l63 37-30 51Z"/>
        </svg>
          <h1>Refill & Recharge</h1>
          <p>
            Effortless convenience. Seamlessly recharge and refill. Never miss a moment with uninterrupted power and lasting satisfaction.
          </p>
        </div>
        <div className={`description hidden ${isIntersecting ? 'show' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
            <path d="M212-260q-90 0-151-65.5T0-482q0-90 61.5-154T212-700q36 0 69.5 12t59.5 37l93 90-42 42-89-87q-18-18-41.5-26t-49.5-8q-64 0-108 46.5T60-482q0 66 43.5 114T212-320q25 0 48.5-8t42.5-25l316-298q26-25 59.5-37t68.5-12q90 0 151.5 64T960-482q0 91-61.5 156.5T747-260q-35 0-69-11.5T619-308l-91-90 42-42 87 87q17 17 41 25t49 8q65 0 109-48t44-114q0-65-44.5-111.5T747-640q-25 0-48.5 9T657-605L341-307q-26 24-60 35.5T212-260Z"/>
          </svg>
          <h1>All Inclusive</h1>
          <p>
            Complete package. Everything you need in one. Experience convenience, versatility, and unmatched value with our all-inclusive solution.
          </p>
        </div>
      </div>
    </>
  )
}
