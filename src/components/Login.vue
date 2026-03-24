<!-- <script>
export default {
  props: {
    name: String,
    age: Number,
  },
};
</script>
<template>
  <p>{{ name }}</p>
  <p>{{ age }}</p>
</template> -->

<script>
export default {
  props: {
    name: String,
    age: Number,
    isAdmin: Boolean,
    cls:"10th"
  },
  // props: ["name","age"],
};
</script>
<template>
  <p>{{ name }}</p>
  <p>{{ age }}</p>
</template>
