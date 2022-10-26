<template lang="">
    <div class="container mt-5">
         <div class="row justify-content-center">
             <div class="col-md-12">
                <div class="card">
                <div class="card-header">
                    Post Index
                </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Id</th>
                                <th scope="col">Title</th>
                                <th scope="col">Body</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="(post,index) in postData" ::key="index">
                                <th scope="row">{{++index}}</th>
                                <td>{{ post.id }}</td>
                                <td>{{ post.title }}</td>
                                <td>{{ post.body }}</td>
                                <td style="width:150px;">
                                    <router-link class="btn btn-primary" style="margin-right:5px" :to="{ name : 'PostEdit' , params : { id : post.id}}">Edit</router-link>

                                    <button @click.prevent="removeItem(post.id)" class="btn btn-danger">Delete</button>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
             </div>
         </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {  
    data() {
        return {
            postData : []
        }
    },
     methods:{
        removeItem(id){
            axios.delete(`http://localhost:3000/posts/${id}`).then((res)=>{
                Toast.fire({
                    icon: 'success',
                    title: 'Post delete in successfully'
                })

               this.postData = this.postData.filter(post => post.id !== id)
            });
        }
     },
     mounted(){
        axios.get('http://localhost:3000/posts').then((res)=>{
                this.postData = res.data;
        });
     }
}
</script>
<style lang="">
    
</style>