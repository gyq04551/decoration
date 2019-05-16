<template>
   <div class="bottom-bar">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="one">
        one mintUI 成功引入
        <mt-progress :value="20" :bar-height="5"></mt-progress> 
      </mt-tab-container-item>
      <mt-tab-container-item id="two">
        two mintUI 成功引入
        <mt-progress :value="40" :bar-height="5"></mt-progress> 
      </mt-tab-container-item>
      <mt-tab-container-item id="three">
        three mintUI 成功引入
        <mt-progress :value="60" :bar-height="5"></mt-progress> 
      </mt-tab-container-item>
      <mt-tab-container-item id="four">
        four mintUI 成功引入
        <mt-progress :value="80" :bar-height="5"></mt-progress> 
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="one">
        <img slot="icon" src="../assets/logo.png">
        第一
      </mt-tab-item>
      <mt-tab-item id="two">
        <img slot="icon" src="../assets/logo.png">
        第二
      </mt-tab-item>
      <mt-tab-item id="three">
        <img slot="icon" src="../assets/logo.png">
        第三
      </mt-tab-item>
      <mt-tab-item id="four">
        <img slot="icon" src="../assets/logo.png">
        第四
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui';
export default {
  name: 'HelloWorld',
  data () {
    return {
     sheetVisible: false,
      selected:''
    }
  },
   methods: {

   },
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
