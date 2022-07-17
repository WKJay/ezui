<template>
  <div class="ez-tabs">
    <div class="ez-tabs-nav" ref="container">
      <div class="ez-tabs-nav-item" :class="{selected:t==selected}" v-for="(t,index) in titles" :key="index" @click="select(t)" :ref="el=>{if(t == selected)selectedItem = el}">{{t}}</div>
      <div class="ez-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="ez-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>

  </div>
</template>

<script lang="ts">
import { ref, watchEffect,computed } from "vue";
import Tab from "./tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement | null>(null);
    const indicator = ref<HTMLDivElement | null>(null);
    const container = ref<HTMLDivElement | null>(null);

    //此处可将watchEffect放入onMounted中从而避免值为空
    watchEffect(() => {
      const selectItemRect = selectedItem.value?.getBoundingClientRect();
      const containerRect = container.value?.getBoundingClientRect();

      if (
        selectItemRect == null ||
        containerRect == null ||
        indicator.value == null
      )
        return;

      const { width } = selectItemRect;
      const { left: left1 } = containerRect;
      const { left: left2 } = selectItemRect;
      const left = left2 - left1;

      indicator.value.style.width = `${width}px`;
      indicator.value.style.left = `${left}px`;
    });

    const defaults = context.slots.default() || [];
    defaults.forEach((el) => {
      if (el.type != Tab) {
        throw new Error("Tabs only allows Tab as children");
      }
    });
    const current  = computed(()=>{
      return defaults.find(tag=>tag.props.title == props.selected)
    })
    const titles = defaults.map((el) => el.props.title);
    const select = (title: string) => {
      context.emit("update:selected", title);
    };

    return { defaults, titles, select, selectedItem, indicator, container,current };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.ez-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
