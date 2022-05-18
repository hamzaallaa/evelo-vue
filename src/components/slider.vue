<template>
  <div class="bg  text-white relative ">
      <div >
        <Header class="container mx-auto h-full" />
        <div class="relative" >
            <div class="container mx-auto h-full h-full flex items-center rela justify-between mt-32">
                <div class="w-1/6 flex items-center flex-col justify-center">
                    <div class="play p-10 rounded-full "> <play-icon class="custom-class w-3 h-3"></play-icon> </div>
                    <span class=" mt-20 rotate">PLAY VIDEO</span>
                </div>
                <div class="w-3/6 flex items-center flex-col mt-32">
                    <h1 class="text-8xl title font-bold">LIVE LIFE TO THE FULLES?</h1>
                    <p class="text-xs w-3/5  mt-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dicta optio molestias dolore tempora ab unde consequuntur .</p>
                </div>
                <div class="w-2/6">
                <div class="shop absolute bottom-0 right-0 py-12 px-32">
                    <router-link to="#">SHOP BIKS --></router-link>
                </div>
                </div>
            </div>
        </div>
      </div>
   <div class="w-1/2 py-20 mt-20 rectangle"></div>
  </div>
</template>

<script>
import header from './header.vue'
export default {
components:{
    "Header":header
}
}
</script>

<style scoped>
.rotate{
  font-size: 8px;
  z-index: 99;
    transform: rotate(90deg) scale(1,1);
    /* transform: rotate3d(1, 2, 10, 90deg); */
}
.title{
  display: inline-block;
  transform: scale(.8, 1.5);
}
.rectangle{
    background-color: #e5ebee;
    position: relative;
    z-index: 1;
}
.rotate::before{
    content: "";
    width: 250px;
    position: absolute;
    left: 100px;
    top: 5px;
    z-index: 999;
    height: 1px;
    background: #918f8f6d;

}
.shop{
    background-color: #ed6546;
}
.play{
    background: #918f8f6d;
}
.bg{
    background-image: linear-gradient(to right, #111111de,#111111de, #0d0d0d3b), url(https://electricbikereport.com/wp-content/uploads/2019/11/EVELO-Aurora-Limited-electric-bike-8-scaled.jpeg);
    background-size: 100% 100% !important;
}
</style>