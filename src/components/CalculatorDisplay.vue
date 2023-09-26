<script lang="ts" setup>
import CalculatorEntry from "./CalculatorEntry.vue";
import CalculatorMenu from "./CalculatorMenu.vue";
import BaseEntry from "./BaseEntry.vue";
import { useCalculatorStore } from "../store";

const calculator = useCalculatorStore();
</script>

<template>
  <div class="display-container">
    <CalculatorMenu />
    <CalculatorEntry />
    <BaseEntry class="answer-text" :value="calculator.answer" />
  </div>
</template>

<style lang="scss" scoped>
.display-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: calc(50.5625rem / 3);
  background: var(--display-bg);
  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
  padding-right: 1rem;
  overflow: hidden;
}

.answer-text {
  font-size: 80px;
  max-height: 5.625rem;
}
</style>
