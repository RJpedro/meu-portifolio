<template>
  <aside
    class="bg-[#1A1A1A] rounded-t-3xl lg:bg-white/10 lg:backdrop-blur-sm w-full h-20 lg:w-20 lg:h-3/5 fixed bottom-0 lg:top-[20%] lg:right-[15px] flex justify-around items-center lg:flex-col lg:rounded-[48px]"
  >
    <button @click="scroll('home-section')" aria-label="Home Section Button">
      <svg
        class="cursor-pointer fill-white hover:fill-violet-400"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <path
          d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"
        ></path>
      </svg>
    </button>
    <button @click="scroll('about-me-section')" aria-label="About-Me Section Button">
      <svg
        class="cursor-pointer fill-white hover:fill-violet-400"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <path
          d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
        ></path>
      </svg>
    </button>
    <button @click="scroll('my-projects-section')" aria-label="My Projects Section Button">
      <svg
        class="cursor-pointer fill-white hover:fill-violet-400"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <path
          d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"
        ></path>
      </svg>
    </button>
    <button @click="scroll('contact-me-section')" aria-label="Contact-Me Section Button">
      <svg
        class="cursor-pointer fill-white hover:fill-violet-400"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <path
          d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"
        ></path>
      </svg>
    </button>
  </aside>
</template>

<script lang="ts">
export default {
  name: 'my_sidebar',
  methods: {
    scroll(reference_name: string) {
      console.log(reference_name)
      const reference_element = document.getElementById(reference_name)
      reference_element?.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
