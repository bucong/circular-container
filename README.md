# 标题
# 一级标题
## 二级标题
### 三级标题
#### 四级标题

# 表格

参数 | 描述 | 必填 | default
----|----|----|----
text | 文本 | 是 | 
fontSize | 字体大小 | 否 | 14
width | 宽度 | 否 | 200
height | 高度 | 否 | 等于width
color | 文字的颜色 | 否 | #000
background | 背景颜色 | 否 | deepskyblue
emptyFirstLine | 空出首行 | 否 | false
padding | 内边距 | 否 | 0

# 图片

<img src="https://dss1.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/weather/icons/a1.png" width="300">

# 代码

```html
<div id="circular-container"></div>
```
 
```js
import circularContainer from "circular-container"
circularContainer({
  text: "长文本",
  fontSize: 14,
  width: 200,
  height: 200,
  color: '#000',
  padding: 5,
  background: 'deepskyblue',
  emptyFirstLine: true
})
```

# 分割线

第一段内容
***
第二段内容


# 斜体

*斜体*


# 粗体

**粗体**

# 超链接

[百度](https://www.baidu.com/)