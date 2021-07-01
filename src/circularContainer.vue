<template>
  <div class="circular-container" :style="circularStyle">
    <span class="content-before"></span>
    <span class="content-after"></span>
    <p>
      <!-- 可能第一个字独立占一行，使用换行符 -->
      <br v-if="!emptyFirstLine" />
      {{text}}
    </p>
  </div>
</template>
<script>
export default {
  name: 'circular-container',
  props: {
    text: {
      type: String,
      default: ''
    },
    fontSize: {
      type: String,
      default: '14'
    },
    width: {
      type: String,
      default: '200'
    },
    height: {
      type: String,
      default: '200'
    },
    color: {
      type: String,
      default: '#000'
    },
    background: {
      type: String,
      default: 'deepskyblue'
    },
    padding: {
      type: String,
      default: '5'
    },
    emptyFirstLine: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      circularStyle: {}
    }
  },
  created () {
    if (this.fontSize) this.circularStyle.fontSize = this.fontSize + 'px'
    if (this.width) this.circularStyle.width = this.width + 'px'
    if (this.height) this.circularStyle.height = this.height + 'px'
    if (this.color) this.circularStyle.color = this.color
    if (this.padding) this.circularStyle.padding = this.padding
    if (this.background) this.circularStyle.background = this.background
  }
}
</script>
<style scoped>
.circular-container{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: deepskyblue;
  padding: 5px;
}
.circular-container .content-before{
  float: left;
  width: 50%;
  height: 100%;
  shape-outside: radial-gradient(farthest-side ellipse at right, transparent 98%, red);
}
.circular-container .content-after{
  float: right;
  width: 50%;
  height: 100%;
  shape-outside: radial-gradient(farthest-side ellipse at left, transparent 98%, red);
}
</style>