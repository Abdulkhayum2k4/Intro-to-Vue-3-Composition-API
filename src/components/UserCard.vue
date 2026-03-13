<script>
export default {
  props: ["name", "age"],
};
</script>

<template>
  <p>Name: {{ name }}</p>
  <p>age: {{ age }}</p>
</template>