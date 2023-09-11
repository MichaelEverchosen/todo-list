<template>
  <div class="modal-wrap" @click="$emit('close')">
    <div class="modal">
      <div class="modal-text" @click.stop>
        <slot></slot>
      </div>
      <button class="absolute" @click="$emit('close')">Х</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.modal-wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: relative;
  padding: 20px;
  border: 1px solid rgb(55, 55, 55);
  border-radius: 5px;
  text-align: center;
  background-color: #ffffff;
}

.absolute {
  position: absolute;
  top: 10px;
  right: 10px;
}

.modal-text {
  padding: 40px;
}
</style>
