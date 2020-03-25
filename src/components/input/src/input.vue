<template>
    <input type="text" :value="value || defaultValue" style="width: 200px;height: 40px;">
</template>


<script>
export default {
  name:'ZInput',
  props:{
    value: {
      required: false,
      default: ''
    },
    defaultValue: {
      required: false,
      default: ''
    }
  },
  created(){

  },
  methods:{

  }
}
</script>


<style lang="less" scoped>

</style>