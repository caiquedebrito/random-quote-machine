import React from 'react'

export function TweeterButton() {
  return (
    <a 
      href='https://twitter.com/intent/tweet'
      className='btn btn-primary border border-dark rounded text-dark mx-2 fw-bolder' 
      id='tweet-quote'
      target="_blank" 
      data-bs-toggle="tooltip" 
      title='Tweet content'
      data-bs-placement="bottom">
      Tweeter
    </a>
  )
}
