<script setup>
//import { ref } from 'vue'

defineProps({
  seen: Boolean,
  currentCardImg: Number,
  card: String,
  title: String,
  btnDisabled: Boolean,
})

//const count = ref(0)
</script>

<template>
    <div v-if="seen" :id="`card${card}`" class="col col-sm-3 pb-3 md-pb-0" :onclick="`playCard(${card})`">
        <div class="card bg-primary rounded-1" style="width: 100%;">
            <img :id="`card${card}img`" :src="`/assets/images/cards/Card-${currentCardImg}.jpg`" class="card-img-top rounded-1" :alt="`Karte 1 (${currentCard})`">
            <div class="card-body">
                <h5 class="card-title text-truncate">{{title}}</h5>
                <div v-if="!btnDisabled" onclick="playCard(1)" class="btn btn-outline-secondary text-truncate" style="width: 100%;">Spiele Karte {{card}}</div>
                <button v-else type="button" disabled class="btn btn-outline-primary border-primary text-primary" style="width: 100%;">x</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
