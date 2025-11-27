<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1 class="text-center">Yeni Yazı Ekle</h1>
            <form @submit.prevent="submitForm">
                <div class="form-group mb-3">
                    <label class="form-label">Başlık</label>
                    <input v-model="formData.title" type="text" class="form-control">
                </div>
                <div class="form-group mb-3">
                    <label class="form-label">Yazı</label>
                    <textarea class="form-control" v-model="formData.description" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-lg">Ekle</button>
            </form>
        </div>
    </div>
</template>

<script setup>
    import { collection, addDoc } from "firebase/firestore"; 
    import { reactive } from "vue";
    import {DB} from '@/firebase/configs.js';
    import {useRouter} from 'vue-router';
    import router from "@/router";




    const routerMain=useRouter();
    const formData = reactive({
        title:'',
        description:''
    })

    const submitForm = async() =>{
        const notesCollection = collection(DB,'notes');
        await addDoc(notesCollection,{
            ...formData
        })
        formData.title='';
        formData.description='';
        routerMain.push('/');
    }

</script>

<style>

</style>