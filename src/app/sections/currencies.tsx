import CurrencyCard from "@/app/components/currency-card"
import { getCurrenciesQuotes } from "../currencies/actions"

async function Currencies() {
  const currencies = await getCurrenciesQuotes()
  return (
    <div className='currency-container'>
      {currencies.data.map((currency, i) => (
        <CurrencyCard
          key={i}
          imageName={currency.image}
          name={currency.name}
          percentaje={currency.percentaje}
          buy={currency.buy}
          sell={currency.sell}
          updateDate={currency.updateDate}
        />
      ))}
    </div>
  )
}

export default Currencies
