<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    }
  },
}
</script>

<style>
</style>