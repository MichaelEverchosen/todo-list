<template>
  <div class="header">
    <div class="logo">
      <img src="" alt="" />
      <p>To Do List</p>
    </div>
    <div class="login">
      <router-link :to="`/`">
        <FeatherIcon type="list" class="btn-icon" />
      </router-link>
      <router-link :to="`/todo-form`">
        <FeatherIcon type="plus-square" class="btn-icon" />
      </router-link>
      <div class="log-out">
        <FeatherIcon type="log-out" class="btn-icon" @click="exitUser"></FeatherIcon>
      </div>
    </div>
    <!-- <ModalWindow v-if="isOpenModal">
      <p>Подверлите действие</p>
      <button @click="deleteTodo()">Выйти</button>
      <button @click="toggleModal()">Отмена</button>
    </ModalWindow> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActiveModal: false,
      activeModalName: '',
      isOpenModal: false
    }
  },
  methods: {
    sendToPageAuthorization() {
      this.$router.push({ name: 'sign-in' })
    },
    sendToPageRegistration() {
      this.$router.push({ name: 'sign-up' })
    },
    exitUser() {
      this.$store.commit('logout')
      localStorage.clear()
      this.$router.push('/auth/sign-in')
      // this.isOpenModal = !this.isOpenModal
    },
    toggleModal() {
      this.isOpenModal = !this.isOpenModal
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  gap: 20px;
}

.logo {
  display: flex;
  gap: 40px;
  align-items: center;
}

.login {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: start;
  padding-top: 5px;
}

.btn {
  padding: 15px;
  border: 1px solid rgb(55, 55, 55);
  border-radius: 5px;
}
</style>
