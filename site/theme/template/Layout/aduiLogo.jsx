import React from "react"

export const LogoLeft = (props) => (
  <img
    src="https://img.yzcdn.cn/v2/image/allvalue_fc.ico"
    alt=""
    width={30}
    height={30}
    {...props}
  />
)

export const LogoRight = (props) => (
  <div
    {...props}
    style={{
      fontSize: "var(--font-size-large)",
      lineHeight: "24px",
      color: "#000",
      fontWeight: 500,
    }}
  >
    Hunt UI
  </div>
)
