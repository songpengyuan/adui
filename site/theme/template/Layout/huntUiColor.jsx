import React, { useState, useEffect } from "react"
import { ColorPicker, Popover } from "../../../../components"
import styles from "./site.scss"
import colorList from "./const"

const getColorToRgb = (color) => {
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  let sColor = color.toLowerCase()
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = "#"
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
      }
      sColor = sColorNew
    }
    // 处理六位的颜色值
    const sColorChange = []
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(
        parseInt(`0x${sColor.slice(i, i + 2)}`, 10)
      )
    }
    // return `RGB(${sColorChange.join(",")})`
    return sColorChange.join(",")
  }
  return sColor
}




const setDocumentColor = (key, val) => {
  if (key === "color_button_bg") {
    document.documentElement.style.setProperty("--primary-color", val)
  }
  document.documentElement.style.setProperty(`--ht-${key}`, val)
}

const UIColorItem = ({ colorItem }) => {
  const { name, key } = colorItem
  const [color, setColor] = useState(colorItem?.defaultVal ?? "#07c160")
  const handleColorChange = (val) => {
    setDocumentColor(key, val)
    setColor(val)
  }
  return (
    <div
      style={{
        // display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "6px",
      }}
      title={key}
    >
      <div>
        <div>{name}</div>
        <div
          style={{
            fontSize: "8px",
            color: "#ddd",
          }}
        >
          {key}
        </div>
      </div>

      <ColorPicker
        style={{
          width: "128px",
        }}
        value={color}
        onChange={handleColorChange}
      />
    </div>
  )
}

const UiColorList = () => {
  return (
    <div style={{ padding: "10px", maxHeight: "400px", overflow: "auto" }}>
      <div
        style={{
          width: "100%",
          marginBottom: "6px",
        }}
      >
        {colorList.map((item) => {
          return (
            <div
              key={item?.title}
              style={{
                paddingBottom: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  marginBottom: "8px",
                }}
              >
                {item?.title}
              </div>
              <div>
                {item?.list?.map((colorItem) => {
                  return (
                    <UIColorItem colorItem={colorItem} key={colorItem.key} />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const UiColor = () => {
  const [visible, setVisible] = useState(false)
  const handleVisibleChange = (val) => {
    setVisible(val)
  }
  // 初始化CSS 变量
  useEffect(() => {
    colorList.forEach((item) => {
      item.list.forEach((colorItem) => {
        const { defaultVal, key } = colorItem
        setDocumentColor(key, defaultVal)
      })
    })
  }, [colorList])

  return (
    <Popover
      arrowed={false}
      placement="bottomRight"
      getPopupContainer={(trigger) => trigger.parentNode}
      popup={<UiColorList />}
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
      popupStyle={{
        maxWidth: "auto",
      }}
    >
      <div className={styles.picker}>
        <i style={{ backgroundColor: "var(--primary-color)" }} />
      </div>
    </Popover>
  )
}
