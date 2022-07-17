<demo>
Disable
</demo>
<template>
  <Button disabled>Button Disabled</Button>
  <Button theme="link" disabled>Link Disabled</Button>
  <Button theme="text" disabled>Text Disabled</Button>
</template>

<script lang="ts">
import { Button } from "../lib/index";
export default {
  components: {
    Button,
  },
};
</script>