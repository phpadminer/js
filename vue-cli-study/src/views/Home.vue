<!--
 * @Descripttion : 
 * @[tip]        : 1. 
 * @version      : 
 * @Author       : ghosthao
 * @Date         : 2020-06-18 15:18:32
--> 
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted(){
    this.getInfo();
  },
  methods:{
    getInfo(){
axios.post('api/ghSmartOption/v1/getSelectOrgInfo',{}).then((res)=>{
      console.log(res);
    })
    }
  }
}
</script>
