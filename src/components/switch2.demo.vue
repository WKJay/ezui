<demo>
支持disabled
</demo>
<template>
  <Switch v-model:value="bool" disabled></Switch>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/switch.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    return { bool };
  },
};
</script>
