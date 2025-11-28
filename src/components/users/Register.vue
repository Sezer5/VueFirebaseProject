<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1 class="text-center">{{ register ? 'Kayıt Formu':'Kullanıcı Girişi' }}</h1>
            <form @submit.prevent="submitForm">
                <div class="form-group mb-3">
                    <label class="form-label">E-mail</label>
                    <input type="email" class="form-control" v-model="formData.email">
                </div>
                <div class="form-group mb-3">
                    <label class="form-label">Şifre</label>
                    <input type="password" class="form-control" v-model="formData.password">
                </div>
                <button type="submit" class="btn btn-primary btn-lg">{{ register ? 'Kaydol':'Giriş' }}</button>
            </form>
            <hr>
            <button class="btn btn-outline-primary btn-lg" @click="register = !register">{{ register ? 'Giriş':'Kaydol' }}</button>
        </div>
    </div>
</template>

<script setup>
import {reactive,ref} from 'vue';
import {AUTH} from '@/firebase/configs.js';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import {useRouter,useRoute} from 'vue-router';
const register = ref(true);
const router=useRouter();
const formData = reactive({
    email:'',
    password:''
});

const submitForm = ()=>{
    if(register.value){
        registerUser();
    }else{
        signInUser();
    }
}

const registerUser = async()=>{
    
    try {
        await createUserWithEmailAndPassword(AUTH,formData.email,formData.password);
        router.push('/');
    } catch (error) {
        console.log(error.message);
    }
}

const signInUser = async()=>{

    try {
        await signInWithEmailAndPassword(AUTH,formData.email,formData.password);
        router.push('/');
    } catch (error) {
        console.log(error.message);
    }

    
}
</script>

<style>

</style>