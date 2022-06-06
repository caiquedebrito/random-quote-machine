import React, { useContext } from 'react'
import { QuoteContext } from '../context/QuoteContext'

export function Content() {
  const {randomQuote, isLoading} = useContext(QuoteContext)
  const {author, content} = randomQuote

  return (
    <div className="content px-5 pt-5">
        <p className='font-weight-bold text-center h2' id='text'>
          "{ isLoading ? <div className='spinner-grow' role='status'></div> : content }"
        </p>
        <p className='text-left' id='author'>
          - {isLoading ? '...' : author}
        </p>
    </div>  )
}
