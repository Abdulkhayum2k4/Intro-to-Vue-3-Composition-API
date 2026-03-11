<!-- <script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
  },
  computed: {
    status() {
      if (this.count == 0) {
        return "zero";
      } else if (this.count > 0) {
        return "positive";
      } else {
        return "negative";
      }
    },
  },
};
</script>
<template>
  <p>{{ count }}</p>
  <p>{{ status }}</p>
  <button v-on:click="increase">increase</button>
  <button @click="decrease">decrease</button>
</template> -->

<!-- <script setup>
import { ref, computed } from "vue";
let count = ref(0);
function increase() {
  count.value++;
}
function decrease() {
  count.value--;
}
let status = computed(() => {
  if (count.value == 0) {
    return "zero";
  } else if (count.value > 0) {
    return "positive";
  } else {
    return "negative";
  }
});
</script>
<template>
  <p>{{ count }}</p>
  <p>{{ status }}</p>
  <button @click="increase">increase</button>
  <button @click="decrease">decrease</button>
</template> -->

<!-- <script>
export default {
  data() {
    return {
      name: "abdul",
    };
  },
};
</script>
<template>
  <p>{{ name }}</p>
</template> -->

<script>
import { ref } from "vue";
import socks from "./assets/images/socks_blue.jpeg";
let img = ref(socks);
</script>
<template>
  <img v-bind:src="img" />
</template>
