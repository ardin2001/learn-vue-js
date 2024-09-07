<template>
    <main>
        <h3>Option View</h3>
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
            <button @click="ResetInput" type="button">Reset</button>
        </form>
    </main>
</template>

<script>
import { ref } from 'vue'

export default {
    data() {
        return {
            name: ref('option'),
            email: ref(''),
            password: ref('')
        }
    },
    methods: {
        ResetInput() {
            this.name=""
            this.email=""
            this.password=""
        }
    }
}
</script>