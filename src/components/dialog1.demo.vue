<demo>
    传统Dialog
</demo>
<template>
  <Button @click="showDialog">show</Button>
  <Dialog v-model:visible="visible" :ok="ok" :cancel="cancel">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <div>
        <p>第一行</p>
        <p>第二行</p>
      </div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import { Button } from "../lib/index";
import Dialog from "../lib/dialog.vue";
import { ref } from "vue";
export default {
  components: {
    Button,
    Dialog,
  },
  setup() {
    const visible = ref(false);
    const showDialog = () => {
      visible.value = true;
    };
    const ok = () => {
      return true;
    };
    const cancel = () => {};
    return { showDialog, visible, ok, cancel };
  },
};
</script>