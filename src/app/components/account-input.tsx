import Image from "next/image"
import React from "react"

interface Props {
  img: string
  placeholder: string
  name: string
  defaultValue: string
}

function AccountInput({ name, img, placeholder, defaultValue }: Props) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
      <Image
        src={`/wallets/${img}`}
        width={30}
        height={30}
        style={{ borderRadius: "50%" }}
        alt={`${img} logo`}
      />
      <input
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: 10,
          borderRadius: 5,
          border: "1px solid #ddd",
        }}
        name={name}
        type='number'
        defaultValue={defaultValue}
      />
    </div>
  )
}

export default AccountInput
