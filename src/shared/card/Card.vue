<template>
  <div class="card">
    <p v-if="post.username" class="username">{{ post.username }}</p>
    <p class="title">{{ post.title }}</p>
    <p class="regular">{{ post.body }}</p>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { Post } from '../../models/models';

export default {
  props: {
    post: Object as PropType<Post>,
  },
};
</script>

<style lang="scss" src="./card.scss" scoped></style>
