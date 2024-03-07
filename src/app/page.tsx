import Currencies from "./sections/currencies"
import Expenses from "./sections/expenses"
import Hero from "./sections/hero"

export default function Home() {
  return (
    <main className='container'>
      <Hero />
      <Currencies />
      <Expenses />
    </main>
  )
}
