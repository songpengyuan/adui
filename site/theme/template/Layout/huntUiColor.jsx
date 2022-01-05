import React, { useState } from "react"
import styles from "./site.scss"

import {
  ColorPicker,
  Popover,
} from "../../../../components"

export const UiColor = () => {
  const [color, setColor] = useState("#07c160")
  const [visible, setVisible] = useState("#07c160")

  const handleColorChange = (val) => {
    document.documentElement.style.setProperty("--primary-color", val)
    setColor(val)
  }

  const handleVisibleChange = (val) => {
    setVisible(val)
    if (val) {
      setColor(
        getComputedStyle(document.documentElement)
          .getPropertyValue("--primary-color")
          .trim()
      )
    }
  }

  return (
    <Popover
      arrowed={false}
      placement="bottomRight"
      getPopupContainer={(trigger) => trigger.parentNode}
      popup={
        <div style={{ padding: "10px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {[
              "#07c160",
              "#4285F4",
              "#0AC2A9",
              "#ED8D18",
              "#D259D4",
              "#525252",
            ].map((o, i) => (
              <div
                key={o}
                role="none"
                onClick={() => handleColorChange(o)}
                style={{
                  display: "inline-block",
                  width: "30px",
                  height: "30px",
                  marginRight: i !== 5 ? "6px" : 0,
                  marginBottom: "6px",
                  backgroundColor: o,
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
          <ColorPicker value={color} onChange={handleColorChange} />
        </div>
      }
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <div className={styles.picker}>
        <i style={{ backgroundColor: "var(--primary-color)" }} />
      </div>
    </Popover>
  )
}
