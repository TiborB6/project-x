import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Form from './components/auth/Form'
import Profile from './components/profile/Profile'
import SignUp from './components/auth/forms/sign-up/SignUp'

export default function Router (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/store" element="Wird noch ausgebaut du Hund" />
        <Route path="/contakt" element="Wird noch ausgebaut du Hund" />
        <Route path="/b2b" element="Wird noch ausgebaut du Hund" />
        <Route path="/impressum" element="Wird noch ausgebaut du Hund" />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element="Wird noch ausgebaut du Hund" />
        <Route path="/form" element={<Form />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
