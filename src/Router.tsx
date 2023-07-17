import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'

export default function Router (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/store" element="Wird noch ausgebaut du Hund" />
        <Route path="/kontakt" element="Wird noch ausgebaut du Hund" />
        <Route path="/b2b" element="Wird noch ausgebaut du Hund" />
      </Routes>
    </BrowserRouter>
  )
}
