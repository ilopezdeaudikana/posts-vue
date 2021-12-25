<template>
  <new-post :userId="userId" />
  <div v-for="item in posts" :key="item.id">
    <card :post="item" />
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import usePrivate from '../../../hooks/usePrivate';
import useUsers from '../../../hooks/useUsers';
import Card from '../../../shared/card/Card.vue';
import NewPost from '../new/NewPost.vue';

export default {
  setup() {
    usePrivate();
    const store = useStore();
    const userId = ref(0);
    useUsers();
    onMounted(() => {
      userId.value = store.state.user?.id;
    });
    return {
      posts: computed(() => store.getters.myPosts),
      userId,
    };
  },
  components: {
    card: Card,
    'new-post': NewPost,
  },
};
</script>
