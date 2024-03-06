<script setup lang="ts">
import DynamicCard from '@/components/main_card.vue'
</script>

<template>
  <section
    class="flex flex-wrap flex-row justify-center items-center w-full h-auto lg:h-screen bg-black p-4 lg:p-8 gap-8"
    id="my-projects-section"
  >
    <DynamicCard
      v-for="(project, index) in projects"
      :key="index"
      :card_component_name="'v-main-card'"
      :image_alt="project.project_name"
      :image_src="global_path + project.project_photo"
      :description="project.project_description"
      :title="project.project_name"
      :title_color="'text-violet-400'"
    />
  </section>
</template>

<script lang="ts">
import json_projects from '@/config/projects.json'
import url_paths from '@/config/config_project.json'

const url: string = window.location.href
let global_path: string = ''
if (url.includes('http://localhost')) global_path = url_paths.PATH_LOCAL
else global_path = url_paths.PATH_PRODUCTION

export default {
  name: 'my_projects',
  data() {
    return {
      projects: json_projects
    }
  }
}
</script>
