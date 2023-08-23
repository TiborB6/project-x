import Footer from '@/components/footer/Footer'
import Nav from '@/components/navbar/Nav'
import React, { useState, useEffect } from 'react'

export default function Store (): JSX.Element {
  const targetDate: Date = new Date('2023-12-31T23:59:59') // Set your target date and time

  const calculateCountdown = (timeLeft: number): { days: number, hours: number, minutes: number, seconds: number } => {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }

  const [countdown, setCountdown] = useState(calculateCountdown(targetDate.getTime() - new Date().getTime()))

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = targetDate.getTime() - new Date().getTime()
      setCountdown(calculateCountdown(timeLeft))

      if (timeLeft <= 0) {
        clearInterval(interval)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <Nav />
      <div className='store'>
        <div className="launch">Launching on <span className='highlighted'>Oktober 19th</span></div>
        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-value" id="days">{countdown.days.toString().padStart(2, '0')}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value" id="hours">{countdown.hours.toString().padStart(2, '0')}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value" id="minutes">{countdown.minutes.toString().padStart(2, '0')}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value" id="seconds">{countdown.seconds.toString().padStart(2, '0')}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
