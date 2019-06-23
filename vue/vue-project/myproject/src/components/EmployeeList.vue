<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <h1>{{ employee }}</h1>
    <button v-on:click="doStuff()">Click</button>
    <form>
        <input type="text" v-model="name" value="data.name" placeholder="Employee Name">
        <input type="text" v-model="description" value="data.description" placeholder="Description">
        <input type="text" v-model="price" value="data.price" placeholder="Price">
        <button type="submit" @click="update()">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EmployeeList',
  data () {
    return {
        data: data,
      msg: 'Welcome to Your Vue.js App',
      employee: 'Employee data',
          name: '',
          description: '',
          price: ''
      
    }
  },
  methods: {
      doStuff() {
         this.$emit('childStuff', 'some value from child')
      },
      cancel: function() {
          this.form = null;
      },
      update() {
          alert(data);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
