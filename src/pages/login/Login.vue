<template>
  <div class="flex justify-center w-200">
    <form @submit="handleSubmit" class="flex-col bg-gray-200 p-5 rounded-lg">
      <label for="email">Email address</label>
      <input
        v-model="email"
        placeholder="Email"
        aria-describedby="helper-text"
        required
        class="m-4 p-4 rounded-lg"
      />

      <p 
        id="helper-text" 
        class="font-extralight italic text-xs"
      >
        Try Sincere@april.biz.
      </p>

      <button
        role="button"
        type="submit"
        class="mt-3 rounded-md p-4 bg-slate-100"
        :disabled="!email"
      >
        Log In
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import type { User } from '../../models/models'
import { getUser } from '../../api/api'
import { SetUser, SetUsers } from '../../store/actions/actions'
import { useRouter } from 'vue-router'
import { ref, type Ref } from 'vue'

const email: Ref<string> = ref('')
const store = useStore()
const router = useRouter()
store.dispatch(SetUsers([]))
store.dispatch(SetUser({} as User))

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  const user: User[] = await getUser(email.value)
  if (user && user.length) {
    store.dispatch(SetUser(user[0]))
    router.push({ path: '/posts' })
  }
}
</script>
