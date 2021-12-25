<template>
  <button role="button" @click="showForm">Create new Post</button>
  <form v-show="visible" @submit.prevent="handleSubmit" :class="$style.addPost">
    <label for="title">Title</label>
    <input :class="$style.item" v-model="title" placeholder="Title" required />
    <textarea
      :class="$style.item"
      v-model="body"
      aria-label="Post body textarea"
      placeholder="Post body"
      rows="3"
      required
    />
    <button
      role="button"
      type="submit"
      :class="$style.saveButton"
      :disabled="!title && !body"
    >
      Save Post
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CreatePost } from '../../../store/actions/actions';
import { createPost } from '../../../api/api';

export default defineComponent({
  props: {
    userId: Number,
  },
  data() {
    return {
      title: '',
      body: '',
      visible: false,
    };
  },
  methods: {
    async handleSubmit() {
      const { title, body, userId } = this;
      const post = { title, body, userId: userId || 0 };
      const response: { id: number } = await createPost({
        ...post,
      });
      this.$store.dispatch(CreatePost({ ...post, ...response }));
      this.showForm();
    },
    showForm() {
      this.visible = !this.visible;
    },
  },
});
</script>
<style lang="scss" module>
@import './new-post.scss';
</style>
