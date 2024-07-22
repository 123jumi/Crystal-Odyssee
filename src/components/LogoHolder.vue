<script setup lang='ts'> 

</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-6">
        <div class="logo-wrapper">
          <img :src='"src/assets/images/logo.png"' class="logo" alt="Logo">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo-wrapper {
  height: 25vh;
  width: 25vh; // Ensures it's a circle
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 50%; // Make the wrapper circular
}

.logo {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%; // Make the logo image circular
}

@media (max-width: 992px) {
  .logo-wrapper {
    height: 20vh;
    width: 20vh; // Ensures it's a circle
  }
}

@media (max-width: 768px) {
  .logo-wrapper {
    height: 15vh;
    width: 15vh; // Ensures it's a circle
  }
}

@media (max-width: 576px) {
  .logo-wrapper {
    height: 10vh;
    width: 10vh; // Ensures it's a circle
  }
}

// Specific styles for screen width between 1009px and 1042px
@media (min-width: 1009px) and (max-width: 1042px) {
  .logo-wrapper {
    height: 26vh;
    width: 26vh; // Ensures it's a circle
  }
}

@media (min-width: 1009px) and (max-width: 1042px) and (orientation: landscape) {
  .logo-wrapper {
    height: 24vh;
    width: 24vh; // Ensures it's a circle
  }
}

// Fullscreen mode for larger screens
@media (min-width: 1366px) {
  .logo-wrapper {
    height: 35vh;
    width: 35vh; // Ensures it's a circle
  }
}

@media (min-width: 1366px) and (orientation: landscape) {
  .logo-wrapper {
    height: 30vh;
    width: 30vh; // Ensures it's a circle
  }
}
</style>
