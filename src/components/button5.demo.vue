<demo>
Loading
</demo>
<template>
  <Button loading>Loading Button</Button>
  <Button theme="link" loading>Loading Link</Button>
  <Button theme="text" loading>Loading Text</Button>
</template>

<script lang="ts">
import { Button } from "../lib/index";
export default {
  components: {
    Button,
  },
};
</script>