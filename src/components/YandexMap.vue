<template>
  <div id="map" class="l-map">

  </div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  methods: {
    createMapInstance() {
      const map = L.map('map').setView([43.585472, 39.723098], 13);
      const mapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
          map.addLayer(mapLayer);
      return map
    },

    renderMap() {
      console.log('renderMap', this.createMapInstance())
    }
  },
  mounted() {
    this.renderMap()
  }
}
</script>

<style scoped>
.l-map {
  width: 100%;
  height: 100%;
}
</style>