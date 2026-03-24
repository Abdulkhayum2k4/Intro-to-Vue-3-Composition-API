<!-- <script>
export default {
  methods: {
    sendMessage() {
      this.$emit('greet')
    }
  }
}
</script>

<template>
  <button @click="sendMessage">Click Me</button>
</template> -->

<!-- <script>
export default{
  methods:{
    sendName(){
      this.$emit('sendName','abdul')
    }
  }
}
</script>

<template>
  <button @click="sendName">Click</button>
</template> -->

<!-- <script>
export default {
  emits: {
    greet: (name, age) => {
      return typeof name === "string" && typeof age === "number";
    },
  },

  methods: {
    sendData() {
      this.$emit("greet", "Abdul", 21);
    },
  },
};
</script>

<template>
  <button @click="sendData">Send Data</button>
</template> -->

<!-- <script>
export default {
  emits: {
    greet(name, age) {
      return typeof name == "string" && typeof age == "number" && age>18;
    },
  },
  methods: {
    sendMsg() {
      this.$emit("greet", "abdul",21);
    },
  },
};
</script>
<template>
  <button @click="sendMsg">Click 1</button>
</template> -->

<!-- <script>
export default {
  emits: ["greet"],
  methods:{
    sendMsg(){
      this.$emit('greet')
    }
  }
};
</script>
<template>
  <button @click="sendMsg">Click</button>
</template> -->

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<template>
  <input :value="modelValue" @input="updateValue" />
</template>

