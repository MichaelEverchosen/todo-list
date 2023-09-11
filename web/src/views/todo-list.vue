<template>
  <div>
    <div>
      <div class="todo">
        <TodoCard v-for="(todo, idx) in todoList" :key="idx" :todo="todo"></TodoCard>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import TodoCard from '@/components/Todo/TodoCard.vue'

export default {
  components: {
    TodoCard
  },
  beforeCreate() {
    this.$store.dispatch('getTodos')
  },
  computed: {
    todoList() {
      return this.$store.getters.getTodosList
    }
  }
}
</script>

<style scoped>
.todo {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 25px;
  padding: 20px;
}
</style>