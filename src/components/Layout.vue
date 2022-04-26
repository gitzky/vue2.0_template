<template>
  <div>
    <Header class="header"/>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.header{
  .router-link-active{
    color:red !important

  }
}

</style>
