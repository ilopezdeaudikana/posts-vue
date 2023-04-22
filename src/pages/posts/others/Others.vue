<template>
  <div v-for="item in posts" :key="item.id">
    <Card :post="item" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import useUsers from '../../../hooks/useUsers'
import usePrivate from '../../../hooks/usePrivate'
import Card from '../../../shared/card/Card.vue'
import { computed } from 'vue'

usePrivate()
const store = useStore()
useUsers()
const posts = computed(() => store.getters.mergedPosts)

</script>
