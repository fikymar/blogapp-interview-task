<template>
  <button
    class="border-2 text-zinc-600 font-medium hover:bg-gradient-to-br from-lime-400 via-lime-500 to-lime-600 px-4 py-2 self-center uppercase transition rounded-md whitespace-nowrap"
    :class="{
      'bg-white  border-zinc-600 ': outline,
      'bg-gradient-to-tr  border-lime-400  hover:border-zinc-500': !outline,
    }"
    @click="onClick"
  >
    <slot> </slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["onClick", "outline", "type"],
  setup() {},
};
</script>

<style scoped></style>
