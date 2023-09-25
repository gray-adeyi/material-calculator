<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const { blinkRate } = defineProps<{
  blinkRate: number;
}>();
const showCursor = ref(false);

const toggleCursor = () => {
  showCursor.value = !showCursor.value;
};

let intervalId = 0;

onMounted(() => {
  intervalId = setInterval(toggleCursor, blinkRate);
});

onBeforeUnmount(() => clearInterval(intervalId));
</script>

<template>
  <div :class="{ 'show-cursor': showCursor }" class="cursor"></div>
</template>

<style lang="scss" scoped>
.cursor {
  width: 0;
  border: 0.1rem solid black;
  height: 9rem;
  visibility: hidden;
}

.show-cursor {
  visibility: visible;
}
</style>
