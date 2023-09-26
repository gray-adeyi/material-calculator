<script lang="ts" setup>
import { useCalculatorStore } from "../store";

const calculator = useCalculatorStore();
</script>

<template>
  <div class="keyboard-container">
    <div class="keyboard-row-container">
      <button class="btn" @click="calculator.clear()">AC</button>
      <button class="btn" @click="calculator.addEntry(calculator.nextParen())">
        ()
      </button>
      <button class="btn" @click="calculator.addEntry('%')">%</button>
      <button class="btn" @click="calculator.addEntry('÷')">÷</button>
    </div>
    <div class="keyboard-row-container">
      <button class="btn" @click="calculator.addEntry('7')">7</button>
      <button class="btn" @click="calculator.addEntry('8')">8</button>
      <button class="btn" @click="calculator.addEntry('9')">9</button>
      <button class="btn" @click="calculator.addEntry('×')">×</button>
    </div>
    <div class="keyboard-row-container">
      <button class="btn" @click="calculator.addEntry('4')">4</button>
      <button class="btn" @click="calculator.addEntry('5')">5</button>
      <button class="btn" @click="calculator.addEntry('6')">6</button>
      <button class="btn">⁻</button>
    </div>
    <div class="keyboard-row-container">
      <button class="btn" @click="calculator.addEntry('1')">1</button>
      <button class="btn" @click="calculator.addEntry('2')">2</button>
      <button class="btn" @click="calculator.addEntry('3')">3</button>
      <button class="btn" @click="calculator.addEntry('+')">+</button>
    </div>
    <div class="keyboard-row-container">
      <button class="btn" @click="calculator.addEntry('0')">0</button>
      <button class="btn" @click="calculator.addEntry('.')">.</button>
      <button class="btn" @click="calculator.backspace()">bks</button>
      <button class="btn" @click="calculator.evaluate()">=</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.keyboard-container {
  display: flex;
  flex-direction: column;
  margin-top: 0.625rem;
  //   border: 2px solid black;
}

.keyboard-row-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 0.625rem;
}

.btn {
  border: none;
  outline: none;
  background: var(--num-key-bg);
  padding: 1.25rem;
  border-radius: 50%;
  font-weight: 500;
  font-size: 1.5625rem;
  cursor: pointer;
}
</style>
