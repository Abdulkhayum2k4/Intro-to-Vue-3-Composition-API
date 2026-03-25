<template>
  <p v-for="name in names" :key="name.firstName">
    <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
</p>
</template>
<script>
export default {
  data() {
    return {
      names: [
        {
          firstName: "abdul",
          lastName: "khayum",
        },
        {
          firstName: "sri",
          lastName: "chakritha",
        },
        {
          firstName: "anuna",
          lastName: "reddy",
        },
      ],
    };
  },
};
</script>
