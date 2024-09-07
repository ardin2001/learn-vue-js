<template>
  <main>
    <h3>Home</h3>
    <form action="" id="form">
      <div class="name">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="name" />
      </div>

      <div class="email">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email" />
      </div>

      <div class="password">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="password" />
      </div>
      <div class="result">
        <p>Name: {{ name }}</p>
        <p>Email: {{ email }}</p>
        <p>Password: {{ password }}</p>
      </div>
    </form>
  </main>
</template>

<!-- <script setup>
import { ref  } from 'vue'

const name = ref('ardin')
const email = ref('')
const password = ref('')
</script> -->

<!-- perbedaan ketika tanpa menggunakan script setup -->
<!-- membutuhkan export default kemudian di setup dengan return valuenya -->
<script>
import { ref } from 'vue'

export default {
  setup() {
    const name = ref('ardin')
    const email = ref('')
    const password = ref('')
    return {
      name, email, password
    }
  }
}
</script>