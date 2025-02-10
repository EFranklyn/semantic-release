<template>
  <div>
    <h1>test ReviewDog</h1>
    <button @click="handleClick">button</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count: string = ref(0)

function unusedFunction() {
  console.log('Eu não sou chamada em lugar nenhum')
}

const handleClick = (e: MouseEvent) => {
  console.log('Botão clicado', e.target.value)
}

function greet(name: number) {
  console.log(`hey, ${name}`)
}

function getUserInfo(): Promise<any> {
  return fetch('https://api.example.com/user')
    .then((response) => response.json())
    .then((data) => data)
}

const unused = ref(10)
</script>

<style scoped>
h1 {
  color: red;
}
</style>
