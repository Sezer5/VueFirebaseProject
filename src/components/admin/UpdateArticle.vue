<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1 class="text-center">Yazıyı Güncelle</h1>
            <form @submit.prevent="submitForm">
                <div class="form-group mb-3">
                    <label class="form-label">Başlık</label>
                    <input v-model="formData.title" type="text" class="form-control">
                </div>
                <div class="form-group mb-3">
                    <label class="form-label">Yazı</label>
                    <textarea class="form-control" v-model="formData.description" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-lg">Güncelle</button>
            </form>
        </div>
    </div>
</template>

<script setup>
    // import { collection, addDoc } from "firebase/firestore"; 
    import { doc, getDoc,updateDoc } from "firebase/firestore"; 
    import { reactive } from "vue";
    import {DB} from '@/firebase/configs.js';
    import {useRouter,useRoute} from 'vue-router';
    import router from "@/router";


    const route=useRoute();

    const routerMain=useRouter();
    const formData = reactive({
        title:'',
        description:''
    })

    const docRef = doc(DB,"notes",route.params.id);

    getDoc(docRef).then(snapShot => {
        // console.log(snapShot.data());
        formData.title = snapShot.data().title;
        formData.description = snapShot.data().description;
    }).catch(error=>{
        console.log(error);
    });

    const submitForm = async() =>{
            try {
                const docRef = doc(DB,"notes",route.params.id);
                await updateDoc(docRef,{...formData});
                router.push('/');
            } catch (error) {
                console.log(error);
            }
             

    }

</script>

<style>

</style>