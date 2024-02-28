export default function resolveCurrencyImage(currency: string): string {
  let response: string

  switch (currency) {
    case "tarjeta":
      response = "card"
      break
    case "btc":
      response = "btc"
      break
    case "eth":
      response = "eth"
      break
    case "cripto":
      response = "usdc"
      break
    case "blue":
      response = "usd"
      break
    default:
      response = "usd"
      break
  }

  return response
}
