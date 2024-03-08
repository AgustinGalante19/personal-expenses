import expensesStyles from "@/app/styles/expenses.module.css"
import AccountItem from "../components/account-item"
import Pencil from "../assets/Pencil"
import Account from "../types/Account"

function ExpensesStatus({ accounts }: { accounts: Account[] }) {
  return (
    <section className={expensesStyles["expenses-grid"]}>
      <div className={expensesStyles["current-money"]}>
        <div className={expensesStyles["total-section"]}>
          <div>
            Total: <span className={expensesStyles["amount"]}>$200.000</span>
          </div>
          <div>
            <button className={expensesStyles["edit-button"]}>
              <Pencil />
            </button>
          </div>
        </div>
        <div className={expensesStyles["wallets"]}>
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
      <div
        style={{ backgroundColor: "#aaa" }}
        className={expensesStyles["expenses"]}
      ></div>
    </section>
  )
}

export default ExpensesStatus
