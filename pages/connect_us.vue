<template>
      <!-- منو بار -->
    <div class="MenuBar mb-8">
      <MenuBar />
    </div>
  <div class="max-w-6xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md mt-20 flex flex-col md:flex-row items-center md:items-start gap-12">

    <!-- بخش تصویر سمت چپ -->
    <div class="w-full md:w-1/2 flex justify-center">
      <img
        src="../img/flat-design-concept-sales-social-media-digital-marketing_18660-488-removebg-preview.png"
        alt="Contact Us"

      />
    </div>

    <!-- بخش فرم سمت راست -->
    <div class="w-full md:w-1/2">
      <h1 class="text-4xl font-bold mb-6 text-center md:text-right dark:text-white">
        تماس با ما
      </h1>
      <p class="mb-8 text-center md:text-right text-gray-700 dark:text-gray-300">
        لطفاً فرم زیر را پر کنید و ما در اسرع وقت با شما تماس خواهیم گرفت.
      </p>

      <form @submit.prevent="handleSubmit" novalidate class="space-y-6 text-right">
        <div>
          <label for="name" class="block mb-2 font-semibold dark:text-gray-200">نام کامل</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="نام خود را وارد کنید"
            class="w-full p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-right"
            :class="{ 'border-red-500': errors.name }"
          />
          <p v-if="errors.name" class="text-red-600 mt-1 text-sm">{{ errors.name }}</p>
        </div>

        <div>
          <label for="email" class="block mb-2 font-semibold dark:text-gray-200">ایمیل</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="example@mail.com"
            class="w-full p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-right"
            :class="{ 'border-red-500': errors.email }"
          />
          <p v-if="errors.email" class="text-red-600 mt-1 text-sm">{{ errors.email }}</p>
        </div>

        <div>
          <label for="subject" class="block mb-2 font-semibold dark:text-gray-200">موضوع</label>
          <input
            id="subject"
            v-model="form.subject"
            type="text"
            placeholder="موضوع پیام"
            class="w-full p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-right"
            :class="{ 'border-red-500': errors.subject }"
          />
          <p v-if="errors.subject" class="text-red-600 mt-1 text-sm">{{ errors.subject }}</p>
        </div>

        <div>
          <label for="message" class="block mb-2 font-semibold dark:text-gray-200">پیام</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            placeholder="پیام خود را وارد کنید"
            class="w-full p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-right"
            :class="{ 'border-red-500': errors.message }"
          ></textarea>
          <p v-if="errors.message" class="text-red-600 mt-1 text-sm">{{ errors.message }}</p>
        </div>

        <div class="text-center md:text-right">
          <UButton type="submit" class="px-8 py-3 bg-[#00dc82] text-white rounded-full hover:bg-[#00c66d] transition">
            ارسال پیام
          </UButton>
        </div>
      </form>

      <div v-if="successMessage" class="mt-6 p-4 bg-green-100 text-green-800 rounded text-center font-semibold">
        {{ successMessage }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: null,
  email: null,
  subject: null,
  message: null,
})

const successMessage = ref('')

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validateForm() {
  errors.name = !form.name ? 'لطفا نام خود را وارد کنید' : null
  errors.email = !form.email ? 'لطفا ایمیل خود را وارد کنید' : !validateEmail(form.email) ? 'ایمیل نامعتبر است' : null
  errors.subject = !form.subject ? 'لطفا موضوع را وارد کنید' : null
  errors.message = !form.message ? 'لطفا پیام خود را وارد کنید' : null

  return !errors.name && !errors.email && !errors.subject && !errors.message
}

function handleSubmit() {
  if (!validateForm()) return

  successMessage.value = 'پیام شما با موفقیت ارسال شد! ممنون از تماس شما.'

  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>

<style scoped>
/* برای rtl بهتر، فرم را راست چین کردیم */
/* می‌توان استایل های اضافی اضافه کرد */
</style>
