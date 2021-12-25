<template>
  <div :class="$style.wrapper">
    <form @submit="handleSubmit" :class="[$style.login]">
      <label for="email">Email address</label>
      <input
        v-model="email"
        placeholder="email"
        aria-describedby="helper-text"
        required
      />

      <p id="helper-text">Try Sincere@april.biz.</p>

      <button
        role="button"
        type="submit"
        :class="$style.submit"
        :disabled="!email"
      >
        Log In
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { User } from '../../models/models';
import { getUser } from '../../api/api';
import { SetUser, SetUsers } from '../../store/actions/actions';

export default defineComponent({
  setup () {
    const store = useStore();
    store.dispatch(SetUsers([]));
    store.dispatch(SetUser({} as User));
  },
  data() {
    return {
      email: '',
    };
  },
  methods: {
    async handleSubmit(e: HTMLFormElement) {
      e.preventDefault();
      const user: User[] = await getUser(this.$data.email);
      if (user && user.length) {
        this.$store.dispatch(SetUser(user[0]));
        this.$router.push({ name: 'mine' });
      }
    },
  },
});
</script>
<style lang="scss" module>
@import './login.scss';
</style>
