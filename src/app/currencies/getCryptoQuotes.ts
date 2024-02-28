import CRYPTO_API_RESPONSE from "../types/CRYPTO_API_RESPONSE"

const CRYPTO_API_URL = process.env.CRYPTO_API_URL ?? ""
export default async function getCryptoQuotes(): Promise<CRYPTO_API_RESPONSE> {
  const cryptoRequest = await fetch(CRYPTO_API_URL + "?limit=2", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-CMC_PRO_API_KEY": process.env.CRYPTO_API_KEY ?? "",
    },
  })

  const cryptoResponse: CRYPTO_API_RESPONSE = await cryptoRequest.json()

  return cryptoResponse
}
