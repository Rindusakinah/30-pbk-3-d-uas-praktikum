<template>
    <q-page class="q-pa-md">
      <h1>Cuaca Saat Ini</h1>
      <q-input v-model="city" label="Masukkan Nama Kota" @keyup.enter="fetchWeather" />
      <q-btn @click="fetchWeather" label="Cari" color="primary" />
      <div v-if="weather">
        <h2>{{ weather.name }}</h2>
        <p>{{ weather.weather[0].description }}</p>
        <p>{{ weather.main.temp }}°C</p>
      </div>
    </q-page>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        city: '',
        weather: null
      }
    },
    methods: {
      async fetchWeather() {
        const apiKey = 'YOUR_API_KEY' // Ganti dengan API key Anda
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`)
        this.weather = response.data
      }
    }
  }
  </script>
  