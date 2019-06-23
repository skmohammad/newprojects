<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <h1>{{ employee }}</h1>
    <button v-on:click="doStuff()">Click</button>
    <form>
        <input type="text" v-model="name" placeholder="Employee Name">
        <input type="text" v-model="work" placeholder="work">
        <input type="text" v-model="age" placeholder="age">
        <button  @click="postPost()">Submit</button>
    </form>
            <div v-for="post in posts" v-bind:key="post.name">
                <template v-if="editId == post.name">
                  <td><input v-model="editProductData.name" type="text"></td>
                  <td><input v-model="editProductData.work" type="text"></td>
                  <td><input v-model="editProductData.age" type="text"></td>
                  <td>
                    <span class="icon">
                      <i  @click="onEdit(post, true)" class="fa fa-check">Update</i>
                    </span>
                    <span class="icon">
                      <i  @click="onCancel" class="fa fa-ban"></i>
                    </span>
                  </td>
                </template>
                <template v-else>
                  <p>
                    {{post.name}}
                  </p>
                  <p>
                    {{post.work}}
                  </p>
                  <p>
                    {{post.age}}
                  </p>
                  <p>
                    <a href="#" class="icon">
                      <i v-on:click="onDelete(post.name)" class="fa fa-trash">Delete</i>
                    </a>
                    <a href="#" class="icon">
                      <i v-on:click="onEdit(post)" class="fa fa-pencil">Edit</i>
                    </a>
                    
                  </p>
                </template>
            </div>
  <ul>
    <li>
      <p><strong>{{name}}</strong></p>
      <p>{{work}}</p>
      <p>{{age}}</p>
    </li>
  </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      employee: 'Employee data',
      posts: [],
      errors: [],
      postBody: '',
      editId: '',
      editProductData: {
        name: '',
        work: '',
        age: ''
      },
      responseData: [],
          name: '',
          work: '',
          age: '',
      
    }
  },
  created() {
    axios.get(` http://www.mocky.io/v2/5d07cdf53400007a005d94fc`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
 
  methods: {
      doStuff() {
         this.$emit('childStuff', 'some value from child')
      },
       postPost() {
        axios.post(` http://www.mocky.io/v2/5d07cdf53400007a005d94fc`, {
        data: {name: this.name, work: this.work, age: this.age}
        })
        .then(response => {this.responseData = response.data})
        .catch(e => {
        this.errors.push(e)
        })
        console.log('employee-->', this.responseData);
    },
    onEdit(post, type) {
        if(type) {
           const data = {
                 name : this.editProductData.name,
                 work: this.editProductData.work,
                age:this.editProductData.age
            }
            this.posts.push(data); 
      console.log('post-->', this.posts)  
        } else {
        this.editId = post.name
      this.editProductData.name = post.name
      this.editProductData.work = post.work
      this.editProductData.age = post.age
      
        }
    },
    onDelete(index) {
        console.log("Removing-->", index);
        this.posts.splice(index, 1);
    },
      onSubmit(evt) {
          evt.preventDefault();
          this.$emit('NewEmployee', this.form);
          console.log('employee-->', this.form);
          window.location.replace('#/employeeList');
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
