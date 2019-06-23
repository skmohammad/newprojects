import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EmployeeDetails from '@/components/EmployeeDetails'
import EmployeeList from '@/components/EmployeeList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/employee',
      name: 'EmployeeDetails',
      component: EmployeeDetails
    },
    {
      path: '/employeeList/:data',
      name: 'EmployeeList',
      component: EmployeeList
    }
  ]
})
