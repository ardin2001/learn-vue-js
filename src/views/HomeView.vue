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
      
      <div class="jk">
        <label for="jk">Jenis Kelamin :</label>
          <input type="radio" value="pria" name="jk" id="pria" v-model="jk" />
          <label for="pria">Pria</label>
          <input type="radio" value="wanita" name="jk" id="wanita" v-model="jk" />
          <label for="wanita">Wanita</label>
      </div>

      <div class="result">
        <p>Name: {{ name }}</p>
        <p>Email: {{ email }}</p>
        <p>Password: {{ password.length>6 ? password : password.length==0 ? ''  : 'password kurang dari 6' }}</p>
        <p v-if="jk=='pria'">Jenis kelamin Laki-laki</p>
        <p v-else-if="jk=='wanita'">Jenis kelamin Perempuan</p>
        <p v-else>Jenis kelamin Belum dipilih</p>
      </div>
      <br>
      <button @click="ResetInput" type="button">Reset</button>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('ardin')
const email = ref('')
const password = ref('')
const jk = ref('')
function ResetInput() {
  name.value = ''
  email.value = ''
  password.value = ''
  jk.value = ''
}
</script>

<!-- perbedaan ketika tanpa menggunakan script setup -->
<!-- membutuhkan export default kemudian di setup dengan return valuenya -->
<!-- <script>
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
</script> -->