<template>
  <div>
    <h1>dev</h1>
<!-- <img :src="publicImage" alt="foiiiiii"> --> 
    <img src="/public.svg" alt="dan1">
    <img src="~/assets/images/teste2.svg" alt="dan2">
    <img :src="assetImage" alt="dan3">
    <img :src="assetImage2" alt="dan32">

  </div>
</template>

<script setup>
// Opção 1

// Opção 2
import assetImage from '@/public/images/public.svg'
import assetImage from '@/public/public.svg'

</script>
