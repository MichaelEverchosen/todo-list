<template>
  <div v-if="isActiveLoader" class="preloader">
    <FeatherIcon type="loader" class="loader"></FeatherIcon>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    isActiveLoader() {
      return this.$store.getters.getActivityLoader
    }
  }
}
</script>

<style scoped>
.preloader {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #6a6a6a2f;
  z-index: 1001;
}

.loader {
  position: relative;
  width: 50px;
  height: 50px;
  left: 50%;
  top: 45%;
  right: 50%;
  bottom: 50%;
  border-radius: 50%;
  animation: rotating 1s linear infinite;
}
.loader:deep(svg) {
  stroke: #fff;
}

@keyframes rotating {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>