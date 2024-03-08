import { Pool } from "pg"

const pool = new Pool()

export async function query(text: string) {
  const res = await pool.query(text)
  return res
}
