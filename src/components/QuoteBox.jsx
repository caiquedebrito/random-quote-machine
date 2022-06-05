import React from 'react'
import { ContainerButton } from './ContainerButton'
import { Content } from './Content'

export function QuoteBox() {
  return (
    <div id='quote-box' className='border mx-auto pb-5 shadow'>
      <div className='header bg-primary'>
      </div>
      <Content />
      <ContainerButton />
    </div>
  )
}
