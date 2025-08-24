<template>
  <nav class="p-4" dir="rtl">
    <div class="max-w-6xl h-[90px] container mx-auto flex items-center justify-between border-2 border-current rounded-full p-6">
      <div class="flex items-center space-x-4 space-x-reverse">
        <Icon name="i-logos-nuxt-icon" class="w-8 h-8" />
        <span class="mr-3 font-bold text-xl">Nuxt</span>
      </div>

      <div class="hidden md:flex space-x-4 space-x-reverse items-center">
        <UButton variant="link" class="relative overflow-hidden group hover:bg-[#00dc82] hover:text-white transition-all duration-300 rounded-full px-4 py-2" to="/">
          <span class="relative z-10">خانه</span>
        </UButton>
        <UButton variant="link" class="relative overflow-hidden group hover:bg-[#00dc82] hover:text-white transition-all duration-300 rounded-full px-4 py-2" to="/blog">
          <span class="relative z-10">بلاگ</span>
        </UButton>
        <UButton variant="link" class="relative overflow-hidden group hover:bg-[#00dc82] hover:text-white transition-all duration-300 rounded-full px-4 py-2 ml-[300px]" to="connect_us">
          <span class="relative z-10">تماس با ما</span>
        </UButton>
        <USwitch size="xl" class="ml-2.5" v-model="isDarkMode" />
        <UButton icon="i-heroicons-user" class="rounded-full p-2  border border-current transition-all duration-300 glass-button user-icon" @click="toggleSignupPopup" />
      </div>

      <div class="md:hidden">
        <UButton icon="i-heroicons-bars-3" variant="ghost" @click="toggleMenu" />
      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden mt-2" :class="{'bg-white': !isDarkMode, 'bg-gray-900': isDarkMode}" dir="rtl">
      <div class="flex flex-col space-y-2">
        <UButton variant="link" class="hover:text-[#00dc82] transition-colors duration-300">خانه</UButton>
        <UButton variant="link" class="hover:text-[#00dc82] transition-colors duration-300">بلاگ</UButton>
        <UButton variant="link" class="hover:text-[#00dc82] transition-colors duration-300">تماس با ما</UButton>
        <USwitch v-model="isDarkMode" />
        <UButton icon="i-heroicons-user" class="rounded-full p-2 border border-current transition-all duration-300 glass-button user-icon" @click="toggleSignupPopup" />
      </div>
    </div>

    <div v-if="isSignupPopupOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class=" bg-gray-800 rounded-lg p-8 w-96 shadow-lg relative">
        <button @click="toggleSignupPopup" class="absolute top-2 left-2">
          <Icon name="i-heroicons-x-mark-20-solid" class="w-6 h-6" />
        </button>
        <h2 class="text-xl text-amber-50 font-bold mb-4">{{ isLoginMode ? 'ورود' : 'ثبت نام' }}</h2>
        <UForm :state="state" @submit="onSubmit">
          <UFormGroup v-if="!isLoginMode" label="نام کاربری" name="username">
            <UInput class="w-full mt-2" size="xl" v-model="state.username" placeholder="نام کاربری خود را وارد کنید" />
          </UFormGroup>
          <UFormGroup label="ایمیل" name="email">
            <UInput class="w-full mt-2" size="xl" v-model="state.email" type="email" placeholder="ایمیل خود را وارد کنید" />
          </UFormGroup>
          <UFormGroup label="رمز عبور" name="password">
            <UInput class="w-full mt-2" size="xl" v-model="state.password" type="password" placeholder="رمز عبور خود را وارد کنید" />
          </UFormGroup>
          <UButton  size="xl" type="submit" class=" mt-4 w-full justify-center bg-[#00dc82] text-white rounded-full py-2 hover:bg-[#00b26b] transition-colors duration-300">{{ isLoginMode ? 'ورود' : 'ثبت نام' }}</UButton>
        </UForm>
        <UButton variant="ghost" class=" mt-4 w-full justify-center text-[#00dc82] rounded-full py-2 hover:bg-[#00b26b] transition-colors duration-300" @click="toggleMode">
          {{ isLoginMode ? 'ثبت نام' : 'ورود' }}
        </UButton>
      </div>
      <div @click="toggleSignupPopup" class=" inset-0 bg-black bg-opacity-50 z-[-1]"></div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useColorMode } from '#imports'

const isMenuOpen = ref(false)
const isSignupPopupOpen = ref(false)  // متغیر برای مدیریت باز و بسته بودن پاپ‌آپ ثبت نام
const state = ref({
  username: '',
  email: '',
  password: '',
});
const isLoginMode = ref(false);  // متغیر برای مدیریت حالت ورود و ثبت نام

const colorMode = useColorMode()

const isDarkMode = computed({
  get: () => colorMode.value === 'dark',
  set: (val: any) => {
    colorMode.preference = val ? 'dark' : 'light';
  }
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleSignupPopup = () => {
  isSignupPopupOpen.value = !isSignupPopupOpen.value  // تغییر وضعیت پاپ‌آپ ثبت نام
}

const toggleMode = () => {
  isLoginMode.value = !isLoginMode.value;  // تغییر وضعیت حالت ورود و ثبت نام
}

const onSubmit = (values: any) => {
  console.log('Form values:', values);
  // Add your signup logic here
  toggleSignupPopup(); // Close the popup after submission
  //reset state
  state.value = {
    username: '',
    email: '',
    password: '',
  };
};

onMounted(() => {
  colorMode.preference = !isDarkMode.value ? 'dark' : 'light';
})
</script>

<style scoped>
.glass-button {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.1); /* شفافیت پس‌زمینه */
  border-radius: 9999px; /* حاشیه گرد */
  border: 2px solid rgba(255, 255, 255, 0.2); /* حاشیه ضخیم‌تر با شفافیت */
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
}

.user-icon {
  color: rgba(0, 0, 0, 1); /* مشکی برای لایت مود */
}

.user-icon:hover {
  background: rgba(255, 255, 255, 0.3);
}

:root.dark .user-icon {
  color: rgba(255, 255, 255, 1); /* سفید برای دارک مود */
  border: 2px solid rgba(255, 255, 255, 0.2); /* حاشیه ضخیم‌تر سفید در دارک مود */
}

:root:not(.dark) .user-icon {
  border: 2px solid rgba(0, 0, 0, 1); /* حاشیه ضخیم‌تر مشکی در لایت مود */
}

:root:not(.dark) .user-icon:hover {
  background-color: rgba(0, 0, 0, 1); /* پس‌زمینه مشکی هنگام هاور در لایت مود */
  color: rgba(255, 255, 255, 1); /* رنگ آیکون سفید هنگام هاور در لایت مود */
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5); /* سایه داخلی سفید هنگام هاور در لایت مود */
}

:root.dark .user-icon:hover {
  background-color: rgba(255, 255, 255, 0.2); /* پس‌زمینه سفید کم‌رنگ هنگام هاور در دارک مود */
  color: rgba(0, 0, 0, 1); /* رنگ آیکون مشکی هنگام هاور در دارک مود */
}
</style>
