<script setup lang="ts"></script>

<template>
  <div class="plaid3 w-full h-24 border-2 border-black rounded-lg" />
</template>

<style lang="css" scoped>
.plaid {
  background-color: #ffffff;
  background-image:
    linear-gradient(90deg, #0769d580 20px, transparent 20px),
    linear-gradient(#0769d580 20px, transparent 20px);
  background-position: 10px 10px;
  background-size: 40px 40px;
}

.plaid2 {
  background-color: #ffffff;
  background-image:
    linear-gradient(45deg, #0769d580 25%, transparent 25%, transparent 75%, #0769d580 75%),
    linear-gradient(45deg, #0769d580 25%, transparent 25%, transparent 75%, #0769d580 75%);
  background-position:
    10px 10px,
    30px 30px;
  background-size: 40px 40px;
}

.plaid3 {
  background-color: #ffffff;
  background-image:
    repeating-linear-gradient(45deg, #0769d580, #0769d580 20px, transparent 20px, transparent 40px),
    repeating-linear-gradient(-45deg, #0769d580, #0769d580 20px, transparent 20px, transparent 40px);
}
</style>
