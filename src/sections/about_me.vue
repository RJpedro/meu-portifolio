<script setup lang="ts">
import DynamicCard from '@/components/main_card.vue'
</script>

<script lang="ts">
import json_expiriences from '@/config/expiriences.json'
import url_paths from '@/config/config_project.json'

const url: string = window.location.href
let global_path: string = ''
if (url.includes('http://localhost')) global_path = url_paths.PATH_LOCAL
else global_path = url_paths.PATH_PRODUCTION

export default {
  name: 'about_me',
  data() {
    return {
      expiriences: json_expiriences
    }
  }
}
</script>

<template>
  <section
    class="flex flex-wrap justify-center items-center w-full h-auto xl:h-screen bg-violet-600 p-4 lg:p-8 gap-8"
    id="about-me-section"
  >
    <DynamicCard
      v-for="(expirience, index) in expiriences"
      :key="index"
      :card_component_name="'v-main-card'"
      :image_alt="expirience.expirience_photo_alt"
      :image_src="global_path + expirience.expirience_photo"
      :description="expirience.expirience_description"
      :title="expirience.expirience_title"
      :title_color="'text-white'"
    />
  </section>
</template>
