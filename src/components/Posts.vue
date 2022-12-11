<template>
    <v-container>
        <v-row class="justify-center">
            <v-col cols="10" xl="6">
                <v-card>
                    <v-img :src="articl.img"></v-img>
                    <v-card-title>{{articl.title}}</v-card-title>
                    <v-card-subtitle>{{new Date(articl.timestamp * 1000).toDateString()}}</v-card-subtitle>
                    <v-card-text>{{articl.text}}</v-card-text>
                    <v-card-actions>
                        <v-btn icon="mdi-heart-outline"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            articl: {
                id: 1,
                title: 'Title Placeholder',
                img: 'https://i.picsum.photos/id/220/800/300.jpg?hmac=Rh4EzpUVg6wjS-vM0oFk400LXyjr3sDL8WeUZhXb2M4',
                timestamp: 1670591872,
                text: "Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer's wife. Their house was small, for the lumber to build it had to be carried by wagon many miles. There were four walls, a floor and a roof, which made one room; and this room contained a rusty looking cookstove, a cupboard for the dishes, a table, three or four chairs, and the beds. Uncle Henry and Aunt Em had a big bed in one corner, and Dorothy a little bed in another corner. There was no garret at all, and no cellar—except a small hole dug in the ground, called a cyclone cellar, where the family could go in case one of those great whirlwinds arose, mighty enough to crush any building in its path. It was reached by a trap door in the middle of the floor, from which a ladder led down into the small, dark hole."
            },
        }
    }
}
</script>