<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Modal from "./components/Modal.vue";
import {ref} from "vue"

const isOpen = ref(false)
</script>

<template>
  <Header @toggleModal="isOpen = !isOpen" />

  <main>
    <router-view></router-view>
  </main>

  <Modal :isOpen="isOpen" @toggleModal="isOpen = !isOpen" />

  <Footer />
</template>

<style scoped>
</style>
