<template>
  <div>
    <div><button @click="goToTodoForm">Создание</button></div>
  </div>
</template>

<script>
export default {
  methods: {
    goToTodoForm() {
      this.$router.push('todo-form')
    }
  }
}
</script>

<style>
</style>