import { getAccounts } from "./actions/accounts"
import Currencies from "./sections/currencies"
import Expenses from "./sections/expenses"
import Hero from "./sections/hero"

export default async function Home() {
  const accounts = await getAccounts()

  return (
    <main className='container'>
      <Hero />
      <Currencies />
      <Expenses accounts={accounts} />
    </main>
  )
}
