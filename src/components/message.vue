<template>
  <div class="pt-16 h-[20%]">
    <div class="hidden w-full justify-center" :class="card_message_name">
      <div
        class="bg-white mx-10 lg:mx-0 w-full md:w-[40%] lg:w-[25%] xl:w-[20%] lg:h-[15%] flex flex-col justify-around items-center rounded-sm p-4"
      >
        <span
          v-if="title && title_color"
          class="text-base font-medium uppercase"
          :class="title_color"
        >
          {{ title }}</span
        >
        <span class="text-base font-medium" :class="message_color">{{ message }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    card_message_name: String,
    message_color: String,
    message: String,
    title_color: String,
    title: String
  }
}
</script>
