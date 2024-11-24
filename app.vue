<template>
  <div>
    <h1>dev</h1>
<!-- <img :src="publicImage" alt="foiiiiii"> --> 
    <img src="~/public/images/public.svg" alt="dan1">
    <img src="~/assets/images/teste2.svg" alt="dan2">
    <img :src="assetImage" alt="dan3">
  </div>
</template>

<script setup>
// Opção 1

// Opção 2
import assetImage from '@/public/images/public.svg'
</script>
