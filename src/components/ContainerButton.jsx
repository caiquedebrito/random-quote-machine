import React from 'react'
import { TweeterButton } from './TweeterButton'
import { RequestQuoteButton } from './RequestQuoteButton'

export function ContainerButton() {
  return (
    <div className='d-flex justify-content-between m-auto px-5'>
      <TweeterButton />
      <RequestQuoteButton />
    </div>
  )
}
