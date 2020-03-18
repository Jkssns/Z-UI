<template>
    <button 
    :autofocus="autofocus"
    :disabled="disabled"
    @click="handleClick" 
    :class="[
      type===''?'zj-default':'zj-'+type,
      size===''?'':'zj-'+size,
      {
      'zj-disabled':disabled,
      'zj-round':round,
      }
    ]"
    >
      <slot>默认点老子</slot>
    </button>
</template>

<script>
export default {
  name: 'ZButton',
  props:{
    type:{
      type: String,
      required: false,
      default: ''
    },
    size:{
      type: String,
      required: false,
    },
    class: String,
    autofocus: Boolean,
    disabled: Boolean,
    round: Boolean,
  },
  /* data(){
    return{
      description: 'button组件页面',
    }
  }, */
  methods:{
    handleClick(event){
      this.$emit('click',event)
    }
  }
}
</script>

<style scoped>
button {
  position: relative;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  line-height: 1;
  color: white;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  border-radius: 4px;
  box-sizing: border-box;
}
/* size样式 */
.zj-medium{
  padding: 8px 15px;
  font-size: 13px;
}
.zj-small{
  padding: 6px 12px;
  font-size: 12px;
}
/* 禁用样式 */
.zj-disabled{
  opacity: 0.5;
  cursor: no-drop;
}
.zj-disabled:active{
  opacity: 0.5;
}
/* 圆角button */
.zj-round{
  border-radius: 20px;
}
/* 背景样式 */
.zj-default{
  color: black;
  border: 1px solid #ddd;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
}
.zj-default:hover, .zj-default:focus {
  color: #40a9ff;
  border-color: #40a9ff;
}
.zj-primary {
  background: #409eff;
}
.zj-success {
  background: #67c23a;
}
.zj-warn {
  background: #e6a23c;
}
.zj-danger {
  background: #f56c6c;
}
/* 点击效果 */
button:active {
  opacity: 0.8;
}
</style>