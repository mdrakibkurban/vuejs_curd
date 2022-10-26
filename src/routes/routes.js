import { createRouter, createWebHistory} from 'vue-router'

const routes = [
    { path: '/', component: () => import('../views/main/Home.vue') },
    
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('../views/admin/admin.vue'),
        
        children: [
          { 
            path: 'posts', 
            name: 'Post' ,
            component: () => import('../views/admin/post/Index.vue'),
          },
          { 
            path: 'posts/create', 
            name: 'PostCreate' ,
            component: () => import('../views/admin/post/create.vue'), 
          },

          { 
            path: 'posts/:id/edit', 
            name: 'PostEdit' ,
            component: () => import('../views/admin/post/edit.vue'), 
          },
         
        ]
    }
   

]
  
const router = createRouter({ 
    history:createWebHistory(),
    routes, 
    linkActiveClass: 'active',
})
  
export default router;