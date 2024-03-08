import Image from "next/image"
import Account from "../types/Account"
import expenseStyles from "@/app/styles/expenses.module.css"

function WalletItem({ amount, logo, account_name, color }: Account) {
  return (
    <div className={expenseStyles.wallet}>
      <Image
        width={30}
        height={30}
        alt={`${account_name} mini logo`}
        src={`/wallets/${logo}`}
        className={expenseStyles.logo}
      />
      <div className={expenseStyles.amounts}>
        <span style={{ color: color }}>{account_name}</span>
        <span>${amount}</span>
      </div>
    </div>
  )
}

export default WalletItem
