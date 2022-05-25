<template>
<div id="aboutpage" class=" w-screen h-screen py-8 " :style="{'background-color':'#E0E0E0'}">
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-10 mx-auto">
     
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class=" mb-6 md:w-1/2 w-5/6 pl-6 ">
          
<!-- lg:max-w-lg lg:w-full md:w-1/2 w-5/6 -->
    <img src="@/assets/images/profile.jpeg" class="rounded-xl w-96" alt="">
        </div>
        <div class="md:flex-grow pl-6 mt-4">
          
          <p>Michelle Ramela is a Software Developer graduate from Tshwane University of Technology,she is based in Pretoria but currently residing in Johannesburg Aucklandpark.She has an experience of developing systems and software that allow users to perform specific tasks on computers and other devices.She have a methodical, customer-focused approach to work and strong drive <br>to see things through to completion.A front-end developer she is with a keen eye for creating engaging UI, bringing products <br>to life.
            Fast-forward to today, she had the privilege of working with The Digital Academy, a start-up, a huge corporation <br>where she developed 2 mobile applications 1 with ionic and the 2nd with angular , and currently learning Vue 3,with <br>the use of tailwind css for stylying by building simple projects (including this portfolio 😊).</p> 
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        
       
        <div class="md:flex-grow">
           <h1 class="block text-md 
                    flex justify-center items-center">SKILLS
                </h1> 
           <div
			class="font-general-regular container mx-auto py-8 block sm:flex  sm:items-center gap-20">
      
            <div class="sm:mb-0">
                <img src="@/assets/icons/angular.svg"
                
					class="block text-md 
                    flex justify-center items-center pl-6 w-16 md:w-32 lg:w-48 "
                    
				>
				<p class="block text-md 
                    flex justify-center items-center pl-6">	Angular 2+
                </p>
				
            </div>
            <div class="sm:mb-0">
                <img src="@/assets/icons/typescript.svg"
                class="block text-md 
                    flex justify-center items-center pl-6 w-16 md:w-32 lg:w-48"
                    
				>
                <p class="block text-md 
                    flex justify-center items-center pl-6">TypeScript
                </p>
            </div>
             <div class=" sm:mb-0 mb">
                <img src="@/assets/icons/html.svg"
                class="block text-md 
                    flex justify-center items-center pl-6 w-16 md:w-32 lg:w-48"
                    
				>
                <p class="block text-md 
                    flex justify-center items-center  pl-6">HTML
                </p>
            </div>
             <div class=" sm:mb-0 mb">
                <img src="@/assets/icons/git.svg"
                class="block text-md 
                    flex justify-center items-center pl-6 w-16 md:w-32 lg:w-48"
                    
				>
                <p class="block text-md 
                    flex justify-center items-center pl-6">Git
                </p>
            </div>
            <div class=" sm:mb-0 mb">
                <img src="@/assets/icons/node.svg"
                class="block text-md 
                    flex justify-center items-center pl-6 w-16 md:w-32 lg:w-48"
                    
				>
                <p class="block text-md 
                    flex justify-center items-center pl-6">Node.js
                </p>
            </div>
             <div class=" sm:mb-0 mb">
                <img src="@/assets/icons/sql.svg"
                class="block text-md 
                    flex justify-center items-center pl-6 w-16 md:w-32 lg:w-48"
                    
				>
                <p class="block text-md 
                    flex justify-center items-center pl-6">Postgress
                </p>
            </div>
            <div class=" sm:mb-0 mb">
                <img src="@/assets/icons/c++.svg"
                class="block text-md 
                    flex justify-center items-center pl-6 w-16 md:w-32 lg:w-48"
                    
				>
                <p class="block text-md 
                    flex justify-center items-center pl-6">C++
                </p>
            </div>
        </div>
        </div>
      </div>
     
   
  </div>
</section>

      
 
    
    
  </div>
  
<footer-page />
</template>

<script>
import FooterPage from "@/components/FooterPage.vue"
    export default{
        components:{
        FooterPage,
  },
  name:'AboutPage',
  data (){
   return{
    title:'AboutPage'
   }
  }
 }
</script>

<style scoped>
h1{
  font-family: "Merienda", Helvetica, Arial;
     font-size: 50px;
    
}
img{
  width: 100%;
}
</style>