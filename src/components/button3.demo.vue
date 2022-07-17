<demo>
Level
</demo>
<template>
  <div>
    <Button level="defaule">Default</Button>
    <Button level="main">Main</Button>
    <Button level="danger">Danger</Button>
  </div>

  <div>
    <Button theme="link" level="defaule">Default</Button>
    <Button theme="link" level="main">Main</Button>
    <Button theme="link" level="danger">Danger</Button>
  </div>

  <div>
    <Button theme="text" level="defaule">Default</Button>
    <Button theme="text" level="main">Main</Button>
    <Button theme="text" level="danger">Danger</Button>
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