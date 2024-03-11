import { getAccounts } from "./actions/accounts"
import Currencies from "./sections/currencies"
import Expenses from "./sections/expenses"
import Hero from "./sections/hero"

export default async function Home() {
  const accountsData = await getAccounts()

  return (
    <main className='container'>
      <Hero />
      <Currencies />
      <Expenses accounts={accountsData.accounts} total={accountsData.total} />
    </main>
  )
}
