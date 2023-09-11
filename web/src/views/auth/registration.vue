<template>
  <div>
    <div class="registration">
      <p class="text-center">Форма регистрации</p>
      <div class="form">
        <div class="form-data">
          <input
            class="username"
            type="text"
            v-model="form.username"
            maxlength="15"
            minlength="4"
            pattern="^[a-zA-Z0-9_.-]*$"
            placeholder="Логин"
            required
          />
        </div>
        <div class="form-data">
          <input
            class="password"
            type="password"
            v-model="form.password"
            name="Пароль"
            minlength="6"
            placeholder="Пароль"
            required
          />
        </div>
        <div class="form-data">
          <input class="email" type="email" v-model="form.email" placeholder="Email" required />
        </div>
      </div>
      <div>
        <button class="btn" @click="signUp">Зарегестрироваться</button>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '@/utils/axios.js'

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        email: ''
      }
    }
  },

  methods: {
    async signUp() {
      try {
        const response = await api.post('auth/signup', this.form)

        this.$router.push({ name: 'sign-in' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.registration {
  padding: 220px;
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: 40px;
}
.text-center {
  font-size: 25px;
}
.form {
  display: grid;
  gap: 30px;
}

.form-data input {
  border: 2px solid #22272d;
  border-radius: 4px;
  padding: 15px;
  outline: none;
  color: #e6b333;
  width: 100%;
  height: 40px;
}
.btn {
  text-align: center;
  width: 200px;
  padding: 20px;
  border: 3px;
  border-radius: 5px;
  font-size: 15px;
}
</style>

