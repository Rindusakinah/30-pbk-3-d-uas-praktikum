<script>
import { useCountStore } from './stores/counter'

export default {
  setup() {
    const { count, increment } = useCountStore()

    return {
      count,
      increment
    }
  }
}
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
