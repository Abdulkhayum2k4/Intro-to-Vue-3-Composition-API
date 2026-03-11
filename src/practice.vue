<script>
import { ref } from "vue";
import socksGreenImage from "./assets/images/socks_green.jpeg";
import socksBlueImage from "./assets/images/socks_blue.jpeg";

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

// const cart = ref(0)

// const image = ref(socksGreenImage);
// const variants = ref([
//   { color: "green", image: socksGreenImage },
//   { color: "blue", image: socksBlueImage },
// ]);
// const updateImage = (img) => {
//   image.value = img;
// };

// export default {
//   data() {
//     return {
//       count : 0,
//     };
//   },
//   methods:{
//     increase(){
//       return this.count++;
//     }
//   }
// };

// export default {
//   data() {
//     return {
//       name: "abdul",
//     };
//   },
//   methods: {
//     greet() {
//       alert(`Name: ${this.name}`);
//     },
//     say(message) {
//       alert(`Name: ${message}`);
//     },
//   },
// };

// export default {
//   methods: {
//     parentClick() {
//       console.log("parent clicked");
//     },
//     childClick() {
//       console.log("child clicked");
//     },
//   },
// };

// export default {
//   methods: {
//     submitForm() {
//       console.log("Form submitted without page reload");
//     },
//   },
// };

// export default {
//   methods: {
//     boxClicked() {
//       console.log("Div clicked");
//     },
//   },
// };

// export default {
//   data() {
//     return {
//       message: "",
//     };
//   },
// };

// export default {
//   data() {
//     return {
//       skills: [],
//     };
//   },
// };

// export default {
//   data() {
//     return {
//       selected: "",
//     };
//   },
// };

</script>

<template>
  <div>hi</div>

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

  <!-- <div>
    <button v-on:click="cart += 1">click</button>
    <p>{{ cart }}</p>
  </div> -->
  <!-- 
  <img :src="image" />
  <div v-for="variant in variants" @mouseover="updateImage(variant.image)">
    {{ variant.color }}
  </div> -->

  <!-- <div>
    <p>{{ count }}</p>
    <button @click="count++">Click</button>
    <button @click="increase">Click</button>
  </div> -->

  <!-- <div>
    <button @click="greet">Greet 1</button>
    <button @click="say('anuna')">Greet 2</button>
  </div> -->

  <!-- <div @click="parentClick">
    <button @click.stop="childClick">Click</button>
  </div> -->

  <!-- <form @submit.prevent="submitForm">
    <button type="submit">Submit</button>
  </form> -->

  <!-- <div @click.self="boxClicked">
    <button>Inner Button</button>
  </div> -->

  <!-- <div>
    <input v-model="message"  />
    <p>{{ message }}</p>
  </div> -->

  <!-- <div>
    <input type="checkbox" value="html" v-model="skills" />html
    <input type="checkbox" value="css" v-model="skills" />css
    <input type="checkbox" value="js" v-model="skills" />js
    <p>{{ skills }}</p>
  </div> -->

  <!-- <div>
    <select v-model="selected" >
      <option value="vue">vue</option>
      <option value="react">react</option>
      <option value="angular">angular</option>
    </select>
    <p>{{ selected }}</p>
  </div> -->
</template>

<style scoped>
button {
  background-color: blue;
}
</style>
