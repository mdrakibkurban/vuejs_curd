<template lang="">
    <div class="container mt-5">
         <div class="row justify-content-center">
             <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        Post Create
                    </div>
                    <form action="" @submit.prevent="addPost">
                        <div class="card-body">
                            <div class="mb-3">
                                <label for="name" class="form-label">Title</label>
                                <input type="name" v-model="form.title" class="form-control" id="name" placeholder="Title">
                            </div>

                            <div class="mb-3">
                                <label for="body" class="form-label">Body</label>
                                <input type="body" v-model="form.body" class="form-control" id="body" placeholder="Body">
                            </div>
                       </div>

                        <div class="card-footer text-end">
                            <button class="btn btn-primary">Create</button>
                        </div>
                    </form>

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
           form:{
              title : '',
              body : ''
           }
        }
    },

    methods:{
        addPost(){
            axios.post('http://localhost:3000/posts',this.form).then((res)=>{
                 this.$router.push({
                    name : 'Post'
                 })
                 Toast.fire({
                    icon: 'success',
                    title: 'Post Create in successfully'
                })
            });
        }
    }
 
}
</script>
<style lang="">
    
</style>