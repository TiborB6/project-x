import React from 'react'
import Nav from '../navbar/Nav'
import './home.scss'
import ImgCarussel from './attention-interest/ImgCarussel'
import SectionOne from './desire/SectionOne'

export default function Home (): JSX.Element {
  return (
    <>
      <Nav />
      <ImgCarussel />
      <SectionOne />
    </>
  )
}
