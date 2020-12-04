<template>
<div>
<div class="box2">
     <vs-navbar shadow square center-collapsed v-model="active">
        <template #left>
          <vs-button @click="activeSidebar = !activeSidebar" flat icon>
            <i class='bx bx-menu'></i>
          </vs-button>
        </template>
        <template #right>
        <template>
         <vs-navbar-item >
            <a href class="navbar-brand" @click.prevent></a>
        
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" />Home
          </router-link>
         </vs-navbar-item>
        </template>
        <template>
         <vs-navbar-item>
          <span v-if="showStudentBoard" >
          <router-link to="/student" class="nav-link">Student Board</router-link>
        </span>
         </vs-navbar-item>
         </template>
        <template>
          
          <vs-navbar-item>
            <template>
        <span v-if="showGuideBoard">
          <router-link to="/guide" class="nav-link">Guide Board</router-link>
        </span>
            </template>
            <template>
         <vs-navbar-item>
         
        <span v-if="showHodBoard" class="nav-item">
          <router-link to="/hod" class="nav-link">Hod Board</router-link>
        </span>
         </vs-navbar-item>
            </template>
            <template>
          <vs-navbar-item>
        <span v-if="showDirectorBoard" class="nav-item">
          <router-link to="/director" class="nav-link">Director Board</router-link>
        </span>
          </vs-navbar-item>
            </template>
      <div v-if="!currentUser" >
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" />Sign Up
          </router-link>
        </li>
        <span class="nav-item">
          <router-link to="/login" >
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </span>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>
        </vs-navbar-item> 
        </template>
        
        </template>
      </vs-navbar>
      <vs-sidebar
        
        absolute
        v-model="active"
        :open.sync="activeSidebar"
        >
      
        <template #logo>
         
        </template>
        
        <vs-sidebar-item id="home">
          <template #icon>
            <i class='bx bx-home'></i>
          </template>
          <router-link to="/student/home">Home</router-link>
        </vs-sidebar-item>
        
        
        <vs-sidebar-item id="all tasks">
          <template #icon>
            <i class='bx bxs-donate-heart' ></i>
          </template>
          <router-link to="/student/alltask">All Tasks</router-link>
        </vs-sidebar-item>
        <vs-sidebar-item id="project details">
          <template #icon>
            <i class='bx bx-drink'></i>
          </template>
         <router-link to="/student/PD">Project Details</router-link>
        </vs-sidebar-item>
     
        
      </vs-sidebar>
  
</div>
<div class="box3">
      <v-card >
        <div class="container-fluid">
          <router-view></router-view>
        </div>  
      </v-card>    
</div>
</div>

</template>

 <script>
  export default {
    data:() => ({
      active: 'home',
      activeSidebar: false
    }),
     computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showStudentBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_STUDENT');
      }
      return false;
    },
    showGuideBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_GUIDE');
      }
      return false;
    },
      showHodBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_HOD');
      }
      return false;
    },
      showDirectorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_DIRECTOR');
      }
      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
  
  </script>

  <style>
  .vs-sidebar{
      border-right:2px solid lightsteelblue;
      border-top-right-radius:25px;
      border-bottom-right-radius:25px;
  }
  #app{
     background-color:lightsteelblue;
      height:105%;
      padding-left: 2%;
      padding-right: 2%;
      padding-top:3% ;
   }
  </style>