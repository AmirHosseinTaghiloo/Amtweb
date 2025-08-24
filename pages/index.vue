<template>
  <div class="mx-auto max-w-6xl">
    <!-- سایر بخش‌های صفحه -->
    <div class="MenuBar">
      <MenuBar />
    </div>

    <div class="">
      <div class="w-full flex flex-col items-center mt-3.5">
        <div class="flex items-center w-[95%]">
          <div class="w-[50%] animate-slide-right flex justify-center">
            <img
              class="w-full max-w-[770px]"
              src="../img/1741171659847.png"
              alt="#"
            />
          </div>
          <div
            class="w-[50%] text-right animate-slide-left flex flex-col justify-center items-end"
          >
            <div><h2 class="text-4xl">دنبال یه سایت خوب میگردی!!!</h2></div>
            <div class="mt-5">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای
              </p>
            </div>
            <div class="mt-5">
              <UButton class="p-4 pl-[60px] pr-[60px]">بزن بریم</UButton>
            </div>
          </div>
        </div>

        <div class="flex items-center w-[95%] mt-10  ml-9">
          <div
            class="w-[50%]  text-left animate-slide-right flex flex-col justify-center items-start"
          >
            <div><h2 class="text-4xl">دنبال یه سایت خوب میگردی!!!</h2></div>
            <div class="mt-5">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای
              </p>
            </div>
            <div class="mt-5">
              <UButton class="p-4 pl-[60px] pr-[60px]">بزن بریم</UButton>
            </div>
          </div>
          <div class="w-[50%] animate-slide-left flex justify-center">
            <img
              class="w-full max-w-[770px] ml-7"
              src="../img/vecteezy_man-working-with-computer-with-app-in-isometric-illustration__prev_ui.png"
              alt="#"
            />
          </div>
        </div>

        <div class="flex items-center w-[95%] mt-10">
          <div class="w-[50%] animate-slide-right flex justify-center">
            <img
              class="w-full max-w-[770px]"
              src="../img/vecteezy_isometric-flat-illustration-concept-courses-and-online_4579270_prev_ui.png"
              alt="#"
            />
          </div>
          <div
            class="w-[50%] text-right animate-slide-left flex flex-col justify-center items-end"
          >
            <div><h2 class="text-4xl">دنبال یه سایت خوب میگردی!!!</h2></div>
            <div class="mt-5">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای
              </p>
            </div>
            <div class="mt-5">
              <UButton class="p-4 pl-[60px] pr-[60px]">بزن بریم</UButton>
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-8 justify-between mt-10">
          <div
            class="w-[45%] ml-20 text-right animate-slide-left flex flex-col justify-between items-end"
          >
            <div class="mt-5 mr-3 w-full">
              <h2 class="text-4xl">دنبال یه سایت خوب میگردی!!!</h2>
            </div>
            <div class="mt-5 mr-3 w-full">
              <UAccordion :items="items2" />
            </div>
          </div>
          <div class="w-[45%] ml-24 animate-slide-left flex justify-center p-20">
            <img
              class="max-w-[330px]"
              src="../img/vue-logo-removebg-preview.png"
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="accordion animate-slide-up mt-3.5">
      <UCarousel
        v-slot="{ item }"
        loop
        arrows
        dots
        :autoplay="{ delay: 4000 }"
        :items="items"
        class="w-full mx-auto max-w-5xl h-[400px]"
      >
        <img :src="item" class="h-full w-full object-cover rounded-lg" />
      </UCarousel>
    </div>

    <!-- بخش نظرات -->
    <div class="mt-[190px]" id="comments-section">
      <h2 class="text-3xl font-bold text-center mb-6 mt-[130px]">
        نظرات کاربران
      </h2>
      <div class="space-y-4">
        <UCard
          v-for="(comment, index) in comments"
          :key="index"
          :class="[
            'p-2 bg-gray-100 rounded-lg shadow-md',
            isDarkMode ? 'dark-card' : '',
            comment.name === 'حسین' ? 'border-hossein' : '',
            comment.name === 'علی' ? 'border-ali' : '',
            comment.name === 'زهرا' ? 'border-zahra' : '',
          ]"
        >
          <UAvatar size="3xl" src="https://github.com/benjamincanac.png" />
          <h3 class="mt-3 ml-3 font-bold" :class="isDarkMode ? 'text-white' : 'text-black'">{{ comment.name }}</h3>
          <p class="mt-3 ml-3" :class="isDarkMode ? 'text-gray-300' : 'text-black'">{{ comment.text }}</p>
        </UCard>
      </div>
    </div>

    <!-- باکس ارتباط با ما -->
    <div class="mt-10 bg-[#00dc82] p-14 rounded-lg shadow-md text-white">
      <h2 class="text-3xl font-bold text-center mb-4">ارتباط با ما</h2>
      <p class="text-center mb-4">
        اگر سوالی دارید یا نیاز به کمک دارید، با ما تماس بگیرید.
      </p>
      <div class="flex justify-center">
        <UButton class="px-6 py-2 bg-white text-[#00dc82] rounded-full">
          تماس با ما
        </UButton>
      </div>
    </div>

    <div>
      <h1>{{ message }}</h1>
    </div>

    <FooterBar class="mt-20" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const items2 = ref([
  {
    label: "محبوبیت",
    icon: "i-lucide-smile",
    content: "شخصی‌سازی اجزاء از طریق کلاس‌ها و تنظیمات مختلف",
  },
  {
    label: "طرح بندی",
    icon: "i-lucide-swatch-book",
    content: "انعطاف‌پذیری فوق‌العاده در تنظیم چینش اجزاء",
  },
  {
    label: "اجزاء",
    icon: "i-lucide-box",
    content: "کتابخانه‌ای با اجزاء متنوع و مدرن برای طراحی بهتر",
  },
]);

const items = [
  "https://picsum.photos/1640/640?random=1",
  "https://picsum.photos/1640/640?random=2",
  "https://picsum.photos/1640/640?random=3",
  "https://picsum.photos/1640/640?random=4",
  "https://picsum.photos/1640/640?random=5",
];

const comments = ref([
  {
    name: "علی",
    text: "این سایت عالی است فقط ایرادات زیادی از جمله باگ های ریز میان عکس ها دکمه ها ایکون ها و.... هست لطفا رسیدگی شود !",
  },
  { name: "زهرا", text: "واقعا کاربردی و زیبا هر چی از طراحی فرانت بگم بازم کمه ." },
  {
    name: "حسین",
    text: "خیلی جالب و مفید دوست دارم ببینم کجا میشه دوره رو تهیه کرد تا با اون منم بتونم کد نویسی رو شروع کنم .",
  },
]);

const message = ref("");

// حالت دارک مود را از روی کلاس body می‌خوانیم
const isDarkMode = ref(false);

onMounted(() => {
  isDarkMode.value = document.body.classList.contains("dark-mode");

  // Intersection Observer برای انیمیشن اسکرول
  const accordion = document.querySelector(".accordion");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-slide-up");
      } else {
        entry.target.classList.remove("animate-slide-up");
      }
    });
  });
  if (accordion) {
    observer.observe(accordion);
  }
});
</script>

<style>
/* انیمیشن‌های مختلف */
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

@keyframes slide-right {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-left {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* استایل‌های مربوط به انیمیشن */
.MenuBar {
  animation: slide-down 1.5s ease-in-out;
}

img {
  animation: slide-right 1.5s ease-in-out;
}

.animate-slide-left {
  animation: slide-left 1.5s ease-in-out;
}

.animate-slide-right {
  animation: slide-right 1.5s ease-in-out;
}

.animate-slide-up {
  animation: slide-up 1.5s ease-in-out;
}

/* استایل‌های مربوط به بخش نظرات */
#comments-section {
  margin-top: 20px;
}

#comments-section h2 {
  color: #333333;
  font-size: 24px;
  text-align: center;
  margin-bottom: 15px;
}

/* کارت‌های کامنت‌ها */
#comments-section .UCard {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* حالت دارک مود برای کارت‌های کامنت */
.dark-mode #comments-section .UCard.dark-card {
  background-color: #1e1e1e !important;
  color: #ddd !important;
}

/* خطوط زیر کامنت‌ها برای افراد مشخص */
.dark-mode #comments-section .border-hossein {
  border-bottom: 2px solid black;
  padding-bottom: 8px;
}

.dark-mode #comments-section .border-ali {
  border-bottom: 2px solid black;
  padding-bottom: 8px;
}

.dark-mode #comments-section .border-zahra {
  border-bottom: 2px solid black;
  padding-bottom: 8px;
}

/* متن کامنت‌ها در حالت دارک مود */
.dark-mode #comments-section h3,
.dark-mode #comments-section p {
  color: #ddd;
}

/* متن نام‌ها و کامنت‌ها در حالت عادی */
#comments-section h3 {
  color: black;
}

#comments-section p {
  color: black;
}
</style>
