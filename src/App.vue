<template>
<div id="app">
  

  
   
    <nav-page />
    <router-view />
    <footer-page />
   
   
 
</div>

  
</template>

<script>

import FooterPage from '@/components/FooterPage.vue'
import NavPage from '@/components/NavPage.vue'

export default {
  components:{
    FooterPage,
    NavPage
  },
}
</script>