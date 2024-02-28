import Currencies from "./sections/currencies"
import Hero from "./sections/hero"

export default function Home() {
  return (
    <main className='container'>
      <Hero />
      <Currencies />
    </main>
  )
}
