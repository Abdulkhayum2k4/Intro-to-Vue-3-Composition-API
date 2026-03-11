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
  <div>
    <p>{{ count }}</p>
    <p>{{ status }}</p>
    <button @click="increase">increase</button>
    <button @click="decrease">decrease</button>
  </div>
</template>
<style>
button{
  background-color: rgb(201, 71, 71);
  border: none;
  margin: 2px;
}
</style> -->

<script>
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
</template>
<style></style>
