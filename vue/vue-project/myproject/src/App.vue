<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <!--<EmployeeDetails v-on:childStuff="value => {parentStuff(value) }"></EmployeeDetails>-->
    

  </div>
</template>

<script>
import EmployeeDetails from './components/EmployeeDetails'
export default {
  name: 'App',
  components : {
    EmployeeDetails
  },
  methods: {
    parentStuff(value) {
      alert(value);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
