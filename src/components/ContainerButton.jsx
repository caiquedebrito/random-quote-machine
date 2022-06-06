import React from 'react'
import { TwitterButton } from './TwitterButton'
import { RequestQuoteButton } from './RequestQuoteButton'

export function ContainerButton() {
  return (
    <div className='d-flex justify-content-between m-auto px-5'>
      <TwitterButton />
      <RequestQuoteButton />;
    </div>
  )
}
