import React from 'react'
import Nav from '../navbar/Nav'
import './home.scss'
import ImgCarussel from './attention-interest/ImgCarussel'

export default function Home (): JSX.Element {
  return (
    <>
      <Nav />
      <ImgCarussel />
    </>
  )
}
