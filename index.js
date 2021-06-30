/*
 * @Author: Cong.Bu 
 * @Date: 2021-06-30 10:32:57 
 * @Last Modified by: Cong.Bu
 * @Last Modified time: 2021-06-30 14:49:25
 */

/*
  * 参数 data
  * fontSize 文字大小
  * text 文本
  * width 宽度
  * height 高度 可选（不填与width同值）
  * color 文字颜色
  * background 背景颜色
  * emptyFirstLine 空出首行
*/
var circularContainer = (data) => {
  var circularDOM = document.getElementById('circular-container')
  if (circularDOM) {
    if (!data.height) data.width = 200
    if (!data.height) data.height = data.width
    if (!data.fontSize) data.fontSize = 14
    if (!data.padding) data.padding = 0
    if (!data.color) data.color = '#000'
    if (!data.background) data.background = 'deepskyblue'
    if (!data.emptyFirstLine) data.emptyFirstLine = false
    var inputDOM = `<div class="circle-box" style="width: ${data.width}px;height: ${data.height}px;border-radius: 50%;background: ${data.background};padding: ${data.padding}px;">
      <span class="content-before" style="float: left;width: 50%;height: 100%;shape-outside: radial-gradient(farthest-side ellipse at right, transparent 98%, red);"></span>
      <span class="content-after" style="float: right;width: 50%;height: 100%;shape-outside: radial-gradient(farthest-side ellipse at left, transparent 98%, red);"></span>
      <p>
        ${data.emptyFirstLine?'<br />':''}
        ${data.text}
      </p>
    </div>`
    circularDOM.innerHTML = (inputDOM)
  }
}

export default circularContainer