<template>
  <main>
    <h3 class="title">Computed Properties Page</h3>
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
    </form>
    <h4 style="font-size: 20px; grid-column-start: 1; grid-column-end: 3;">Total Data : {{ TotalData }}</h4>
    <div class="result" v-show="data.show" v-for="(item, index) in dataBase" :key="index">
        <p>Name: {{ item.name }}</p>
        <p>Email: {{ item.email }}</p>
        <p>Password: {{ item.password }}</p>
        <p>Jenis kelamin: {{ SymbolGender(item.jk) }}</p>
        <p v-if="item.jk == 'pria'">Jenis kelamin Laki-laki</p>
        <p v-else-if="item.jk == 'wanita'">Jenis kelamin Perempuan</p>
        <p v-else>Jenis kelamin Belum dipilih</p>
      </div>
  </main>
</template>

<script setup>
import { ref, reactive,computed } from 'vue'

const data = reactive({
  name: '',
  email: '',
  password: '',
  jk: '',
  show: false
})

let dataBase = ref([
  {
    name: 'ardi',
    email: 'ardi123',
    password: 'ardi123',
    jk: 'pria'
  },
  {
    name: 'ardi2',
    email: 'ardi1232',
    password: 'ardi1232',
    jk: 'wanita'
  },
  {
    name: 'ardi3',
    email: 'ardi1233',
    password: 'ardi1233',
    jk: 'wanita'
  }
])
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

const SymbolGender = (jk) => {
  if (jk == 'pria') {
    return '1'
  } else if (jk == 'wanita') {
    return '0'
  } else {
    return '-'
  }
}

// Computed properties berbeda dari methods. Sementara methods dieksekusi setiap kali dipanggil,
// computed properties hanya dihitung ulang ketika salah satu dependensinya berubah.
const TotalData = computed(() => {
  return dataBase.value.length
})

const onSubmit = () => {
  dataBase.value.push({
    name: data.name,
    email: data.email,
    password: data.password,
    jk: data.jk
  })
  ResetInput()
}
</script>

<style>
main{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
}
.title{
  grid-column-start: 1;
  grid-column-end: 3;
  text-align: center;
  margin-bottom: 20px;
  font-size: 25px;
}
form{
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>