<template>
  <div class="">
      <div class="container mx-auto mt-64 px-16">
        <div class="flex">
          <div class="w-1/3 relative">
            <truck-icon class="custom-class w-32 h-32 text-white absolute"></truck-icon>
            <div class="w-full flex justify-end">
                <div class="w-2/3 ">
                  <h2 class="title font-semibold ">FREE SHIPPING</h2>
                  <p class="text-xs mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atas nihil non culpa!</p>
                </div>
            </div>
          </div>
          <div class="w-1/3 relative">
            <credit-card-icon class="custom-class w-32 h-32 text-white absolute"></credit-card-icon>
            <div class="w-full flex justify-end">
                <div class="w-2/3 ">
                  <h2 class="title font-semibold ">10 DAY AT-HOME TRIAL</h2>
                  <p class="text-xs mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atas nihil non culpa!</p>
                </div>
            </div>
          </div>
          <div class="w-1/3 relative">
            <pocket-icon class="custom-class w-32 h-32 text-white absolute"></pocket-icon>
            <div class="w-full flex justify-end">
                <div class="w-2/3 ">
                  <h2 class="title font-semibold ">4-YEAR/20K-MILE WARRANTY</h2>
                  <p class="text-xs mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atas nihil non culpa!</p>
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.title{
    color: #2f2f2f;
  transform: scale(1, 1.8);
}
.custom-class{
  z-index: -1;
    top:-140%;
    left: 15%;
}
p{
          color: #979696;
}
</style>