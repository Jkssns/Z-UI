<template>
  <div>
    <p>展示区</p>

    <div class="box">
      <em>button</em>
      <z-button>我是button</z-button>
      <z-button type="primary" round disabled>我是button</z-button>
    </div>

    <div class="box">
      <em>input</em>
      <z-input value="我是input" />
    </div>

    <div class="box">
      <em>select</em>
      <z-select></z-select>
    </div>

    <div class="box">
      <em>dialog</em>
      <z-button size="small" round @click="visible=true">点击显示dialog</z-button>
      <z-dialog title="我是标题" :visible.sync="visible" >
        <template #content>
            这里填写内容，如无内容请去掉 #content
        </template>
        <template #footer>
          <z-button @click="visible=false">取消</z-button>
          <z-button type="primary" @click="visible=false">确定</z-button>
        </template>
      </z-dialog>
    </div>

  </div>
</template>


<script>
export default {
  name: 'home',
  data() {
    return {
      description: '展示组件页面',

      visible: false,
    }
  },
  created() {
  },
  methods: {

  }
}
</script>


<style lang="scss" scoped>
.box {
  margin-top: 20px;
  em {
    margin-right: 50px;
  }
}
</style>