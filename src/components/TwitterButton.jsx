import React from 'react'
import { FaTwitter } from 'react-icons/fa'

export function TweeterButton() {
  return (
    <a 
      href='https://twitter.com/intent/tweet'
      className='btn btn-primary border border-dark rounded text-dark mx-2 fw-bolder' 
      id='tweet-quote'
      target="_blank" 
      data-bs-toggle="tooltip" 
      title='Twitter quote'
      data-bs-placement="bottom">
      <FaTwitter />
    </a>
  )
}
