<template>
  <div class="flex">
    <SideBar />
    <RouterView />
  </div>
</template>

<script>
import SideBar from './components/SideBar/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>
