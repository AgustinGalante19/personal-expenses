interface CurrencyResponse {
  currency: string
  name: string
  buy: number
  sell: number | null
  image: string
  updateDate: Date
  percentaje?: number
}

export default interface CurrenciesResponse {
  status: number
  data: CurrencyResponse[]
}
