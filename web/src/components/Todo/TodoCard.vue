<template>
  <div>
    <div class="todo-card">
      <div class="title-and-priority">
        <div>
          {{ todo.priority }}
          {{ todo.title }}
        </div>
        <div class="delete-and-edit-todo">
          <router-link :to="`/todo-form/${todo.id}`">
            <FeatherIcon type="pen-tool" />
          </router-link>
          <FeatherIcon type="trash-2" @click="toggleModal"></FeatherIcon>
        </div>
      </div>
      <div class="dividing-line"></div>
      <div class="description">
        - {{ todo.description }}
        <div v-for="(task, idx) in todo.tasks" :key="idx">- {{ task.description }}</div>
      </div>
    </div>
    <ModalWindow v-if="isOpenModal">
      <p>Подверлите действие</p>
      <button @click="deleteTodo()">Удалить</button>
      <button @click="toggleModal()">Отмена</button>
    </ModalWindow>
  </div>
</template>

<script>
import ModalWindow from '@/components/ModalWindow.vue'
import { api } from '@/utils/axios.js'

export default {
  components: {
    ModalWindow
  },
  data() {
    return {
      isOpenModal: false
    }
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    async deleteTodo() {
      this.$store.commit('toggleLoader', true)
      try {
        const response = await api.delete(`todos/${this.todo.id}`)
        this.isOpenModal = false
        await this.$store.dispatch('getTodos')
      } catch (err) {
        console.log(err)
      } finally {
        this.$store.commit('toggleLoader')
      }
    },
    toggleModal() {
      this.isOpenModal = !this.isOpenModal
    }
  }
}
</script>

<style scoped>
.todo-card {
  height: 200px;
  width: 600px;
  background-color: rgb(255, 253, 253);
  box-shadow: 10px 5px 5px rgb(233, 232, 232);
  border: 1px solid rgb(228, 227, 227);
  border-radius: 5px;
  overflow: hidden;
}

.title-and-priority {
  display: flex;
  font-size: 18px;
  padding: 15px 15px 10px;
  justify-content: space-between;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.description {
  display: grid;
  gap: 15px;
  padding: 5px 15px 15px;
  font-size: 18px;
}

.dividing-line {
  background-color: #dcdcdc;
  height: 2px;
}

.delete-and-edit-todo {
  display: flex;
  justify-content: end;
  gap: 15px;
}
</style>