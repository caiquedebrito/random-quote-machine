import { createContext, useState } from "react";

export const QuoteContext = createContext()

export function QuoteProvider({children}) {
    const [randomQuote, setRandomQuote] = useState({
        author: "",
        content: ""
    })
    const [isLoading, setIsLoading] = useState(true)

    return (
        <QuoteContext.Provider value={{randomQuote, setRandomQuote, isLoading, setIsLoading}}>
            {children}
        </QuoteContext.Provider>
    )
}