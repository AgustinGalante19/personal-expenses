import DOLLAR_API_RESPONSE from "../types/DOLLAR_API_RESPONSE"

const DOLLAR_API_URL = process.env.DOLLAR_API_URL ?? ""
export default async function getDollarQuotes(): Promise<
  DOLLAR_API_RESPONSE[]
> {
  const dollarRequest = await fetch(DOLLAR_API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  const dollarResponse: DOLLAR_API_RESPONSE[] = await dollarRequest.json()

  return dollarResponse
}
