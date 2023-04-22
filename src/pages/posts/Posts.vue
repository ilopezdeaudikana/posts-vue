<template>
  <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-4 m-10">
    <div class="posts">
      <TabGroup :defaultIndex="1">
        <TabList>
          <Tab as="template" v-slot="{ selected }">
            <button
              :class="{
                'bg-blue-500 text-white rounded-lg p-4': selected,
                'bg-white text-black rounded-lg p-4': !selected
              }"
            >
              Mine
            </button>
          </Tab>
          <Tab as="template" v-slot="{ selected }">
            <button
              :class="{
                'bg-blue-500 text-white rounded-lg mx-1 p-4': selected,
                'bg-white text-black rounded-lg mx-1 p-4': !selected
              }"
            >
              Others
            </button>
          </Tab>
          <Tab
            class="ui-selected:bg-blue-500 ui-selected:text-white ui-selected:p-4 ui-not-selected:bg-white ui-not-selected:text-black ui-not-selected:p-4"
          >
            Styled using @headlessui/tailwindcss plugin
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel><Mine /></TabPanel>
          <TabPanel><Others /></TabPanel>
          <TabPanel>Lorem ipsum ... </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import usePosts from '../../hooks/usePosts'
import usePrivate from '../../hooks/usePrivate'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import Mine from '../posts/mine/Mine.vue'
import Others from '../posts/others/Others.vue'

usePrivate()
usePosts()
</script>
<style lang="scss" scoped>
.posts {
  .list {
    margin-top: 2rem;
  }
}
</style>
