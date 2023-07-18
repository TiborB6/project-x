import React from 'react'

interface DataObj {
  name: string
}

export default function PreviewDisplay ({ name }: DataObj): JSX.Element {
  return (
    <>
      <img src="" alt="Product Images" />
      <p>
        {name}
      </p>
    </>
  )
}
