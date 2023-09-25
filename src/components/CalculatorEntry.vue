<script lang="ts" setup>
import DisplayCursor from "./DisplayCursor.vue";
import BaseEntry from "./BaseEntry.vue";
</script>

<template>
  <div class="entry-container">
    <DisplayCursor :blink-rate="1000" />
    <BaseEntry class="expression-text" value="2X5" />
  </div>
</template>

<style lang="scss" scoped>
.entry-container {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  max-height: 9.375rem;
}

.expression-text {
  font-size: 9.375rem;
}
</style>
