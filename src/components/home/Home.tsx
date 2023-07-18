import React from 'react'
import Nav from '../navbar/Nav'
import './home.scss'
import ImgCarussel from './attention-interest/ImgCarussel'
import SectionOne from './desire/SectionOne'
import StorePreview from './action/StorePreview'
import Footer from '../footer/Footer'

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
