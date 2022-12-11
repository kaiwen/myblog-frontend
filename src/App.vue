<template>
  <v-app class="bg">
    <v-main>
      <v-app-bar>
        <template v-slot:title>
          <a href="/" class="brand">superK's Blog</a>
        </template>
      </v-app-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
</script>

<style scoped>
.bg {
  background-color: #e8e8e8;
}
.brand {
  text-decoration: none;
}
</style>