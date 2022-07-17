<template>
  <div>Button 示例</div>
  <Demo :component="ButtonDemo1" />
  <Demo :component="ButtonDemo2" />
  <Demo :component="ButtonDemo3" />
  <Demo :component="ButtonDemo4" />
  <Demo :component="ButtonDemo5" />
</template>

<script lang="ts">
import ButtonDemo1 from "./button1.demo.vue";
import ButtonDemo2 from "./button2.demo.vue";
import ButtonDemo3 from "./button3.demo.vue";
import ButtonDemo4 from "./button4.demo.vue";
import ButtonDemo5 from "./button5.demo.vue";
import Demo from "./demo.vue";
export default {
  components: { Demo },
  setup() {
    return {
      ButtonDemo1,
      ButtonDemo2,
      ButtonDemo3,
      ButtonDemo4,
      ButtonDemo5,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>