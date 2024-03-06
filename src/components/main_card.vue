<template>
  <div
    :class="card_component_name"
    class="lg:w-[45%] xl:w-[28%] lg:h-[75%] flex flex-wrap bg-white/10 backdrop-blur-sm rounded-md"
  >
    <span
      class="w-full h-auto text-xl md:text-2xl lg:text-3xl text-center font-bold mt-10"
      :class="title_color"
    >
      {{ title }}
    </span>
    <article class="w-full h-[85%] p-4 flex flex-col justify-around items-center">
      <img
        class="mb-4 w-16 h-16 md:w-32 md:h-32 object-contain"
        :alt="image_alt"
        :src="image_src"
      />
      <span
        class="p-1 flex text-xs md:text-lg lg:text-xl text-white text-justify lg:p-4 h-[70%] overflow-y-scroll max-h-72"
        >{{ description }}</span
      >
    </article>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    card_component_name: String,
    image_alt: String,
    image_src: String,
    description: String,
    title: String,
    title_color: String
  }
}
</script>
