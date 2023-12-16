<script setup>
import Card from './components/Card.vue'
import { ref, onMounted } from 'vue'

const seen = ref(true)
const card1 = ref(0)
const card2 = ref(0)
const card3 = ref(0)

const checkHiddenInput = () => {
  const hiddenInputValue = document.getElementById('hiddenInputSeen').value;
  //const isTrueSet = (hiddenInputValue === 'true');
  //console.log(hiddenInputValue);

  if (hiddenInputValue === 'true') {
    //console.log("checkHiddenInput2 true");
    seen.value = true;
    //console.log(seen.value);
  } else {
    //console.log("checkHiddenInput2 false");
    seen.value = false;
    //console.log(seen.value);
  }
}

const updateCards = () => {
  card1.value = Number(document.getElementById('card1GetValue').value);
  card2.value = Number(document.getElementById('card2GetValue').value);
  card3.value = Number(document.getElementById('card3GetValue').value);
}

onMounted(() => {
  setInterval(() => {
    checkHiddenInput();
    updateCards();
  }, 1000); // Überprüfen Sie alle 1 Sekunde
})

</script>

<template>
    <div class="container text-center">
      <div class="row gx-5">
        <Card :seen="seen" :currentCardImg="card1" card="1" title="Karte 1" :btnDisabled="false" />
        <Card :seen="seen" :currentCardImg="card2" card="2" title="Karte 2" :btnDisabled="false" />
        <Card :seen="true" :currentCardImg="card3" card="3" title="Ablagestapel" :btnDisabled="true" />
        <div class="col col-sm-3 pb-3 md-pb-0 " id="overview_card"  onclick="turnOverOverwiewCard()">
          <div class="card bg-primary rounded-1" style="width: 100%;">
            <img id="overview_img" src="/assets/images/cards/Overview.jpg" class="card-img-top rounded-1" alt="Übersichtskarte">
            <div class="card-body">
              <h5 class="card-title text-truncate">Kartenübersicht</h5>
              <button type="button" disabled class="btn btn-outline-primary border-primary text-primary" style="width: 100%;">x</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
</style>
