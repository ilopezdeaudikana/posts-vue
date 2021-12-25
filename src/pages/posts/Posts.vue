<template>
  <div :class="$style.posts">
    <ul>
      <li><router-link to="/posts/mine">Mine</router-link></li>
      <li><router-link to="/posts/others">Others</router-link></li>
    </ul>
    <div :class="$style.list">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">

import usePosts from '../../hooks/usePosts';
import usePrivate from '../../hooks/usePrivate';

export default {
  setup() {
    usePrivate();
    usePosts();
  },
};
</script>
<style lang="scss" module>
@import './posts.scss';
</style>
