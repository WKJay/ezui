<demo>
Theme
</demo>
<template>
  <div>
    <Button>Default</Button>
    <Button theme="button">Button</Button>
    <Button theme="link">Link</Button>
    <Button theme="text">Text</Button>
  </div>
</template>

<script lang="ts">
import { Button } from "../lib/index";
export default {
  components: {
    Button,
  },
};
</script>