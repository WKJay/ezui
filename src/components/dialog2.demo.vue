<demo>
    快捷Dialog
</demo>
<template>
  <Button @click="showDialog2">show</Button>
</template>

<script lang="ts">
import { Button } from "../lib/index";
import Dialog from "../lib/dialog.vue";
import { openDialog } from "../lib/openDialog";
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
    const showDialog2 = () => {
      openDialog({
        title: "标题",
        content: "Hello World",
        ok() {
          console.log("ok");
          return true;
        },
        cancel() {
          console.log("cancel");
          return true;
        },
      });
    };
    return { showDialog, visible, ok, cancel, showDialog2 };
  },
};
</script>