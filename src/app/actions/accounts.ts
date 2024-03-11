"use server"

import { query } from "@/app/lib/db"
import { QueryResult } from "pg"
import Account from "../types/Account"
import { revalidatePath } from "next/cache"

export async function getAccounts() {
  try {
    const { rows: accounts }: QueryResult<Account> = await query(
      "SELECT * FROM accounts ORDER BY account_id ASC"
    )

    const total = accounts.reduce(
      (acc, currentAccount) => acc + currentAccount.amount,
      0
    )

    return { accounts, total }
  } catch (err) {
    return { total: 0, accounts: [] }
  }
}

export async function updateAccounts(formData: FormData) {
  const values = {
    brubank: Number(formData.get("brubank")),
    lemon: Number(formData.get("lemon")),
    fiwind: Number(formData.get("fiwind")),
    uala: Number(formData.get("uala")),
  }

  try {
    await query(
      `CALL update_accounts(${values.brubank}, ${values.lemon}, ${values.fiwind}, ${values.uala})`
    )

    revalidatePath("/")
    return "ok"
  } catch (err) {
    return "err"
  }
}
