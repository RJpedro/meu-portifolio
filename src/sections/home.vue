<script setup lang="ts">
import Skills from '@/sections/my_skills.vue'
</script>

<template>
  <section class="w-full h-auto bg-black py-8 2xl:py-16 xl:h-screen" id="home-section">
    <article class="flex flex-wrap justify-center items-center text-center gap-8 w-full h-auto">
      <div class="flex justify-center flex-col gap-5 w-full xl:w-[60%] h-auto">
        <p class="text-2xl md:text-5xl text-white font-bold">
          {{ half_main_message[0] }}
          <span class="text-violet-400">| {{ half_main_message[1] }}</span>
        </p>
        <p class="text-sm md:text-xl text-white font-medium">
          {{ half_second_message[0] }}
          <span class="text-violet-400"> {{ half_second_message[1] }}</span>
        </p>
        <p class="text-sm md:text-xl text-white font-medium px-6 lg:px-24 xl:px-0">
          {{ main_description }}
        </p>
        <Skills />
      </div>
      <div class="flex justify-center w-full h-auto xl:w-[28%]">
        <img
          src="@/assets/img/my_photo.webp"
          alt="Minha foto"
          class="w-10 h-44 md:w-52 md:h-52 rounded-[50%] min-w-[180px] lg:h-[280px] lg:w-[280px] xl:w-[340px] xl:h-[340px] object-contain border-violet-400 border-[4px] bg-white/10 backdrop-blur-sm"
        />
      </div>
    </article>
  </section>
</template>

<script lang="ts">
export default {
  name: 'my_home',
  mounted() {
    const main_message: string = 'Desenvolvedor Front-end | Back-End'
    const secondary_message: string = 'Transformando Linhas de Código em | Soluções.'

    this.half_main_message = main_message.split('|')
    this.half_second_message = secondary_message.split('|')

    const main_description: string = `
        Recém formado em Análise e desenvolvimento de sistemas na Fatec Cruzeiro Prof. Waldomiro May. Apaixonado por tecnologia e programação, estou sempre em busca de novos conhecimentos e desafios.
        Em minha trajetória vivo buscando aprender cada vez mais, em todos empregos formais de programação sempre entrei sem saber alguma tecnologia e tive que aprender cada uma delas com o decorrer do tempo.
    `

    this.main_description = main_description
  },
  data() {
    return {
      half_main_message: [''],
      half_second_message: [''],
      main_description: ''
    }
  }
}
</script>
