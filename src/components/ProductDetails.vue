<script setup>
import { ref, computed } from 'vue'
import socksGreenImage from '@/assets/images/socks_green.jpeg'
import socksBlueImage from '@/assets/images/socks_blue.jpeg'

const props = defineProps({
  details: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ul>
    <li v-for="detail in details">{{ detail }}</li>
  </ul>
</template>