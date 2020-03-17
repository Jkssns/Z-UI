<template>
  <div id="app">
    <zj-button >我没有默认值</zj-button>
    <zj-button disabled type="primary"></zj-button>
    <zj-button round type="success"></zj-button>
    <zj-button type="warn" size="medium"></zj-button>
    <zj-button type="danger" size="small"></zj-button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
  }
}
</script>

<style>
</style>
