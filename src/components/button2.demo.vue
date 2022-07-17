<demo>
Size
</demo>
<template>
  <div>
    <Button size="large">Large</Button>
    <Button size="default">Default</Button>
    <Button size="small">Small</Button>
  </div>

  <div>
    <Button theme="link" size="large">Large</Button>
    <Button theme="link" size="default">Default</Button>
    <Button theme="link" size="small">Small</Button>
  </div>

  <div>
    <Button theme="text" size="large">Large</Button>
    <Button theme="text" size="default">Default</Button>
    <Button theme="text" size="small">Small</Button>
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