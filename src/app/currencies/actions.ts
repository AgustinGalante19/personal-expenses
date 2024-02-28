"use server"

import CryptoJson from "../data/crypto.json" assert { type: "json" }
import DollarJson from "../data/dollar.json" assert { type: "json" }
import CurrenciesResponse from "../types/CurrenciesResponse"
import resolveCurrencyImage from "./resolveCurrencyImage"

export async function getCurrenciesQuotes() {
  const response: CurrenciesResponse = {
    status: 200,
    data: [],
  }

  try {
    const dollarResponse = DollarJson /* await getDollarQuotes() */
    dollarResponse.forEach(
      ({ compra, fechaActualizacion, moneda, nombre, casa, venta }) => {
        if (casa === "tarjeta" || casa === "cripto" || casa === "blue") {
          response.data.push({
            updateDate: new Date(fechaActualizacion),
            buy: compra,
            currency: moneda,
            image: resolveCurrencyImage(casa),
            name: nombre,
            sell: venta,
          })
        }
      }
    )

    const cryptoResponse = CryptoJson /* await getCryptoQuotes() */

    cryptoResponse.data.forEach(({ name, quote, slug, symbol }) => {
      const { last_updated, price, percent_change_1h } = quote.USD
      response.data.push({
        name,
        buy: Number(price.toFixed(2)),
        currency: slug,
        sell: null,
        updateDate: new Date(last_updated),
        image: resolveCurrencyImage(symbol.toLowerCase()),
        percentaje: Number(percent_change_1h.toFixed(2)),
      })
    })
  } catch (err) {
    console.log("error al obtener datos de la api", err)
    response.status = 500
  }

  return response
}
