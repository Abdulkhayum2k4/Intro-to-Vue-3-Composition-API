<script>
import { ref } from "vue";
import socksGreenImage from "./assets/images/socks_green.jpeg";

// export default {
//   data() {
//     return {
//       count: 0,
//     };
//   },
//   methods:{
//     increase(){
//       this.count++;
//     }
//   }
// };

// export default {
//   data() {
//     return {
//       author: {
//         name: "John Doe",
//         books: ["vue1", "vue2", "vue3"],
//       },
//     };
//   },
//   computed: {
//     message() {
//       return this.author.books.length > 0 ? "yes" : "no";
//     },
//   },
// };

// export default {
//   data() {
//     return {
//       firstName: "John",
//       lastName: "Doe",
//     };
//   },
//   computed: {
//     fullName: {
//       // getter
//       get() {
//         return this.firstName ;
//       },
//       // setter
//       set(newValue) {
//         // Note: we are using destructuring assignment syntax here.
//         // [this.firstName, this.lastName] = newValue.split(" ");
//         this.firstName = newValue
//       },
//     },
//   },
// };

// export default {
//   data() {
//     return {
//       count: 1,
//     };
//   },
//   computed: {
//     // This computed will return the value of count when it's less or equal to 3.
//     // When count is >=4, the last value that fulfilled our condition will be returned
//     // instead until count is less or equal to 3
//     alwaysSmall(_, previous) {
//       if (this.count <= 3) {
//         return this.count;
//       }

//       return previous;
//     },
//   },
// };

// export default {
//   data() {
//     return {
//       numbers: [1, 2, 3, 4, 5],
//     };
//   },
//   computed: {
//     evenNumbers() {
//       return this.numbers.filter((n) => n % 2 == 0);
//     },
//   },
// };
const cart = ref(0)
</script>

<template>
  <!-- <button @click="increase">Count: {{ count }}</button>
  <button @click="increase">Count: <span v-html="count"></span></button> -->

  <!-- <p>published? <span>{{ message }}</span></p> -->

  <!-- <input v-model="fullName" />
  <p>{{ firstName }}</p> -->
  <!-- <p>{{ lastName }}</p> -->

  <!-- <div>
    <h2>Count: {{ count }}</h2>
    <h2>Always Small: {{ alwaysSmall }}</h2>

    <button @click="count++">Increase</button>
  </div> -->

  <!-- <div>
    <p v-if="inStock">In stock</p>
    <p v-else>Out of stock</p>
  </div> -->
<!-- 
  <div>
    <li v-for="x in evenNumbers">{{ x }}</li>
  </div> -->

  <div>
    <button v-on:click="cart += 1">click</button>
    <p>{{ cart }}</p>
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
