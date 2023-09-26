<script lang="ts" setup>
import { ref } from "vue";

const showAdditionalSpecialFunc = ref(false);
import { useCalculatorStore } from "../store";

const calculator = useCalculatorStore();
</script>

<template>
  <div class="special-func-container">
    <button class="special-func-btn" @click="calculator.addEntry('√')">
      √
    </button>
    <button class="special-func-btn" @click="calculator.addEntry('π')">
      π
    </button>
    <button class="special-func-btn" @click="calculator.addEntry('^')">
      ^
    </button>
    <button class="special-func-btn" @click="calculator.addEntry('!')">
      !
    </button>
    <button
      class="menu-btn"
      @click="() => (showAdditionalSpecialFunc = !showAdditionalSpecialFunc)"
    >
      menu
    </button>
  </div>
  <Transition name="fade">
    <div
      v-if="showAdditionalSpecialFunc"
      class="additional-special-func-container"
    >
      <div class="group-1">
        <button class="special-func-btn">DEG</button>
        <button class="special-func-btn">sin</button>
        <button class="special-func-btn">cos</button>
        <button class="special-func-btn">tan</button>
        <button class="special-func-btn"></button>
      </div>
      <div class="group-2">
        <button class="special-func-btn">INV</button>
        <button class="special-func-btn">e</button>
        <button class="special-func-btn">ln</button>
        <button class="special-func-btn">log</button>
        <button class="special-func-btn"></button>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.special-func-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 1.25rem;
}

.additional-special-func-container {
  .group-1,
  .group-2 {
    display: flex;
    justify-content: space-around;
  }
}

.special-func-btn,
.menu-btn {
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 700;
  padding: 0.3125rem;
}

.menu-btn {
}
</style>
