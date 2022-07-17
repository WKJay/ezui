<template>
  <div>Tabs 示例</div>
  <Demo :component="Tabs1Demo" />
</template>

<script>
import Tabs1Demo from "./tabs1.demo.vue";
import Demo from "./demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return { Tabs1Demo }
  }
}
</script>
