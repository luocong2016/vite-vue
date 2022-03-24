<script setup lang="ts">
import { reactive } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@/components/HelloWorld.vue'
import { userInfo } from '@/api/user'

const account = {
  account: 'admin',
  password: 'admin'
}

const user = reactive({
  account: '',
  age: 0,
  city: '',
  country: '',
  email: '',
  mobile_phone: '',
  nickname: '',
  province: '',
  region: '',
  uid: '',
  url: ''
})

userInfo(account).then(res => {
  Object.assign(user, res)
})
</script>

<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <div>{{ user.nickname }}</div>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
