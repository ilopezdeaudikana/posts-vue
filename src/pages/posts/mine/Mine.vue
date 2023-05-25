<template>
  <div class="flex flex-col justify-center">
    <NewPost :userId="userId" />
    <div v-for="item in posts" :key="item.id">
      <Card :post="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'
import usePrivate from '../../../hooks/usePrivate'
import useUsers from '../../../hooks/useUsers'
import Card from '../../../shared/card/Card.vue'
import NewPost from '../new/NewPost.vue'

usePrivate()
const store = useStore()
const userId = ref(0)
useUsers()
onMounted(() => {
  userId.value = store.state.user?.id
})
const posts = computed(() => store.getters.myPosts)

</script>
