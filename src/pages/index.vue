<script setup lang="ts">
import maisonCard from '@/components/maisonCard.vue'  
import type { maisonRecord } from '@/types'
const maisonsListe: maisonRecord[] = [
  {
    "Chambres": 2,
    "Favori": false,
    "Image": "1TZDeXUjMuT_rbRtz0CGX1.jpeg",
    "Nom": "Maison de lutin T3",
    "Prix": 150000,
    "Salle_de_bain": -1,
    "adresse": "3 avenue des forêts,  Lechataigner",
    "collectionId": "lnafxaqnzw5qefb",
    "collectionName": "agence",
    "created": "2024-05-03 08:18:41.961Z",
    "id": "fgy6ajyrh5ne8d6",
    "superficie": 100,
    "updated": "2024-05-03 08:22:02.515Z"
  },
  {
    "Chambres": 10,
    "Favori": false,
    "Image": "2qQy1zbNuKB_kID4SZokmX.jpeg",
    "Nom": "Chateau en T6",
    "Prix": 1000000,
    "Salle_de_bain": 5,
    "adresse": "666 Boulevard de la fin, Enfer",
    "collectionId": "lnafxaqnzw5qefb",
    "collectionName": "agence",
    "created": "2024-05-03 08:21:50.799Z",
    "id": "y2p7wzmun04qdyk",
    "superficie": 1200,
    "updated": "2024-05-03 08:21:50.799Z"
  },
  {
    "Chambres": 2,
    "Favori": false,
    "Image": "3oySFleq3O4_D5WTha4MXb.jpeg",
    "Nom": "Tour T3",
    "Prix": 100000,
    "Salle_de_bain": 1,
    "adresse": "4 rue de la rivière, Jolibois",
    "collectionId": "lnafxaqnzw5qefb",
    "collectionName": "agence",
    "created": "2024-05-03 08:25:58.925Z",
    "id": "svnaca3pyyuyhx5",
    "superficie": 75,
    "updated": "2024-05-03 08:25:58.925Z"
  },
  {
    "Chambres": 3,
    "Favori": false,
    "Image": "4atQ7cEn9CB_qyi7zvAYas.jpeg",
    "Nom": "Grande Maison Flottante T5",
    "Prix": 300000,
    "Salle_de_bain": -1,
    "adresse": "8 rue des nuages, Leciel",
    "collectionId": "lnafxaqnzw5qefb",
    "collectionName": "agence",
    "created": "2024-05-03 08:28:53.737Z",
    "id": "pvupkjdejg253e8",
    "superficie": 200,
    "updated": "2024-05-03 08:28:53.737Z"
  },
  {
    "Chambres": 4,
    "Favori": true,
    "Image": "mes_cre_ations_avec_l_ia_9pDBoSQ2II.jpeg",
    "Nom": "Grande Maison en bois T5",
    "Prix": 250000,
    "Salle_de_bain": 1,
    "adresse": "5 rue des aventuriers, Moiènehage",
    "collectionId": "lnafxaqnzw5qefb",
    "collectionName": "agence",
    "created": "2024-05-03 08:30:57.121Z",
    "id": "twyznr4o4mnh947",
    "superficie": 250,
    "updated": "2024-05-03 08:30:57.121Z"
  }
]

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <MaisonCard v-bind="maisonsListe[0]" />
</template>
