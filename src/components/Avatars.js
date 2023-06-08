import React from 'react'
import '../styles/components/avatars.css'
import profile from '../assets/profile.jpg'

function Avatars() {
  return (
    <>
      <div className='avatar'>
        <img src={profile} alt="profile" />
      </div>
    </>
  )
}

export default Avatars
