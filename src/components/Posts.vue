<template>
    <v-container>
        <v-row class="justify-center">
            <v-col cols="6" xl="4">
                <div class="text-grey">{{new Date(articl.timestamp * 1000).toDateString()}}</div>
                <div class="text-h3 font-weight-medium">{{ articl.title }}</div>
            </v-col>
            <v-col cols="6" xl="4">
                <v-img :src="articl.img" class="rounded-lg elevation-1"></v-img>
            </v-col>
        </v-row>

        <v-row class="justify-center">
            <v-col xl="8">
                <v-divider class="my-10"></v-divider>
            </v-col>
        </v-row>

        <v-row class="justify-center">
            <v-col cols="10" xl="7">
                <p>{{ articl.text }}</p>
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
                title: 'How to make time for learning in tech',
                img: 'https://i.picsum.photos/id/222/1024/600.jpg?hmac=pOFhqnd_9PfqDD3pe4Z2R-bKSbWeevy2BFfjxe6ZgrA',
                timestamp: 1670591872,
                text: "Learning is a critical part of our work as engineers. The problems we solve are technical, complex, and ambiguous, but the tools at our disposal change and improve regularly. The code we develop requires time for ideation and advanced skills for implementation. Most days we are learning on the fly and experimenting as we go. Because our time is in such high demand, we rarely have an evening or a weekend to squeeze in professional development so our skills remain relevant. Meanwhile, we’re navigating pressures from engineering departments. Company leadership wants us to have up-to-date skillsets and work with the latest tech. However, they may not allow us to learn on company time or are struggling to provide pathways for meaningful learning. Yes, we’ve heard phrases like, “Friday afternoons will be set aside for learning.” But those Friday afternoons are often spent wrapping up work to complete a sprint. Even if the engineering organization offers a rich learning platform, the chances of getting through a course—while also keeping up with work, family, and other obligations—are pretty low. We’re left with the difficult choice between learning something new in our spare time or being with our friends and family—who we might have ditched last weekend because we had to work.Despite full calendars and heavy demands on our personal time, there are ways to make time for learning. It’s tempting to believe that we need an hours-long block of time to learn anything, but that’s not the case. Learning in small increments is better and more realistic. Plus, it’s an important habit to develop for a long-term career in engineering. Like anything else worth doing, it isn’t easy and you have to be creative."
            },
        }
    },
}
</script>