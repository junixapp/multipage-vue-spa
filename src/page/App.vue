<template>
  <transition :name="transitionName">
    <router-view></router-view>
  </transition>
</template>

<script>

  export default {
    name: 'app',
    data(){
      return {
        transitionName: 'slide-left'
      }
    },
    mounted() {

    },
    //监听路由的路径，可以通过不同的路径去选择不同的切换效果
    watch: {
      // '$route'(to, from) {
      //   if (to.path == '/') {
      //     this.transitionName = 'slide-right';
      //   } else {
      //     this.transitionName = 'slide-left';
      //   }
      // }
    }

  }
</script>

<style scoped lang="stylus">
  @import "../common/stylus/mixins.styl"
  //.translate-enter-active, .translate-leave-active
  //transition: all .8s
  ///.translate-enter, .translate-leave-to
  /*opacity: 0*/
  // transform: translateX(100%)
  //.app-container
  //  fullscreen()
  //  overflow-y hidden
  //  overflow-x hidden
//
  //.slide-left-enter, .slide-right-leave-active
  //  opacity: .5;
  //  //transform: translate(30px, 0);
  //  transform: scaleX(.5) scaleY(.5);
//
  //.slide-left-leave-active, .slide-right-enter
  //  opacity: .5;
  //  //transform: translate(-30px, 0);
  //  transform: scaleX(.5) scaleY(.5);

</style>
