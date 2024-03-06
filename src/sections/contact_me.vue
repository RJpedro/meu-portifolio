<script setup lang="ts">
import MessageCard from '@/components/message.vue'
</script>

<script lang="ts">
// @ts-ignore
import data from '@/firebase/init'
import { query, where, getDocs } from 'firebase/firestore'

const db = data.db
const collection = data.collection
const addDoc = data.addDoc

export default {
  name: 'contact_me',
  data: function () {
    return {
      user_email: '',
      subject: '',
      message: '',
      return_message: '',
      return_message_color: ''
    }
  },
  methods: {
    async send_message() {
      await this.verify_data([this.user_email, this.subject, this.message])
      await this.verify_message_has_sended_in_collection()

      const collection_reference = collection(db, 'mensagens')
      const date = this.get_date_now()

      const data = {
        user_email: this.user_email.trim(),
        subject: this.subject.trim(),
        message: this.message.trim(),
        send_date_full: date,
        send_date: date.split(' ')[0]
      }

      const result = await addDoc(collection_reference, data)

      if (result.id !== null) {
        this.return_message = 'Mensagem enviada com sucesso!'
        this.return_message_color = 'text-green-700'
        this.to_show_popup()
        this.showing_or_hidden_buttom(false)
        this.reset_data()
        return
      }

      this.return_message = 'Erro ao enviar mensagem!'
      this.return_message_color = 'text-red-700'
      this.to_show_popup()
    },
    verify_data(data: Array<string>) {
      const button_submit: HTMLButtonElement | null = document.querySelector('[type="submit"]')
      button_submit?.setAttribute('disabled', 'true')
      button_submit?.classList.add('cursor-not-allowed')

      data.forEach((input) => {
        input = input.trim()
        if (input === '' || input === undefined || input === null) {
          this.return_message = 'Preencha todos os campos!'
          this.return_message_color = 'text-red-700'
          this.to_show_popup()
          this.showing_or_hidden_buttom(false)
          throw new Error('Preencha todos os campos!')
        }
      })

      return true
    },
    get_date_now() {
      const date: Date = new Date()
      const day: number = date.getDate()
      const month: number = date.getMonth()
      const year: number = date.getFullYear()
      const hour: number = date.getHours()
      const minutes: number = date.getMinutes()
      const seconds: number = date.getSeconds()

      return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`
    },
    reformation_date(date: string) {
      const reformed_date = date.split(' ')[0].split('/')
      const reformed_date_hours = date.split(' ')[1]

      return new Date(
        `${reformed_date[2]}-${reformed_date[1]}-${reformed_date[0]} ${reformed_date_hours}`
      )
    },
    to_show_popup() {
      const message_card: HTMLDivElement | null = document.querySelector('.v-message-card')
      message_card?.classList.remove('hidden')
      message_card?.classList.add('flex')

      setTimeout(() => {
        message_card?.classList.add('hidden')
        message_card?.classList.remove('flex')
      }, 4000)
    },
    showing_or_hidden_buttom(hidden: boolean) {
      if (hidden) {
        const button_submit: HTMLButtonElement | null = document.querySelector('[type="submit"]')
        button_submit?.setAttribute('disabled', 'true')
        button_submit?.classList.add('cursor-not-allowed')

        return
      }

      setTimeout(() => {
        const button_submit: HTMLButtonElement | null = document.querySelector('[type="submit"]')
        button_submit?.removeAttribute('disabled')
        button_submit?.classList.remove('cursor-not-allowed')
      }, 2000)
    },
    async verify_message_has_sended_in_collection() {
      const collection_message = collection(db, 'mensagens')
      const query_to_get_messages = query(
        collection_message,
        where('user_email', '==', this.user_email.trim()),
        where('send_date', '==', this.get_date_now().split(' ')[0])
      )
      const query_snapshot_docs = await getDocs(query_to_get_messages)

      if (query_snapshot_docs.docs.length > 2) {
        this.return_message = 'Você atingiu seu limite de 3 envios de mensagens por dia!'
        this.return_message_color = 'text-red-700'
        this.to_show_popup()
        this.showing_or_hidden_buttom(false)
        throw new Error('Você atingiu seu limite de 3 envios de mensagens por dia!')
      }

      return
    },
    reset_data(){
      this.user_email = ''
      this.subject = ''
      this.message = ''
    }
  }
}
</script>

<template>
  <section
    class="w-full h-auto lg:h-screen bg-violet-600 pb-28 lg:pb-0 overflow-hidden"
    id="contact-me-section"
  >
    <MessageCard
      :card_message_name="'v-message-card'"
      :message_color="return_message_color"
      :message="return_message"
    />
    <div class="h-[80%] w-full flex flex-col items-center">
      <div class="flex flex-col gap-2 items-center h-[10%] w-full my-10 lg:my-0">
        <h1 class="text-3xl lg:text-5xl font-bold text-center text-white uppercase">Contate-me</h1>
        <div class="w-[20%] lg:w-[5%] border-b-4 border-b-white"></div>
      </div>
      <div class="w-full flex flex-col justify-start items-center my-10">
        <div
          class="flex flex-col justify-center items-center gap-4 w-[90%] md:w-[40%] lg:w-[40%] xl:w-[25%]"
        >
          <input
            type="email"
            class="rounded-sm w-full p-2 outline-none focus:border focus:border-white"
            name="Email"
            v-model="user_email"
            placeholder="Seu e-mail"
            maxlength="100"
          />
          <input
            type="text"
            class="rounded-sm w-full p-2 outline-none focus:border focus:border-white"
            name="Assunto"
            v-model="subject"
            placeholder="Assunto"
            maxlength="150"
          />
          <textarea
            cols="30"
            rows="6"
            class="rounded-sm w-full p-2 outline-none focus:border focus:border-white"
            v-model="message"
            placeholder="Mensagem"
            maxlength="2000"
          ></textarea>
          <button
            type="submit"
            class="rounded-sm w-[35%] p-2 outline-none focus:border focus:border-white bg-[#3c00a4] text-white text-lg uppercase font-medium hover:brightness-125"
            @click="send_message()"
          >
            Enviar
          </button>
        </div>
      </div>
      <div class="flex flex-col gap-2 justify-center items-center w-full h-[15%]">
        <a aria-label="Whatsapp Contact Button" class="text-lg lg:text-xl font-bold text-center text-white flex gap-2" href="https://api.whatsapp.com/send?phone=5512992112438" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            viewBox="0 0 256 256"
          >
            <path
              d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"
            ></path>
          </svg>
          +55 12 99211-2438
        </a>
      </div>
    </div>
  </section>
</template>
