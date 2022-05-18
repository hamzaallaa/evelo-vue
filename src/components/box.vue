<template>
  <div class="card ml-10 mt-64  ">
      <div class="container mx-auto">
        <div class="flex">
          <div class="w-1/2 py-32 pl-64">
             <div class="flex ">
                <star-icon size="1.5x" class="custom-class w-4 h-4"></star-icon>
                <star-icon size="1.5x" class=" mx-1 w-4 h-4 custom-class"></star-icon>
                <star-icon size="1.5x" class=" mx-1 w-4 h-4 custom-class"></star-icon>
                <star-icon size="1.5x" class=" mx-1 w-4 h-4 custom-class"></star-icon>
                <star-icon size="1.5x" class=" mx-1 w-4 h-4 custom-class"></star-icon>
             </div>
             <p class="mt-2 para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, perferendis ipsum rerum eveniet pariatur rem repellendus reiciendis praesentium ea vel, et harum numquam! Aspernatur nostrum ratione optio labore consectetur maxime.</p>
             <div>
              <h2>BRUCE & MILLIE</h2>
              <p>VERMONT</p>
             </div>
          </div>
          <div class="w-1/2 relative flex justify-center">
              <img class="absolute -top-32 w-2/3"  src="https://handcmediastorage.blob.core.windows.net/productimages/JW/JWPZA031-Z33-150290-500px-650px.jpg" alt="">
          </div>
        </div>
        <div class="flex">
            <div class="w-2/3">
                <div class="relative px-32">
                  <div class="play p-10 absolute rounded-full left-20 -top-10 "> <play-icon class="custom-class text-white w-3 h-3"></play-icon> </div>
                  <img  src="https://electricbikeaction.com/wp-content/uploads/2018/06/EveloDelta_16.jpg" alt="">
                </div>
            </div>
            <div class="w-1/3 flex items-center justify-center">
                <span class="view">VIEW MORE REVIWS --></span>
            </div>
        </div>
        <div class="flex mt-32  ">
            <div class="w-2/3 relative z-10 our ">
                <div class=" mx-16 text-5xl font-bold  title">OUR <br> FEATURES</div>
                <div class="mt-16" >
                    <img class="img " src="https://storeno.b-cdn.net/stores/5-2022/1652733067798.png" alt="">
                </div>
                <div>
                    <h1 class=" mx-16 text-3xl font-bold text-center title">ARIES MID-DRIVE</h1>
                    <p class="price text-center text-xs  font-medium	mt-3">STARTING FROM $3499</p>
                </div>
            </div>
            <div class="w-1/2">
                <ul>
                    <li>ALL</li>
                    <li>COMFORT</li>
                    <li>SPORT UTYLITY</li>
                    <li>SPEACILTY</li>
                </ul>
                <div>
                    <div class="w-2/3 border-l-2 border-r-2	">
                        <div>
                            <img src="https://i1.wp.com/rvmiles.com/wp-content/uploads/2017/06/evelo-galaxy-st-2.jpg?resize=808%2C454&ssl=1" alt="">
                        </div>
                        <h1 class=" mx-16 text-xl font-bold text-center title">GALAXY</h1>
                         <p class="price text-center text-xs  font-medium	mt-3">STARTING FROM $3499</p>
                    </div>
                      <div class="w-2/3 border-l-2 border-r-2 border-t-2	">
                        <div>
                            <img src="https://storeno.b-cdn.net/stores/5-2022/1652705755406.png" alt="">
                        </div>
                        <h1 class=" mx-16 text-xl font-bold text-center title">GALAXY</h1>
                         <p class="price text-center text-xs  font-medium	mt-3">STARTING FROM $3499</p>
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
.view{
    color: #ed6546;

}
.title{
    color: #2f2f2f;
  transform: scale(.8, 1.5);
}
.para{
    color: #979696;
}
.card{
    background: #fff;
}
.price{
    color:#ed6546;
}
.play{
    background: #ed6546;
}
.our::before{
    content: "BIKES";
    position: absolute;
    font-size: 290px;
    top: 30px;
    font-weight: bold;
    transform: scale(.9, 1.5);
    left: -80px;
    color: #e5ebee;
    z-index: -1;
}
.w-4.custom-class{
    fill:#ed6546;
    stroke: #ed6546;
}
.img{
    z-index: 9999;
}
</style>