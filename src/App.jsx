import { QuoteBox } from "./components/QuoteBox"
import { QuoteProvider } from "./context/QuoteContext"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="app d-flex flex-column justify-content-evenly px-3">
      <h1>Random Quotes</h1>
      <QuoteProvider>
        <QuoteBox />
      </QuoteProvider>
      <Footer />
    </div>
  )
}

export default App
