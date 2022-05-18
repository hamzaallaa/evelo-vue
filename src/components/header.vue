<template>
  <div class="">
      <div class="flex items-center justify-between py-10">
          <div class="w-1/12">
              <p class="text-3xl">EVELO</p>
              <p class="text-xs text-right">Lorem, ipsum.</p>
          </div>
          <div class="w-2/5">
              <ul class="flex itams-center justify-between text-xs">
                  <li><a href="#">BIKES</a></li>
                  <li><a href="#">ACCESSDRIS</a></li>
                  <li><a href="#">SERVICE</a></li>
                  <li><a href="#">CONTACT</a></li>
              </ul>
          </div >
          <div class="w-1/12"> 
          <span class="absolute shop right-0 top-0 p-12">
            <shopping-bag-icon size="1.5x" class="custom-class"></shopping-bag-icon>
          </span>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.shop{
    background-color: #918f8f6d;
}
</style>