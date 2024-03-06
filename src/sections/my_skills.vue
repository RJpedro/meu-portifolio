<script setup lang="ts">
import DynamicSkillCard from '@/components/skill_card.vue'
</script>

<template>
  <section class="w-full h-auto bg-black px-6 py-4" id="my-skills-section">
    <span class="flex justify-center text-violet-400 text-3xl font-bold"
      >Minhas principais habilidades:</span
    ><br />
    <div
      class="flex flex-wrap justify-center gap-8 h-auto lg:h-[340px] overflow-hidden overflow-y-auto px-6"
      id="my-skills-div"
    >
      <DynamicSkillCard
        v-for="(skill, index) in skills"
        :key="index"
        :card_component_name="'v-skill-card'"
        :image_alt="skill.template_name"
        :image_src="global_path + skill.template_image"
      />
    </div>
  </section>
</template>

<script lang="ts">
import json_skills from '@/config/skills.json'
import url_paths from '@/config/config_project.json'

const url: string = window.location.href
let global_path: string = ''
if (url.includes('http://localhost')) global_path = url_paths.PATH_LOCAL
else global_path = url_paths.PATH_PRODUCTION

export default {
  name: 'my_skills',
  data() {
    return {
      skills: json_skills
    }
  }
}
</script>
