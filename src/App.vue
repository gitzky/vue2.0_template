<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  overflow: auto !important;
}
#nprogress{
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99999;
  .bar {
    background: #5e6d70!important;
  }
}
</style>
