"use server"

import { query } from "@/app/lib/db"
import { QueryResult } from "pg"
import Account from "../types/Account"

export async function getAccounts() {
  const accounts: QueryResult<Account> = await query(
    "SELECT * FROM accounts ORDER BY account_id ASC"
  )

  return accounts.rows
}
