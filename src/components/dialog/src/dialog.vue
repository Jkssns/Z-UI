<template>
  <div>
    <transition name="dialog-fade">
      <div v-show="visible" class="z-dialog-wrapper" @click="cancel">
        <div class="z-dialog" @click.stop="stop">

          <!-- 标题区域 -->
          <header>
            <slot>{{title}}</slot>
            <i class="iconfont icon-close close" @click="cancel"></i>
          </header>
          
          <!-- 内容区域 -->
          <section v-if="$slots.content">
            <slot name="content">
              <!-- <p>一些内容...</p>
              <p>一些内容...</p>
              <p>一些内容...</p> -->
            </slot>
          </section>

          <!-- 按钮区域 -->
          <footer v-if="$slots.footer">
            <slot name="footer"></slot>
          </footer>

        </div>
      </div>
    </transition>
  </div>
</template>


<script>
export default {
  name: 'ZDialog',
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: false
    },
    showClose: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: '标题'
    }
  },
  data() {
    return {
      description: 'dialog组件页面',
    }
  },
  created() {
    console.log(this)
  },
  methods: {
    stop(){
      // do nothing
    },
    cancel(){
      this.$emit('update:visible', false)
    },
  },
}
</script>


<style lang="less" scoped>
/* 背景区 */
.z-dialog-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
  /* 展示区 */
  .z-dialog {
    position: absolute;
    top: 15vh;
    left: 50%;
    width: 30%;
    transform: translate(-50%, 0);
    background: white;
    box-sizing: border-box;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    background: #fff;
    /* 标题区 */
    header {
      position: relative;
      padding: 16px 24px;
      background: #fff;
      border-bottom: 1px solid #f0f0f0;
      border-radius: 2px 2px 0 0;
      .close {
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 18px;
        cursor: pointer;
      }
    }
    /* 内容区 */
    section {
      padding: 24px;
      font-size: 14px;
      line-height: 1.5715;
      word-wrap: break-word;
    }
    /* 按钮区 */
    footer {
      padding: 10px 16px;
      text-align: right;
      background: transparent;
      border-top: 1px solid #f0f0f0;
      border-radius: 0 0 2px 2px;
    }
  }
}
/* 过度动画区 */
.dialog-fade-enter-active {
  animation: dialog-fade-in 0.3s;
}

.dialog-fade-leave-active {
  animation: dialog-fade-out 0.3s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>