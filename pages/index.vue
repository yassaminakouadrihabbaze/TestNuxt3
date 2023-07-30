<template>
    <div class="page-container">
      <Sidebar />
      <MainContent />
      <NuxtPage></NuxtPage>
    </div>
  </template>

<script setup>
  
</script>



<style lang="scss">
  /* Set the height and background color of the root element */
  .page-container {
    height: 100vh; /* 100% of the viewport height */
    background-color: white; /* Set the background to black */
    display: flex;
  }
  body {
    margin: 0;
    padding: 0;
  }
</style>