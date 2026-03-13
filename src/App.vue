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

<!-- <script setup>
import { ref } from "vue";
import socksBlueImage from "./assets/images/socks_blue.jpeg";
let imgs = ref(socksBlueImage);
</script>
<template>
  <img :src="imgs" />
</template> -->

<!-- <script>
export default {
  data() {
    return {
      className: "active",
    };
  },
};
</script>
<template>
  <div :class="className">Hello</div>
</template>
<style>
.active {
  color: green;
}
</style> -->

<!-- <script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
    };
  },
};
</script>
<template>
  <div :class="{ active: isActive, error: hasError }">hello</div>
</template>
<style>
.active {
  color: green;
}
.error {
  color: red;
}
</style> -->

<!-- <script>
export default {
  data() {
    return {
      textColor: "red",
      backColor: "blue",
      styleObject: {
        color: "green",
        fontSize: "30px",
        backgroundColor: "yellow",
      },
    };
  },
};
</script>
<template>
  <p :style="{ color: 'red', background: 'black' }">hello</p>
  <p :style="{ color: textColor, background: backColor }">world</p>
  <p :style="styleObject">hello world</p>
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
  <input type="text" v-model="name" />
  <p>{{ name }}</p>
  <input type="text" v-model.lazy="name" />
  <p>{{ name }}</p>
  <textarea v-model="name"></textarea>
</template> -->

<!-- <script>
export default {
  data() {
    return {
      num: -1,
      name: true,
      fruits: ["apple", "banana", "orange"],
      count: 0,
    };
  },
  methods: {
    increase() {
      return this.count++;
    },
    decrease() {
      return this.count--;
    },
    sayHello(x) {
      alert("hello "+x);
    },
  },
};
</script>
<template>
  <p v-if="num == 0">zero</p>
  <p v-else-if="num > 0">positive</p>
  <p v-else>negative</p>

  <p v-show="name">abdul</p>

  <p v-for="fruit in fruits">{{ fruit }}</p>

  <p>{{ count }}</p>
  <button v-on:click="increase">increase</button>
  <button v-on:click="decrease">decrease</button>

  <button @click="sayHello('abdul')">click</button>
</template> -->

<!-- <script>
export default {
  methods: {
    clicked() {
      alert("hello");
    },
  },
};
</script>
<template>
  <div @click.self="clicked" :style="{background:'lightgray'}">
    <button>click</button>
  </div>
</template> -->

<!-- <script>
export default {
  methods: {
    clicked() {
      alert("hello");
    },
  },
};
</script>
<template>
  <div :style="{background:'lightgray'}">
    <button @click.stop="clicked">click</button>
  </div>
</template> -->

<!-- <script>
export default {
  methods: {
    parentClick() {
      console.log("Parent clicked (capture phase)");
    },
    childClick() {
      console.log("Child clicked");
    },
  },
};
</script>
<template>
  <div @click.capture="parentClick" style="border: 2px solid black">
    Parent
    <button @click="childClick">Click Me</button>
  </div>
</template> -->

<!-- 
<script>
export default {
  data() {
    return {
      message: "loading",
    };
  },
  mounted() {
    console.log(this.message);
    this.message = "component mounted";
    console.log(this.message);
  },
};
</script>
<template>
  <p>{{ message }}</p>
</template>  -->

<!-- <script>
export default {
  data() {
    return {
      fName: "abdul",
      lName: "khayum",
    };
  },
  computed:{
    name(){
      return this.fName + " " + this.lName;
    }
  }
};
</script>
<template>
  <p>{{ name }}</p>
</template> -->

<!-- <script setup>
import { ref, computed } from "vue";
let fName = ref("abdul");
let lName = ref("khayum");
let name = computed(()=>{
  return fName.value + " " + lName.value;
})
</script>
<template>
  <p>{{ name }}</p>
</template> -->

<!-- <script>
import { ref, computed } from "vue";
export default{
  setup(){
    let fName = ref("abdul")
    let lName = ref("khayum")
    let name = computed(()=>{
      return fName.value + " " + lName.value;
    })
    return {fName,lName,name}
  }
}
</script>
<template>
  <p>{{ name }}</p>
</template> -->

<!-- <script>
export default {
  data() {
    return {
      fName: "abdul",
      lName: "khayum",
    };
  },
  computed: {
    name: {
      get() {
        return this.fName + " " + this.lName;
      },
      set(value) {
        [this.fName, this.lName] = value.split(" ");
      },
    },
  },
};
</script>
<template>
  <input type="text" v-model="name">
  <p>{{ name }}</p>
  <p>{{ fName }}</p>
  <p>{{ lName }}</p>
</template> -->

<!-- <script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  watch:{
    count(newVal,oldVal){
      console.log("old:"+oldVal)
      console.log("new:"+newVal)
    }
  }
};
</script>
<template>
  <p>{{ count }}</p>
  <button @click="count++">Increase</button>
</template> -->

<!-- <script>
export default {
  data() {
    return {
      name: "",
    };
  },
  watch: {
    name(val) {
      console.log("Name changed to:", val);
    },
  },
};
</script>
<template>
  <input type="text" v-model.lazy="name" placeholder="enter name:" />
</template> -->

<!-- <script>
export default {
  data() {
    return {
      user: {
        name: "abdul",
      },
    };
  },
  watch: {
    user: {
      handler(val) {
        console.log("user changed:", val);
      },
      deep: true,
    },
  },
};
</script>
<template>
  <p>{{ user.name }}</p>
  <input type="text" v-model.lazy="user.name">
</template> -->

<!-- <script>
export default {
  data() {
    return {
      user: {
        name: "",
      },
    };
  },
  watch: {
    user: {
      handler(val) {
        console.log("changed: ", val);
      },
      deep: true,
    },
  },
};
</script>
<template>
  <p>{{ user.name }}</p>
  <input type="text" v-model.lazy="user.name">
</template> -->

<!-- <script>
export default{
  methods:{
    focusInput(){
      this.$refs.myInput.focus()
    }
  }
}
</script>
<template>
  <input type="text" ref="myInput">
  <button @click="focusInput">click to focus</button>
</template> -->

<!-- <script>
export default{
  methods:{
    showText(){
      console.log(this.$refs.para.textContent)
    }
  }
}
</script>
<template>
  <p ref="para">hello vue</p>
  <button @click="showText">click</button>
</template> -->

<!-- <script>
export default {
  data() {
    return {
      items: [1, 2, 3]
    }
  },
  mounted() {
    console.log(this.$refs.list)
  }
}
</script>

<template>
  <ul>
    <li v-for="item in items" ref="list">
      {{ item }}
    </li>
  </ul>
</template> -->

<!-- <script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<template>
  <div>
    <Navbar />
    <h1>Welcome to Vue App</h1>
    <Footer />
  </div>
</template> -->

<!-- <script>
import UserCard from "./components/UserCard.vue";
export default{
  components:{
    UserCard
  }
}
</script>
<template>
  <UserCard name="abdul" :age="22" />
</template> -->

<!-- <script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>
<template>
  <p>{{ count }}</p>
  <button @click="count++">click</button>
</template> -->


<script>
import Login from "./components/Login.vue";
export default{
  components:{
    Login
  }
}
</script>
<template>
  <Login name="abdul" :age="21"/>
</template>