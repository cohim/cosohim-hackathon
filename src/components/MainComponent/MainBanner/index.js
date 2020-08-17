import React from 'react'
import SlickBanner from './SlickBanner'

const MainBanner = ({df}) => {
  return (
    <div className={`${df ? "df" : ''}`}>
      <SlickBanner />
    </div>
  )
}

export default MainBanner
