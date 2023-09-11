<template>
  <Loader></Loader>
  <HeaderComponent v-if="!headerExcludeRoutes.includes(currentRoute)"></HeaderComponent>
  <RouterView />
</template>


<script >
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/Header.vue'
import Loader from '@/components/LoaderComponents.vue'

export default {
  components: {
    HeaderComponent,
    Loader
  },
  data() {
    return {
      headerExcludeRoutes: ['/auth/sign-in', '/auth/sign-up']
    }
  },

  computed: {
    currentRoute() {
      return this.$route.path
    }
  }
}
</script>


<style scoped>
</style>
