<script lang="ts">
export default {
  name: 'my_header',
  mounted() {
    const full_name: string = 'João | Pedro'
    const half_name: Array<string> = full_name.split('|')
    this.half_name_first_part = half_name[0]
    this.half_name_second_part = half_name[1]

    const icons: Array<{
      icon_name: string
      icon_image: string
      icon_link: string
      aria_label: string
    }> = [
      {
        icon_name: 'Linkedln',
        icon_image:
          '<svg class="cursor-pointer fill-white hover:fill-violet-400" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>',
        icon_link: 'https://www.linkedin.com/in/joao-pedro-6289bb216/',
        aria_label: 'Esse link levara até o meu linkedln'
      },
      {
        icon_name: 'Github',
        icon_image:
          '<svg class="cursor-pointer fill-white hover:fill-violet-400" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>',
        icon_link: 'https://github.com/RJpedro',
        aria_label: 'Esse link levara até o meu github'
      }
    ]

    const components_render: HTMLElement | null = document.querySelector('.icons')

    icons.forEach(
      (icon: { icon_image: string; icon_name: string; icon_link: string; aria_label: string }) => {
        const icon_area: HTMLAnchorElement = document.createElement('a')
        icon_area.innerHTML = icon.icon_image
        icon_area.classList.add(icon.icon_name.toLowerCase())
        icon_area.href = icon.icon_link
        icon_area.target = '_blank'
        icon_area.setAttribute('aria-label', icon.aria_label)

        components_render?.appendChild(icon_area)
      }
    )
  },
  data() {
    return {
      half_name_first_part: '',
      half_name_second_part: ''
    }
  }
}
</script>

<template>
  <header class="bg-white/10 backdrop-blur-sm flex flex-row justify-around py-7 rounded-b-3xl">
    <h1 class="text-white uppercase text-2xl my-name font-bold">
      {{ half_name_first_part }}<span class="text-violet-400">{{ half_name_second_part }}.</span>
    </h1>
    <div class="icons flex flex-row gap-6"></div>
  </header>
</template>
