import expensesStyles from "@/app/styles/expenses.module.css"
import WalletItem from "../components/wallet-item"
import Wallet from "@/app/types/Wallet"
import Pencil from "../assets/Pencil"

const WALLETS: Wallet[] = [
  {
    name: "Brubank",
    amount: "24.500",
    logo: "Brubank",
    color: "#6742e0",
  },
  {
    name: "Lemon",
    amount: "140.400",
    logo: "Lemon",
    color: "#43CD4B",
  },
  {
    name: "Fiwind",
    amount: "0.00",
    logo: "Fiwind",
    color: "#E8AE00",
  },
  {
    name: "Ualá",
    amount: "4.645",
    logo: "Uala",
    color: "#022a9b",
  },
]

function ExpensesStatus() {
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
          {WALLETS.map(({ amount, logo, name, color }) => (
            <WalletItem
              key={name}
              amount={amount}
              logo={logo}
              name={name}
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
