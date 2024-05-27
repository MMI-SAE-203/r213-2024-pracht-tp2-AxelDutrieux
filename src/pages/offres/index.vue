<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MaisonCard from '@/components/maisonCard.vue'  
import {pb} from '@/backend';
import type { agenceRecord } from '@/type'
import { allMaisonsSorted } from '@/backend'

const maisonsListe = await allMaisonsSorted()
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <div v-for="uneMaison of maisonsListe" :key="uneMaison.id">
    <MaisonCard v-bind="uneMaison" />
  </div>
</template>