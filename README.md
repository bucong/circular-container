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

```html
<circular-container :text="text" />
```

```js
import circularContainer from 'circular-container'
export default {
  components: {
    circularContainer
  },
  data () {
    return {
      text: '我是长文本，我是长文本，我是长文本，我是长文本，我是长文本，我是长文本，我是长文本，我是长文本，我是长文本，我是长文本，我是长文本'
    }
  }
}
```

## Params
Parameter | Explanation | 必填 | default
----|----|----|----
text | 文本 | 是 | 
fontSize | 字体大小 | 否 | 14
width | 宽度 | 否 | 200
height | 高度 | 否 | 等于width
color | 文字的颜色 | 否 | #000
background | 背景颜色 | 否 | deepskyblue
emptyFirstLine | 空出首行 | 否 | false
padding | 内边距 | 否 | 0
