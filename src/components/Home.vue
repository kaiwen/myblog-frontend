<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <v-row justify="center">
          <v-col cols="10" style="padding-top:40px">
            <v-card v-for="a in articls" :to="getPostId(a.id)" elevation="0">
              <div class="d-flex justify-space-between">
                <div>
                  <v-card-title>{{ a.title }}</v-card-title>
                  <v-card-subtitle>{{ getDate(a.timestamp) }}</v-card-subtitle>
                  <v-card-text>
                    <p class="content">{{ a.text }}</p>
                  </v-card-text>
                </div>
                <v-avatar size="128" rounded="0" class="ma-4">
                  <v-img :src="a.img" cover></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="2">
        <div class="d-flex justify-center profile-box">
          <v-card variant="flat" class="text-center">
            <v-avatar image="2.jpg" size="100"></v-avatar>
            <v-card-subtitle class="mt-3">A programer</v-card-subtitle>
            <v-card-actions>
              <v-btn icon="mdi-twitter" size="small" color="#1A8CD8" @click="goTwitter()"></v-btn>
              <v-btn icon="mdi-stack-overflow" size="small" color="#DA680B" @click="goStackOverflow()"></v-btn>
              <v-btn icon="mdi-github" size="small" @click="goGithub()"></v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      articls: [
        {
          id: 1,
          title: 'Title Placeholder',
          img: 'https://i.picsum.photos/id/222/1024/600.jpg?hmac=pOFhqnd_9PfqDD3pe4Z2R-bKSbWeevy2BFfjxe6ZgrA',
          timestamp: 1670591872,
          text: "Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer's wife. Their house was small, for the lumber to build it had to be carried by wagon many miles. There were four walls, a floor and a roof, which made one room; and this room contained a rusty looking cookstove, a cupboard for the dishes, a table, three or four chairs, and the beds. Uncle Henry and Aunt Em had a big bed in one corner, and Dorothy a little bed in another corner. There was no garret at all, and no cellar—except a small hole dug in the ground, called a cyclone cellar, where the family could go in case one of those great whirlwinds arose, mighty enough to crush any building in its path. It was reached by a trap door in the middle of the floor, from which a ladder led down into the small, dark hole."
        },
      ],
    }
  },
  methods: {
    getDate(d) {
      let date = new Date(d * 1000);
      return date.toDateString();
    },
    getPostId(id) {
      return "/posts?id=" + id;
    },
    goTwitter() {
      window.open('https://twitter.com/KaiWen40789864');
    },
    goStackOverflow() {
      window.open('https://stackoverflow.com/users/1105178/superk')
    },
    goGithub() {
      window.open('https://github.com/kaiwen')
    }
  }
}
</script>

<style scoped>
.content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.profile-box {
  margin-top: 100px;
}
</style>