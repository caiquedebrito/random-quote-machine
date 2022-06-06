import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { QuoteContext } from '../context/QuoteContext'

export function RequestQuoteButton() {
  const { setRandomQuote, isLoading, setIsLoading } = useContext(QuoteContext)

  useEffect(() => {
    requestQuote()
  }, [])

    async function requestQuote() {
      setIsLoading(true)

      const url = "https://api.quotable.io/random"
      const response = await fetch(url)
      const {author, content }= await response.json()
      setRandomQuote({
        author,
        content
      })
      
      setIsLoading(false)
    }

  return (
    <button
        className='btn btn-outline-primary fw-bolder border border-dark'
        onClick={requestQuote}
        disabled={isLoading}
        id="new-quote"
        data-bs-toggle="tooltip"
        title="Request a new quote"
        data-bs-placement="bottom"
    >
      {isLoading ? '...' : 'New'}
    </button>
  )
}
