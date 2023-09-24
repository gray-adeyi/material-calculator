<script lang="ts" setup></script>

<template>
  <div class="keyboard-container">
    <div class="keyboard-row-container">
      <button class="btn">AC</button>
      <button class="btn">()</button>
      <button class="btn">%</button>
      <button class="btn">÷</button>
    </div>
    <div class="keyboard-row-container">
      <button class="btn">7</button>
      <button class="btn">8</button>
      <button class="btn">9</button>
      <button class="btn">×</button>
    </div>
    <div class="keyboard-row-container">
      <button class="btn">4</button>
      <button class="btn">5</button>
      <button class="btn">6</button>
      <button class="btn">⁻</button>
    </div>
    <div class="keyboard-row-container">
      <button class="btn">1</button>
      <button class="btn">2</button>
      <button class="btn">3</button>
      <button class="btn">+</button>
    </div>
    <div class="keyboard-row-container">
      <button class="btn">0</button>
      <button class="btn">.</button>
      <button class="btn">bks</button>
      <button class="btn">=</button>
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
