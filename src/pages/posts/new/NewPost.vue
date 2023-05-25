<template>
  <button role="button" @click="showForm" class="bg-blue-500 text-white m-6 p-2 w-48 self-center rounded-full">
    Create new Post
  </button>
  <form v-show="visible" @submit.prevent="handleSubmit" class="flex flex-col self-center">
    <label for="title">Title</label>
    <input class="w-96 m-3 p-3" v-model="title" placeholder="Title" required />
    <textarea
      class="w-96 m-3 p-3"
      v-model="body"
      aria-label="Post body textarea"
      placeholder="Post body"
      rows="3"
      required
    />
    <button
      role="button"
      type="submit"
      class="bg-blue-500 text-white m-6 p-2 w-32 self-center rounded-full"
      :disabled="!title && !body"
    >
      Save Post
    </button>
  </form>
</template>

<script setup lang="ts">
import { CreatePost } from '../../../store/actions/actions'
import { createPost } from '../../../api/api'
import { useStore } from 'vuex'
import { ref } from 'vue'

const props = defineProps({
  userId: Number
})

const visible = ref(false)
const title = ref('')
const body = ref('')
const store = useStore()

const handleSubmit = async () => {
  const post = {
    title: title.value,
    body: body.value,
    userId: props.userId || 0
  }
  const response: { id: number } = await createPost({
    ...post
  })
  store.dispatch(CreatePost({ ...post, ...response }))
  showForm()
}
const showForm = () => {
  visible.value = !visible.value
}

</script>

