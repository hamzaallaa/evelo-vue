<template>
  <div>
    <slider />
    <about />
    <service />
    <box />
  </div>
</template>

<script>
import slider from '../components/slider.vue'
import about from '../components/about.vue'
import service from '../components/service.vue'
import box from '../components/box.vue'
export default {
  name: 'Home',
  components: {
    slider,
    about,
    service,
    box
  }
}
</script>
<style>
body{
    background-color: #e5ebee;
}
</style>
