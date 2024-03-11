"use client"

import expensesStyles from "@/app/styles/expenses.module.css"
import AccountItem from "../components/account-item"
import Pencil from "../assets/Pencil"
import Account from "../types/Account"
import { useState } from "react"
import AccountModal from "../components/account-modal"

function ExpensesStatus({
  accounts,
  total,
}: {
  accounts: Account[]
  total: number
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className={expensesStyles["expenses-grid"]}>
      <div className={expensesStyles["current-money"]}>
        <div className={expensesStyles["total-section"]}>
          <div>
            Total: <span className={expensesStyles.amount}>${total}</span>
          </div>
          <div>
            <button
              className={expensesStyles["edit-button"]}
              type='button'
              onClick={() => setIsOpen(true)}
            >
              <Pencil />
            </button>
          </div>
        </div>
        <div className={expensesStyles.wallets}>
          {accounts.map(({ amount, logo, account_name, color, account_id }) => (
            <AccountItem
              account_id={account_id}
              key={account_id}
              amount={amount}
              logo={logo}
              account_name={account_name}
              color={color}
            />
          ))}
        </div>
      </div>
      <div className={expensesStyles.expenses}>expenses</div>
      <AccountModal
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
        accounts={accounts}
      />
    </section>
  )
}

export default ExpensesStatus
