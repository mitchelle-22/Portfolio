<template>
  <div id="portfolio" class=" w-screen h-screen py-8" :style="{'background-color':'#E0E0E0'}">
 <!-- <div class="carousel relative shadow-2xl bg-white mt-16">
	<div class="carousel-inner relative overflow-hidden w-full"> -->
        <!--Slide 1-->
		<!-- <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
		<div class="carousel-item absolute opacity-0" style="height:50vh;">
			<div class="block h-full w-full bg-purple text-grey text-5xl text-center">TwoMinds
                 <video class="w-full" autoplay loop muted>
        <source src="@/assets/videos/Part-1.mp4" type="video/mp4" />
      </video>
            </div>
            
		</div>
       
		<label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-grey hover:text-white rounded-full bg-purple hover:bg-purpleleading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        
		<label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-grey hover:text-white rounded-full bg-purple hover:bg-purple leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> -->
		
		<!--Slide 2-->
		<!-- <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
		<div class="carousel-item absolute opacity-0" style="height:50vh;">
			<div class="block h-full w-full bg-purple text-grey text-5xl text-center">DocApp
                <video class="w-full" autoplay loop muted>
        <source src="@/assets/videos/docApp.mp4" type="video/mp4" />
      </video>
            </div>
		</div>
		<label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-grey hover:text-white rounded-full bg-purplehover:bg-purple leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        
		<label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-grey hover:text-white rounded-full bg-purple hover:bg-purpleleading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>  -->
		
		<!--Slide 3-->
		<!-- <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
		<div class="carousel-item absolute opacity-0" style="height:50vh;">
			<div class="block h-full w-full bg-purple text-grey text-5xl text-center">WebBlog</div>
		</div>
		<label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-grey hover:text-white rounded-full bg-purple hover:bg-purple leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        
		<label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-grey hover:text-white rounded-full bg-purple hover:bg-purple leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> -->

		<!-- Add additional indicators for each slide-->
		<!-- <ol class="carousel-indicators">
			<li class="inline-block mr-3">
				<label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-grey hover:text-grey">•</label>
			</li>
			<li class="inline-block mr-3">
				<label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-grey hover:text-grey">•</label>
			</li>
			<li class="inline-block mr-3">
				<label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-grey hover:text-grey">•</label>
			</li>
		</ol>
		
	</div>
</div> -->

<!-- <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"> -->
    <!--Card 1-->
    <!-- <div class="rounded overflow-hidden shadow-lg">
      <img class="w-75 flex justify-center items-center pl-10" src="@/assets/images/twoMinds.png" alt="twoMinds">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Mountain</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2 h-48 w-50">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div> -->
    <!--Card 2-->
    <!-- <div class="rounded overflow-hidden shadow-lg">
      <img class="w-75" src="@/assets/images/docApp.png" alt="docApp">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">River</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
      </div>
    </div> -->

    <!--Card 3-->
    <!-- <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src="@/assets/images/Virus-amico.svg" alt="Virus-amico">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Forest</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
      </div>
    </div>
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src="@/assets/images/movieApp.jpeg" alt="movieApp">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Forest</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
      </div>
    </div>
  </div> -->
  <div class="container mx-auto mb-8 px-20">

<div style='bg-grey'>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20" style="cursor: auto;">
            
  <div class="p-6 bg-gray-100 rounded-lg">
              
    <div class="mb-20 flex justify-center items-center">
                
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
      </div>
            
  </div>
            
  <div class="p-6 bg-gray-100 rounded-lg">
              
    <div class="mb-5">
                
      <img src="@/assets/images/docApp.png">
              
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
      </div>
  </div>
  
            
  <div class="p-6 bg-gray-100 rounded-lg" style="cursor: auto;">
              
    <div class="mb-20" style="cursor: auto;">
                
      <img src="@/assets/images/movieApp.jpeg">
              
    </div>
              
    <h3 class="text-lg font-bold mb-2">
                3. MovieApp
              </h3>
              
    <p class="text-sm leading-6 text-gray-600">
Metus potenti velit sollicitudin porttitor magnis elit lacinia tempor varius, ut cras orci vitae parturient id nisi vulputate consectetur, primis venenatis cursus tristique malesuada viverra congue risus.
              </p>
            
  </div>
            
  <div class="p-6 bg-gray-100 rounded-lg">
              
    <div class="mb-5">
                
       <img src="@/assets/images/Virus-amico.svg">  
    </div>
              
    <h3 class="text-lg font-bold mb-2">
                4. Blog
              </h3>
              
    <p class="text-sm leading-6 text-gray-600">
Metus potenti velit sollicitudin porttitor magnis elit lacinia tempor varius, ut cras orci vitae parturient id nisi vulputate consectetur, primis venenatis cursus tristique malesuada viverra congue risus.
              </p>
            
  </div>
          
</div>
</div>
</div>
</div>  
</template>
<script>
export default {

};
</script>
<style>

</style>