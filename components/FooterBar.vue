<template>
  <footer class="footer max-w-6xl mx-auto">
    <div class="container mx-auto flex justify-between items-center p-4">
      <div class="footer-left">
        <p class="text-white">© 2025 شرکت AMT. تمامی حقوق محفوظ است.</p>
      </div>
      <div
        class="footer-right hidden md:flex space-x-4 space-x-reverse items-center"
      >
        <UButton variant="link" class="footer-link " to="/">
          <span class="relative z-10">خانه</span>
        </UButton>
        <UButton variant="link" class="footer-link mr-2.5" to="/blog">
          <span class="relative z-10 ">بلاگ</span>
        </UButton>
        <UButton variant="link" class="footer-link" to="/connect_us">
          <span class="relative z-10">تماس با ما</span>
        </UButton>
      </div>
    </div>
  </footer>
</template>

  <script setup>
import { ref } from "vue";
const isDarkMode = ref(false);
const toggleSignupPopup = () => {
  // Function to toggle the signup popup
};
</script>

  <style scoped>
.footer {
  background-color: #333;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding: 20px;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.3);
}
.footer-left {
  flex: 1;
}
.footer-right {
  display: flex;
  justify-content: flex-end;
}
.footer-link {
  position: relative;
  overflow: hidden;
  border-radius: 50px;
  padding: 8px 16px;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.footer-link:hover {
  background-color: #00dc82;
  color: white;
}
.user-icon {
  border-radius: 50%;
  padding: 8px;
  border: 1px solid currentColor;
  transition: all 0.3s ease;
}
</style>
