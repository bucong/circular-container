### Examples, 样例
<img src="https://img-blog.csdnimg.cn/20210402135934396.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JvY29uZ2Jv,size_16,color_FFFFFF,t_70" width="300">

### Notice
Not support IE 不支持IE浏览器
## Installation
**install with NPM**
```bash
npm install circular-container --save
```
## Usage
**In template**

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
  background: 'deepskyblue',
  emptyFirstLine: true
})
```
Parameter | Explanation
----|----
text | 文本（必填）
fontSize |  字体大小
width | 宽度
height | 高度
color | 文字的颜色
background | 背景颜色
emptyFirstLine | 空出首行
padding | 内边距
