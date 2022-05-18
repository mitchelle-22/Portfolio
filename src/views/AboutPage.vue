<template>
<div id="aboutpage" class=" w-screen h-screen py-8 " :style="{'background-color':'#E0E0E0'}">


<div class="container flex justify-between gap-4  ">
<div class=" w-full pl-40 mt-7 sm:mb-0 img" >
  <div class="flex flex-1">
    <img  srcset="large-img.jpeg 1024w,
middle-img.jpeg 640w,
small-img.jpeg  320w" src="@/assets/images/profile.jpeg" class="rounded-xl" alt="">
  </div>
</div>
  <!-- ... -->
  <div class="flex justify-center items-center text-lg font-medium pt-6 md:p-8 text-center md:text-left">
    
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta, quibusdam similique vero, ratione accusantium sapiente libero nihil dolorum enim dolores? Quis quisquam fugit repellendus repudiandae laboriosam! Libero, totam nemo. Incidunt, consequuntur, nihil tenetur vitae adipisci pariatur eos est officia unde laboriosam repudiandae. Sit laudantium ut deserunt? Facere quod, dolore illo eos libero deleniti rem vitae nesciunt minima ipsa! Sit iste tenetur quo eum sequi exercitationem dolores, quas id, nam eveniet laudantium distinctio nostrum adipisci quam at voluptates accusantium porro optio quisquam accusamus fuga nobis. Dicta aperiam aliquam perspiciatis necessitatibus molestias id dolorem soluta ipsum reprehenderit. A repellendus laboriosam dolorum.</p>
    
  </div>
</div>
    <div class="mt-5 sm:mt-5 bg-grey ">
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
  

</template>

<script>
    export default{
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