<template>
  <div class="modal-window">
    <div class="title-and-description">
      <div class="title">
        <label class="field-name" for="">Title</label>
        <input
          v-model="todo.title"
          class="change-title-and-description"
          type="text"
          placeholder="Введите название задачи"
        />
      </div>
      <div class="description">
        <label class="field-name" for="">Description</label>
        <input
          v-model="todo.description"
          type="text"
          class="change-title-and-description"
          placeholder="Описание задачи"
        />
      </div>
    </div>

    <div class="data">
      <!-- <CustomSelect :options="priorityOptions" v-model="todo.priority" returnedKey="text" /> -->
    </div>
    <div class="subtasks">
      <div class="change-subtasks" v-for="(task, idx) in todo.tasks" :key="idx">
        <!-- <input type="checkbox" v-model="task.status" /> -->
        <label class="field-name" for="">Subtasks</label>
        <textarea
          class="modal-edit"
          rows="4"
          cols="33"
          v-model="task.description"
          type="text"
          placeholder="Введите подзадачу"
        />
        <FeatherIcon class="icon" type="trash-2" @click="toggleModal(task?.id)"></FeatherIcon>
      </div>
    </div>
    <div class="add-btn">
      <div class="add-subtask">
        <FeatherIcon type="plus" class="btn-icon" @click="addSubtask">Добавить</FeatherIcon>
      </div>
      <div class="exit-btn">
        <button class="btn" @click="saveTodo">Сохранить</button>
        <button class="btn" @click="closeTodoForm">Закрыть</button>
      </div>
    </div>
    <ModalWindow v-if="isOpenModal">
      <p>Подверлите действие</p>
      <button @click="deleteSubtask()">Удалить</button>
      <button @click="toggleModal()">Отмена</button>
    </ModalWindow>
  </div>
</template>

<script>
import { api } from '@/utils/axios.js'
import ModalWindow from '@/components/ModalWindow.vue'

export default {
  components: {
    ModalWindow
  },
  data() {
    return {
      taskIdsForDeleting: [],
      activeTaskId: null,
      isOpenModal: false,
      todoId: null,
      todo: {
        title: '',
        description: '',
        priority: '',
        tasks: [
          {
            description: '',
            status: true
          }
        ]
      }
    }
  },
  async beforeMount() {
    this.todoId = this.$route.params?.id
    if (this.todoId) {
      await this.$store.dispatch('getTodos')
      const todo = this.$store.getters.getTodo(this.todoId)
      this.todo.title = todo.title
      this.todo.description = todo.description
      this.todo.priority = todo.priority
      this.todo.tasks = todo.tasks
    }
  },
  methods: {
    addSubtask() {
      this.todo.tasks.push({
        description: '',
        status: false
      })
    },
    async saveTodo() {
      try {
        let response
        if (this.todoId) {
          response = await api.put(`/todos/${this.todoId}`, {
            ...this.todo,
            taskIdsForDeleting: this.taskIdsForDeleting
          })
        } else {
          response = await api.post('/todos', this.todo)
        }
        await this.$store.dispatch('getTodos')
        this.$router.push('/')
      } catch (err) {
        console.log(err)
      }
    },
    closeTodoForm() {
      this.$router.push('/')
    },
    toggleModal(id) {
      this.isOpenModal = !this.isOpenModal
      this.activeTaskId = id
    },
    deleteSubtask() {
      if (this.activeTaskId) {
        // Удаляем task с фронта и добавляем его id для удаления его на бэке
      } else {
        // Просто удаляем с фронта
      }
      this.isOpenModal = false
    }
  }
}
</script>

<style scoped>
.modal-window {
  padding-top: 60px;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.title-and-description {
  position: relative;
  display: grid;
  justify-items: center;
  height: auto;
  width: auto;
  gap: 20px;
}

.field-name {
  position: absolute;
  padding-left: 10px;
}

.change-title-and-description {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 15px 10px 10px;
  font-size: 16px;
  resize: none;
  width: 550px;
  height: 60px;
  border: 1px solid rgb(178, 177, 177);
  border-radius: 5px;
}
.modal-edit {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 20px 10px 10px;
  font-size: 16px;
  resize: none;
  width: 550px;
  border: 1px solid rgb(178, 177, 177);
  border-radius: 5px;
}

.select {
  padding: 10px;
  width: 100px;
}

.data {
  display: flex;
  gap: 30px;
}

.subtasks {
  display: grid;
  grid-auto-columns: 1fr;
  justify-items: center;
  gap: 15px;
}
.change-subtasks {
  position: relative;
}
.icon {
  height: 20px;
  position: absolute;
  bottom: 12px;
  right: 3px;
}

.btn {
  width: 130px;
  padding: 15px;
  background-color: rgb(231, 230, 230);
  border: 1px solid rgb(216, 216, 216);
  border-radius: 5px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.btn-icon {
  padding: 0px 15px 25px;
  border: 0px;
  border-radius: 5px;
  color: rgb(163, 162, 162);
}
.add-subtask {
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
}
.exit-btn {
  display: flex;
  gap: 20px;
  justify-content: center;
}
</style>