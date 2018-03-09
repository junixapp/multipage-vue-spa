<template>
  <div>
    <div class="user" v-if="$store.state.user">
      当前用户：{{$store.state.user.username}}
      <button class="btn-fw" @click="gotoPay">去支付</button>
    </div>
    <div v-else>
      <button class="btn-fw" @click="gotoAccount">登录/注册</button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "CBTest",
    data() {
      return {}
    },
    methods: {
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
</style>
