import { ref } from 'vue'

export function useCountStore() {
  const count = ref(0)

  function increment() {
    count.value++
  }

  return {
    count,
    increment
  }
}
