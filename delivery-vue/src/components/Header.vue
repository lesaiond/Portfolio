<template>
  <header class="header">
    <div class="container">
      <div class="header-box">
        <router-link to="/" class="header-logo logo">
          <img src="../assets/img/logo.png" alt="logo" />
        </router-link>
        <div class="header-controls">
          <button class="btn btn-primary"  @click="toggleLogin">
            <img src="../assets/img/user.png" alt="user" />
            Войти
          </button>
          <button class="btn btn-outline" @click="openModal">
            <img src="../assets/img/korzina.png" alt="user"/>
            Корзина
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  // const emitLogin = defineEmits(["toggleLogin"])
  // const openLogIn = () => {
  //   emit("toggleLogin");
  // }
  const emit = defineEmits(["toggleModal"])
  const openModal = () => {
    emit("toggleModal");
  }
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  min-height: 124px;
}

.header-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>