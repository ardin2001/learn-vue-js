<template>
  <main>
    <h3>Event Handling Page</h3>
    <form id="form" @submit.prevent="onSubmit">
      <div class="name">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="data.name" />
      </div>

      <div class="email">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="data.email" />
      </div>

      <div class="password">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="data.password" />
      </div>

      <div class="jk">
        <label for="jk">Jenis Kelamin :</label>
        <input type="radio" value="pria" name="jk" id="pria" v-model="data.jk" />
        <label for="pria">Pria</label>
        <input type="radio" value="wanita" name="jk" id="wanita" v-model="data.jk" />
        <label for="wanita">Wanita</label>
      </div>
      <br>
      <button @click="ResetInput" type="button" style="margin-right: 15px;">Reset</button>
      <button @click="BtnView" type="button" style="margin-right: 15px;">{{ data.show ? 'Hide' : 'Show' }} Result</button>
      <button type="submit">Submit</button>

      <div class="result" v-show="data.show">
        <p>Name: {{ data.name }}</p>
        <p>Email: {{ data.email }}</p>
        <p>Password: {{ data.password.length > 6 ? data.password : data.password.length == 0 ? '' : 'password kurang dari 6' }}</p>
        <p v-if="data.jk == 'pria'">Jenis kelamin Laki-laki</p>
        <p v-else-if="data.jk == 'wanita'">Jenis kelamin Perempuan</p>
        <p v-else>Jenis kelamin Belum dipilih</p>
      </div>
    </form>
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue'

const data = reactive({
  name: '',
  email: '',
  password: '',
  jk: '',
  show: false
})
function ResetInput() {
  data.email = ''
  data.password = ''
  data.jk = ''
  data.show = false
  data.name = ''
}

const BtnView = () => {
  data.show = !data.show
}

const onSubmit = () => {
  console.log(data)
}
</script>