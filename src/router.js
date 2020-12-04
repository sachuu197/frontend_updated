import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('./views/page1.vue')
      
    },
    {
      path: '/student/home',
      name: 'Student Home',
      component: () => import('./views/student_homepage.vue')
    },
    {
      path: '/student/alltask',
      name: 'Student Task',
      component: () => import('./views/student_allTasks.vue')
    },
    {
      path: '/student/PD',
      name: 'Project Details',
      component: () => import('./views/student_projectDetails.vue')
    },
    {
      path: '/guide',
      name: 'guide',
      // lazy-loaded
      component: () => import('./views/BoardGuide.vue')
    },
    {
      path: '/hod',
      name: 'hod',
      // lazy-loaded
      component: () => import('./views/BoardHod.vue')
    },
    {
        path: '/director',
        name: 'director',
        component: () => import('./views/BoardDirector.vue')
      }
  ]
});
router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/home'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
    if (authRequired && !loggedIn) {
      next('/login');
    } else {
      next();
    }
  });