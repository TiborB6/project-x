import React from 'react'
import Nav from '@/components/navbar/Nav'
import SectionOne from '@/components/home/desire/SectionOne'
import ImgCarussel from '@/components/home/attention-interest/ImgCarussel'
import StorePreview from '@/components/home/action/StorePreview'
import Footer from '@/components/footer/Footer'

// import SectionOne from './desire/SectionOne'
// import StorePreview from './action/StorePreview'
// import Footer from '../footer/Footer'

export default function Home (): JSX.Element {
  return (
    <>
      <Nav />
      <ImgCarussel />
      <SectionOne />
      <StorePreview />
      <Footer />
    </>
  )
}
