import React, { useState, useEffect } from "react"
import { ColorPicker, Popover } from "../../../../components"
import styles from "./site.scss"
import colorList from "./const"

const UIColorItem = ({ colorItem }) => {
  const { name, key } = colorItem
  const [color, setColor] = useState(colorItem?.defaultVal ?? "#07c160")
  const handleColorChange = (val) => {
    document.documentElement.style.setProperty(`--${key}`, val)
    setColor(val)
  }

  useEffect(() => {
    document.documentElement
            .style
            .setProperty(`--ht-${key}`, colorItem?.defaultVal)
  }, [])

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "6px",
    }}
      title={key}
    >
      {name}
      <ColorPicker
        style={{
          width: '128px'
        }}
        value={color}
        onChange={handleColorChange}
      />
    </div>
  )
}

const UiColorList = () => {
  return (
    <div style={{padding: '10px', maxHeight: '400px', overflow: 'auto' }}>
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
                {item?.list?.map(colorItem => {
                  return (
                    <UIColorItem
                      colorItem={colorItem}
                      key={colorItem.key}
                    />
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
        maxWidth: 'auto'
      }}
    >
      <div className={styles.picker}>
        <i style={{ backgroundColor: "var(--primary-color)" }} />
      </div>
    </Popover>
  )
}
