<template>
  <div class="layout">
    <TopNav class="nav" :toggleMenuButtonVisible="true"></TopNav>
    <div class="content">
      <aside ref="asideRef">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/info">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/start">开始使用</router-link>
          </li>
        </ol>
        <h2>组件</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, onMounted, ref, Ref, watchEffect } from "vue";
import TopNav from "../components/topnav.vue";
export default {
  components: {
    TopNav,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const asideRef = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(() => {
        if (asideVisible?.value) {
          asideRef.value.style.width = 150 + "px";
        } else {
          asideRef.value.style.width = 0 + "px";
        }
      });
    });
    return {
      asideVisible,
      asideRef,
    };
  },
};
</script>

<style lang="scss" scoped>
$aside-index: 10;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    white-space: nowrap;
    flex-shrink: 0;
    transition: width 300ms;
    overflow: hidden;
    box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%);
  }

  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}

aside {
  background: #fafafa;
  width: 150px;
  padding: 16px 0;
  margin-top: 70px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: $aside-index;

  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }

      .router-link-active {
        color: #1669bb;
      }
    }
  }

  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
  }
}

main {
  overflow: auto;
}
</style>
