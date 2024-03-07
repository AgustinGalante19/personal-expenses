import Currencies from "./sections/currencies"
import ExpensesStatus from "./sections/expenses-status"
import Hero from "./sections/hero"

export default function Home() {
  return (
    <main className='container'>
      <Hero />
      <Currencies />
      <ExpensesStatus />
    </main>
  )
}
