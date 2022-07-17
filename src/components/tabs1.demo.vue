<demo>
常规使用
</demo>
<template>
  <Tabs v-model:selected="selected">
    <Tab title="导航1">内容1</Tab>
    <Tab title="很长的导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/tabs.vue";
import Tab from "../lib/tab.vue";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const selected = ref("导航1");
    return { selected };
  },
};
</script>
