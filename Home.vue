<template>
    <q-page class="q-pa-md">
      <div class="q-pa-md">
        <h1>Selamat Datang di Proyek Vue.js dengan Vite</h1>
        <q-btn @click="$router.push('/weather')" label="Lihat Cuaca" color="primary" />
      </div>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  