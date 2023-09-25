<script lang="ts" setup>
import { ref } from "vue";

const showMenu = ref(false);
</script>

<template>
  <div class="menu-container">
    <span @click="showMenu = !showMenu">menu</span>
    <Transition name="fade">
      <div v-if="showMenu" class="menu">
        <ul>
          <li>History</li>
          <li>Choose theme</li>
          <li>Privacy policy</li>
          <li>Send feedback</li>
          <li>Help</li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.menu-container {
  position: relative;

  span {
    cursor: pointer;
  }

  .menu {
    position: absolute;
    background: var(--menu-bg);
    padding: 0.5rem;
    border-radius: 0.8rem;
    min-width: 11.875rem;
    right: -0.5rem;

    ul {
      list-style-type: none;
      color: var(--num-key-bg);
      font-size: larger;
      font-family: sans-serif;

      li {
        margin: 1rem 2.5rem 1rem 0;
      }
    }
  }
}
</style>
