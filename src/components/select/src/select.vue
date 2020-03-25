<template>
  <div class="z-select-wrapper">
      <!-- <span >&or;</span> -->
      <i class="iconfont icon-down z-v" :style="{transform: selectIconOnFocus?'rotate(180deg)':'rotate(0deg)'}"></i>
      <select 
        class="z-select"
        name="" 
        id=""
        @click="handleFocus"
        @blur="handleBlur"
        v-model="onChangeVal"
      >
      <option value='' disabled selected style='display:none;'>Please Choose</option>  
        <option v-for="(item,index) in options" :key="index" :value="item.name">
          {{item.name}}
        </option>
      </select>
  </div>
</template>


<script>
export default {
  name:'ZSelect',
  props:{
    options:{
      type: Array,
      required: false,
      default: () => [
        {
          name: 1,
        },
        {
          name: 2,
        },
        {
          name: 3,
        },
      ]
    },
    placeholder:{
      type: String,
      required: false,
      default: '请选择'
    },
  },
  data(){
    return{
      description: 'select组件页面',

      onChangeVal: null,

      selectIconOnFocus: false
    }
  },
  methods:{
    handleFocus(event){
      console.log(event)
      this.selectIconOnFocus = !this.selectIconOnFocus
    },
    handleBlur(event){
      this.selectIconOnFocus = false
    },
  },
  watch:{
    onChangeVal(newVal,oldVal){
      if(newVal !== oldVal){
        this.selectIconOnFocus = false
      }
    }
  }
}
</script>


<style scoped>
@import './css/index.css'
</style>