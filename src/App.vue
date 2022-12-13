<template>
  <v-app>
    <v-main>
      <v-toolbar border color="white" title="superK's Blog">
        <template v-slot:prepend>
          <a href="/" class="dishref">
            <v-icon icon="mdi-star" color="#ff9000" size="x-large" class="ml-3"></v-icon>
          </a>
        </template>
      </v-toolbar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style scoped>
.dishref {
  text-decoration: none;
}
</style>