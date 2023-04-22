<template>
  <Disclosure v-slot="{ open }">
    <DisclosureButton class="font-bold m-2">{{ post?.title }}</DisclosureButton>
    <DisclosurePanel>
      <div v-show="open">
      <p v-if="post?.username" id="username" class="font-medium mb-2">{{ post.username }}</p>
      <p class="font-light">{{ post?.body }}</p>
    </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Post } from '../../models/models'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

defineProps({
  post: Object as PropType<Post>
})
</script>
