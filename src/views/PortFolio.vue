<template>
  <div id="portfolio" class=" w-screen h-screen py-8" :style="{'background-color':'#E0E0E0'}">

  <div class="container mx-auto mb-8 px-20">
    <div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter"> PROJECTS</h3>
    </div>
  </div>
</div>

<div style='bg-purple'>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4  pt-20 pb-10 lg:pt-2 lg:pb-20" style="cursor: auto;">
            
  <div class="p-6 mb-40 bg-gray-100 rounded-lg">
              
    <div class=" flex justify-center items-center">
                
      <img src="@/assets/images/twoMinds.png">
              
    </div>
              
    <h3 class="text-lg font-bold mb-2">
                1. TwoMinds
              </h3>
              
    <p class="text-sm leading-6 text-gray-600">
TwoMinds is a mental health awareness app that enable users to be educated about how to ease their mental weell being.
              </p>
               <div class="mt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Agular</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tailwind</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML</span>
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TypeScript</span>
      </div>
            
  </div>
            
  <div class="p-6 mb-40 bg-gray-100 rounded-lg">
              
    <div class="mb-5 flex justify-center items-center">
                
      <img src="@/assets/images/DApp.png">
              
    </div>
              
    <h3 class="text-lg font-bold mb-2">
                2. Doc'sApp
              </h3>
              
    <p class="text-sm leading-6 text-gray-600">
A doctor appointment app is a software application that is especially meant to help patients manage and schedule appointments with the doctors.
              </p>
             <div class="mt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Ionic</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Bootstrap</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML</span>
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TypeScript</span>
      </div>
  </div>
  
            
  <div class="p-6 mb-40 bg-gray-100 rounded-lg" style="cursor: auto;">
              
    <div class="" style="cursor: auto;">
                
      <img src="@/assets/images/movieApp.jpeg">
              
    </div>
              
    <h3 class="text-lg font-bold mb-2">
                3. MovieApp
              </h3>
              
    <p class="text-sm leading-6 text-gray-600">
 Movie Database Application,is used to give users access to movies they love,create account,and allow them to add to their watchlist.
              </p>
              <div class="mt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Bootstrap</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML</span>
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TypeScript</span>
      </div>
            
  </div>
            
  <div class="p-6 mb-40 bg-gray-100 rounded-lg">
              
    <div class="flex justify-center items-center object-top">
                
       <img src="@/assets/images/Virus-amico.svg">
       
    </div>
              <h3 class="text-lg font-bold mb">
                4. Blog
              </h3>
    
              
    <p class="text-sm leading-6 text-gray-600">
 Corona Virus Blog campaign was created to educate users about the seriousness of the virus since it was of the time it first hit our country.
              </p>
           <div class="mt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Angular8</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CSS</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML</span>
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TypeScript</span>
      </div> 
  </div>
          
</div>
</div>
</div>
</div>  
<footer-page />
</template>
<script>
import FooterPage from "@/components/FooterPage.vue"
export default {
  components:{
    FooterPage
  }

};
</script>
<style>
.animate-charcter
{
   text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #E0E0E0 0%,
    #C0B6FF 29%,
    #E0E0E0 67%,
    #C0B6FF 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
      font-size: 90px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>