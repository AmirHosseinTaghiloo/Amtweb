<template>
  <div class="mx-auto max-w-6xl px-4">
    <!-- منو بار -->
    <div class="MenuBar mb-8">
      <MenuBar />
    </div>

    <!-- عنوان صفحه -->
    <header class="text-center mt-10 mb-10">
      <h1 class="text-5xl font-bold">بلاگ ما</h1>
      <p class="mt-3 text-gray-600 dark:text-gray-300">آخرین مطالب و آموزش‌ها را دنبال کنید</p>
    </header>

    <!-- لیست پست‌ها -->
    <section class="space-y-12">
      <article
        v-for="(post, index) in posts"
        :key="post.id"
        class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <h2 class="text-3xl font-semibold mb-2 dark:text-white">{{ post.title }}</h2>
        <p class="text-gray-700 dark:text-gray-300 mb-4">{{ post.excerpt }}</p>
        <img
          v-if="post.image"
          :src="post.image"
          alt="post image"
          class="w-full max-h-64 object-cover rounded-md mb-4"
        />
        <div class="text-sm text-gray-500 dark:text-gray-400 mb-4">
          نوشته شده توسط <span class="font-semibold">{{ post.author }}</span> - {{ post.date }}
        </div>
        <UButton @click="openPost(post.id)">ادامه مطلب</UButton>
      </article>
    </section>



    <!-- ارتباط با ما -->
    <section class="mt-20 bg-[#00dc82] p-14 rounded-lg shadow-md text-white text-center">
      <h2 class="text-3xl font-bold mb-4">ارتباط با ما</h2>
      <p class="mb-6">اگر سوالی دارید یا نیاز به کمک دارید، با ما تماس بگیرید.</p>
      <UButton class="px-6 py-2 bg-white text-[#00dc82] rounded-full" @click="contactUs">
        تماس با ما
      </UButton>
    </section>

    <!-- فوتر -->
    <FooterBar class="mt-20" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 1,
    title: 'چگونه یک وبسایت مدرن بسازیم؟',
    excerpt:
      'در این مقاله به بررسی مراحل طراحی و پیاده‌سازی یک وبسایت مدرن و کاربرپسند می‌پردازیم...',
    image: 'https://picsum.photos/seed/web/800/400',
    author: 'علی',
    date: '2025-08-22',
  },
  {
    id: 2,
    title: 'آموزش Vue 3 از صفر تا صد',
    excerpt: 'اگر تازه با Vue آشنا شده‌اید، این مقاله به شما کمک می‌کند تا مبانی آن را یاد بگیرید...',
    image: 'https://picsum.photos/seed/vue/800/400',
    author: 'زهرا',
    date: '2025-08-20',
  },
  {
    id: 3,
    title: 'بهترین روش‌های سئو در 2025',
    excerpt: 'سئو یکی از مهم‌ترین عوامل موفقیت سایت‌ها است. در این مقاله با روش‌های جدید آن آشنا شوید...',
    image: 'https://picsum.photos/seed/seo/800/400',
    author: 'حسین',
    date: '2025-08-18',
  },
])




function openPost(id) {

}

function contactUs() {

}
</script>

<style>
/* انیمیشن‌ها */
@keyframes slide-down {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.MenuBar {
  animation: slide-down 1.5s ease-in-out;
}

/* دکمه‌ها */
button {
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* حالت دارک مود */
body.dark-mode {
  background-color: #121212;
  color: #ddd;
}

/* متون */
.dark-mode h1,
.dark-mode h2,
.dark-mode h3,
.dark-mode p {
  color: #ddd;
}

/* استایل کامنت‌ها برای افراد خاص */
.border-hossein {
  border-bottom: 4px solid black !important;
}

.border-ali {
  border-bottom: 4px solid black !important;
}

.border-zahra {
  border-bottom: 4px solid black !important;
}
</style>
