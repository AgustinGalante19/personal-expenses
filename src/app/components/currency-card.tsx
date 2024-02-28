import Image from "next/image"
import styles from "@/app/styles/currencies.module.css"
import ChevronUp from "../assets/ChevronUp"
import ChevronDown from "../assets/ChevronDown"

interface Props {
  sell: number | null
  buy: number
  percentaje?: number
  name: string
  imageName: string
}

function CurrencyCard({ imageName, name, percentaje, buy, sell }: Props) {
  return (
    <div className={styles["currency-card-body"]}>
      <div className={styles["currency-img"]}>
        <Image
          height={50}
          width={50}
          alt='ethereum'
          src={`/currency/${imageName}.svg`}
        />
      </div>
      <div className={styles["currency-data"]}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 30,
          }}
        >
          <span className={styles["currency-name"]}>{name}</span>
          <span
            className={styles["currency-update"]}
            style={{ fontSize: ".6em", color: "#797979", fontWeight: "800" }}
          >
            Update: 17:33
          </span>
        </div>
        <div className={styles["currency-price"]}>
          <div style={{ padding: "0 10px" }}>
            <span className={`${styles["currency-value"]} ${styles.buy}`}>
              <span className={styles["price-type"]}>C:</span> ${buy}
            </span>
            {sell && (
              <span className={`${styles["currency-value"]} ${styles.sell}`}>
                <span className={styles["price-type"]}>V:</span> ${sell}
              </span>
            )}
          </div>
          {percentaje && (
            <div
              className={`${styles["percentaje"]} ${
                percentaje > 0 ? styles.positive : styles.negative
              }`}
            >
              {percentaje > 0 ? <ChevronUp /> : <ChevronDown />}
              <span className={styles["percentaje-value"]}>{percentaje}%</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CurrencyCard
