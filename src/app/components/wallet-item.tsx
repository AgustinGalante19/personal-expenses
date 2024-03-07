import Image from "next/image"
import Wallet from "../types/Wallet"
import expenseStyles from "@/app/styles/expenses.module.css"

function WalletItem({ amount, logo, name, color }: Wallet & { color: string }) {
  return (
    <div className={expenseStyles["wallet"]}>
      <Image
        width={30}
        height={30}
        alt={`${name} logo`}
        src={`/wallets/${logo}.jpeg`}
        className={expenseStyles["logo"]}
      />
      <div className={expenseStyles["amounts"]}>
        <span style={{ color: color }}>{name}</span>
        <span>${amount}</span>
      </div>
    </div>
  )
}

export default WalletItem
