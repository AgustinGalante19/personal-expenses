"use server"

import Crypto from "../data/crypto.json" assert { type: "json" }
import Dollar from "../data/dollar.json" assert { type: "json" }

interface CurrencyResponse {
  currency: string
  name: string
  buy: number
  sell: number | null
  image: string
  updateDate: Date
  percentaje?: number
}

interface Response {
  status: number
  data: CurrencyResponse[]
}

const resolveImage = (currency: string): any => {
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

export async function getCurrenciesQuotes() {
  const response: Response = {
    status: 200,
    data: [],
  }

  try {
    const dollarResponse = Dollar /* await getDollarQuotes() */
    dollarResponse.forEach(
      ({ compra, fechaActualizacion, moneda, nombre, casa, venta }) => {
        if (casa === "tarjeta" || casa === "cripto" || casa === "blue") {
          response.data.push({
            updateDate: new Date(fechaActualizacion),
            buy: compra,
            currency: moneda,
            image: resolveImage(casa),
            name: nombre,
            sell: venta,
          })
        }
      }
    )

    const cryptoResponse = Crypto /* await getCryptoQuotes() */

    cryptoResponse.data.forEach(({ name, quote, slug, symbol }) => {
      const { last_updated, price, percent_change_1h } = quote.USD
      response.data.push({
        name,
        buy: Number(price.toFixed(2)),
        currency: slug,
        sell: null,
        updateDate: new Date(last_updated),
        image: resolveImage(symbol.toLowerCase()),
        percentaje: Number(percent_change_1h.toFixed(2)),
      })
    })
  } catch (err) {
    console.log("error al obtener datos de la api", err)
  }

  return response
}
