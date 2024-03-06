<template>
  <div :class="card_component_name" class="w-10 h-10 lg:w-28 lg:h-28">
    <img :src="image_src" :alt="image_alt" class="w-10 h-10 lg:w-28 lg:h-28" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    card_component_name: String,
    image_alt: String,
    image_src: String
  }
}
</script>
