<template>
    <button 
    :autofocus="autofocus"
    :disabled="disabled"
    @click="handleClick" 
    :class="[
      type===''?'z-default':'z-'+type,
      size===''?'':'z-'+size,
      {
      'z-disabled':disabled,
      'z-round':round,
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
@import './css/index.css'
</style>