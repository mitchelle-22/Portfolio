<template>
<div id="app">
  

  
   
    <nav-page />
    <router-view />
    
   
 
</div>

  
</template>

<script>
import NavPage from '@/components/NavPage.vue'

export default {
  components:{
    
    NavPage
  },
}
</script>