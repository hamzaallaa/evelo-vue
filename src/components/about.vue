<template>
  <div class="container mx-auto">
      <div class=" mx-16 mt-12 text-5xl font-bold w-1/12 title">BIKE FEATURES</div>
      <div class="">
          <span></span>
          <div class="relative content" >
              <img class="m-auto w-4/5" src="https://storeno.b-cdn.net/stores/5-2022/1652705755406.png" alt="">
                <div class="card px-12 py-16">
                    <h2 class="font-extrabold"><span class="relative">MOTIONDRIVE <span class="text-xs mt">TM</span> </span>  <span>SYSTEM</span> </h2>
                    <p class="mt-3 text-xs leading-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, ex minus! Voluptatibus iure placeat labore minima maxime accusamus fugit ducimus!</p>
                    <div class=" flex justify-end">
                      <p class="next mt-5 px-8 py-2" >
                        <router-link to="#">Next --></router-link>
                      </p>
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

<style lang="scss" scoped>
.next{
    background-color: #ed6546;
    color: #fff !important;
}
.title{
    color: #2f2f2f;
  transform: scale(.8, 1.5);
}
.card{
    position: absolute;
    background: #fff;
    border-top: 3px solid #ed6546;
    max-width: 320px;
    left: 50%;
    top:100px;
    h2{
     transform: scale(.8, 1.8);
     color: #2f2f2f;
    }
     .mt{
            transform: scale(.5,.5) !important;
      }
      p{
          line-height: 23px;
          color: #979696;
      }

}
.content::before{
    content: "01";
    color: #fff;
    position: absolute;
    font-size: 400px;
    z-index: -1;
    top: 0;
    left: 0;
    font-weight: bold;
  transform: scale(.7, 1.5);

}
</style>