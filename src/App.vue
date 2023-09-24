<script setup lang="ts">
import CalculatorDisplay from "./components/CalculatorDisplay.vue";
import SpecialFunc from "./components/SpecialFunc.vue";
import CalculatorKeyboard from "./components/CalculatorKeyboard.vue";
</script>

<template>
  <div class="calculator-container">
    <CalculatorDisplay />
    <SpecialFunc />
    <CalculatorKeyboard />
  </div>
</template>

<style lang="scss" scoped>
.calculator-container {
  display: flex;
  flex-direction: column;
  margin: 1.25rem auto 0;
  width: calc(67.5rem / 3);
  height: calc(150rem / 3);
  background: var(--calculator-bg);
  border: 0.125rem solid var(--text-color);
  border-radius: 0.3125rem;
}
</style>
