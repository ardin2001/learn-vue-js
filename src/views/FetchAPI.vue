<template>
  <main>
    <h3 class="title">Fetch API Page</h3>
    <h4 style="font-size: 20px; grid-column-start: 1; grid-column-end: 3;">Total Data : {{ TotalData }}</h4>
    <div class="result" v-for="(item, index) in dataBase" :key="index">
      <p>Name: {{ item.name }}</p>
      <p>Category : {{ item.category }}</p>
      <p>Price : {{ item.price }}</p>
      <p>Rating : {{ item.rating }}</p>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyZGluQGdtYWlsLmNvbSIsImlkIjoiQ2NMQmxFQjZ6T0t1M1VxVUlSck4iLCJmdWxsbmFtZSI6ImFyZGluIG51Z3JhaGEiLCJyb2xlIjoidXNlciIsInZlcmlmaWVkIjpmYWxzZSwiaWF0IjoxNzIxMjc4ODUxfQ.i_oMwpuFCJu82uEPPBFalX7DUmrwWKVMU9Iqr-wFsPI"
let dataBase = ref([])

// Computed properties berbeda dari methods. Sementara methods dieksekusi setiap kali dipanggil,
// computed properties hanya dihitung ulang ketika salah satu dependensinya berubah.
const TotalData = computed(() => {
  return dataBase.value.length
})

const fetchPosts = async () => {
  try {
    const response = await fetch('https://backend-tes-magang.vercel.app/api/restaurants',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
      }
    })
    const {data,status} = await response.json();
    return {data,status}
    
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  fetchPosts().then((data) => {
    if (data.status) {
      dataBase.value = data.data
    }
  })
})

</script>

<style>
main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
}

.title {
  grid-column-start: 1;
  grid-column-end: 3;
  text-align: center;
  margin-bottom: 20px;
  font-size: 25px;
}

form {
  grid-column-start: 1;
  grid-column-end: 3;
}

.btn-detail {
  padding: 2px 5px;
  background-color: rgb(19, 113, 246);
  color: white;
}
.container-modal{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-detail {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 10px;
  color: white;
  width: 400px;
}

.title-detail {
  text-align: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
}
.bg-wanita{
  background-color: rgb(19, 113, 246);
}
.bg-pria{
  background-color: rgb(254, 37, 37);
}
</style>