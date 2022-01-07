const colorList = [
  {
    title: "文本",
    list: [
      {
        name: "标题和链接",
        key: "color_text",
        defaultVal: '#001040'
      },
      {
        name: "正文文本",
        key: "color_body_text",
        defaultVal: '#333333'
      },
      {
        name: "销售价格",
        key: "color_sale_text",
        defaultVal: '#FF6D00'
      },
    ],
  },
  {
    title: "按钮",
    list: [
      {
        name: "主要按钮背景",
        key: "color_button",
        defaultVal: '#304FFE'
      },
      {
        name: "主要按钮字体",
        key: "color_button_text",
        defaultVal: '#FFFFFF'
      },
      {
        name: "次按钮背景",
        key: "color_small_button_bg",
        defaultVal: '#FFFFFF'
      },
      {
        name: "次要标签/边框",
        key: "color_small_button_text_border",
        defaultVal: '#304FFE'
      },
    ],
  },
  {
    title: "表单",
    list: [
      {
        name: "表单文本",
        key: "color_text_field_text",
        defaultVal: '#333333'
      },
      {
        name: "表单边框",
        key: "color_text_field_border",
        defaultVal: '#ECECEC'
      },
      {
        name: "表单背景",
        key: "color_text_field",
        defaultVal: '#fff'
      },
    ],
  },
  {
    // 图片上的叠
    title: "图片上的叠加",
    list: [
      {
        name: "文本",
        key: "color_image_overlay_text",
        defaultVal: ''
      },
      {
        name: "背景",
        key: "color_image_overlay",
        defaultVal: ''
      },
    ]
  },
  {
    title: "页面",
    list: [
      {
        name: "边框和线条",
        key: "color_borders",
        defaultVal: ''
      },
      {
        name: "背景",
        key: "color_body_bg",
        defaultVal: ''
      },
      {
        name: "卡片背景",
        key: "color_card",
        defaultVal: ''
      },
    ]
  }
]

export default colorList
/*
文本: {
  color_text: '', // 文本 - 标题和链接
  color_body_text: '', // 文本-正文文本
  // 销售价格????
  color_activity_label // 折扣
 
}
按钮: {
  color_button: '', // 按钮 - 主要按钮 链接颜色
  color_button_text: '', // 按钮 - 主要标签
  color_small_button_bg: '', // 次按钮背景
  color_small_button_text_border: '', // 按钮 - 次要标签和边框
}
表单: { // ok
  color_text_field_text: '', // 表单文本
  color_text_field_border: '', // 表单边框
  color_text_field: '' // 表单背景
}

图片上的叠加: { // ok 和设计的不一致
  color_image_overlay_text: '', // 图片叠加 - 文本
  color_image_overlay: '', // 图片叠加 - 背景
  image_overlay_opacity: '', // 图片叠加 - 不透明度
}

页面: { // ok
   color_borders: '', // 页面 - 边框和线条
   color_body_bg: '', // 页面-背景
   color_card: '', // 卡片颜色
}

功能色: { // ok
  color-error: '', // 功能色-错误
  color-success: '', // 功能色-成功
  color-warning: '', // 功能色-警告
  color-star: '', // 功能色-评星
}



阴影: { // ok
  // 大阴影, 正文8%模糊16px
  // 小阴影, 正文8%模糊8px
}
  
*/

/*

// color_text: '', // 文本 - 标题和链接
// color_body_text: '', // 文本-正文文本
color_sale_text: '', // 文本 - 销售价格
// color_button: '', // 按钮 - 主要按钮 链接颜色
// color_button_text: '', // 按钮 - 主要标签
color_small_button_text_border: '', // 按钮 - 次要标签和边框
color_image_overlay_text: '', // 图片叠加 - 文本
color_image_overlay: '', // 图片叠加 - 背景
image_overlay_opacity: '', // 图片叠加 - 不透明度
color_borders: '', // 页面 - 边框和线条
color_body_bg: '', // 页面-背景
type_base_font: '', // 正文文本 - 字体
type_base_size: '', // 正文文本 - 基本尺寸
type_header_base_size: '', // 标题和按钮 - 标题基本尺寸
type_header_font: '', // 标题和按钮 - 字体
type_sale_price_font: '', // 商品价格文本 - 字体
type_sale_price_size: 100, // 商品价格文本 - 基本尺寸
type_sale_origin_price_font: '', // 商品原价划线价文本 - 字体
type_sale_origin_price_size: 100, // 商品原价划线价文本 - 基本尺寸
color_text_field_text: '', // 表单文本
color_text_field_border: '', // 表单边框
color_text_field: '', // 表单背景
color_card: '', // 卡片颜色
// color_activity_label: '', // 活动边标签
color_small_button_bg: '', // 次按钮背景

*/
