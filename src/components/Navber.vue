<template lang="">
   <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Dashboard</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Post
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link class="dropdown-item" :to="{name : 'Post'}">Post Manage</router-link>
            </li>
            <li>
              <router-link class="dropdown-item" :to="{name : 'PostCreate'}">Post Add</router-link>
            </li>
          </ul>
        </li>
        </ul>    
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>