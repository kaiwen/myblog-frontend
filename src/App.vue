<template>
  <v-app>
    <v-main>
      <v-toolbar border color="white">
        <template v-slot:prepend>
          <a href="/">
          <v-img width="220" src="/public/logo2.png"></v-img>
        </a>
        </template>
      </v-toolbar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>