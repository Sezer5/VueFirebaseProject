<template>
    <div class="container">
        <header class="d-flex py-3 border-bottom mb-5">
            <router-link to="/" class="me-auto text-decoration-none text-dark">
                <span class="fs-3">Sezer Ünalmış</span>
            </router-link>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <router-link class="nav-link"  to="/">Yazılarım</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="#">Çıkış Yap</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/users/register">Kayıt Ol!</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/admin/addarticle">Yazı Ekle</router-link>
                </li>
            </ul>
        </header>
    </div>
</template>

<script setup>

</script>

<style>

</style>