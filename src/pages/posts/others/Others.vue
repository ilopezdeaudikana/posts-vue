<template>
  <div v-for="item in posts" :key="item.id">
    <card :post="item" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import useUsers from '../../../hooks/useUsers';
import usePrivate from '../../../hooks/usePrivate';
import Card from '../../../shared/card/Card.vue';

export default defineComponent({
  setup() {
    usePrivate();
    const store = useStore();
    useUsers();
    return {
      posts: computed(() => store.getters.mergedPosts),
    };
  },
  components: {
    card: Card,
  },
});
</script>
