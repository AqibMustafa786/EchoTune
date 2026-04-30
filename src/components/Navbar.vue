<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container glass-card">
      <router-link to="/" class="logo">
        <img src="../assets/Echotune_icon_launcher.jpg" alt="EchoTune Logo" class="logo-img" />
        <span class="logo-text">Echo<span class="pink-text">Tune</span></span>
      </router-link>
      
      <div class="nav-links">
        <a href="/#setup">Setup</a>
        <a href="/#features">Features</a>
        <a href="/#moods">Moods</a>
        <a href="/#swipe">Swipe</a>
        <a href="/#equalizer">EQ</a>
        <router-link to="/technical">Technical</router-link>
        <a href="/#download" class="nav-cta btn-primary">Download</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 32px 0;
  transition: all 0.5s cubic-bezier(0.2, 0, 0.2, 1);
}

.navbar.scrolled {
  padding: 16px 0;
}

.nav-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 8px 12px 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(15, 15, 15, 0.4);
  backdrop-filter: blur(20px);
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 1.4rem;
  color: white;
  text-decoration: none;
}

.logo-img {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  object-fit: cover;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-links a {
  padding: 8px 20px;
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 100px;
  transition: all 0.3s ease;
}

.nav-links a:hover:not(.nav-cta) {
  color: white;
  background: rgba(255, 255, 255, 0.05);
}

.nav-cta {
  background: linear-gradient(135deg, var(--primary), #FF4DAA) !important;
  color: white !important;
  padding: 10px 24px !important;
  font-size: 0.9rem !important;
  font-weight: 700 !important;
  border-radius: 100px !important;
  box-shadow: 0 4px 15px rgba(255, 0, 127, 0.3) !important;
  transition: all 0.3s ease !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 0, 127, 0.5) !important;
  filter: brightness(1.1);
}

@media (max-width: 768px) {
  .navbar {
    padding: 16px 0;
  }
  .nav-container {
    max-width: 95%;
    padding: 6px 8px 6px 16px;
  }
  .logo {
    font-size: 1.2rem;
    gap: 8px;
  }
  .logo-img {
    width: 28px;
    height: 28px;
  }
  .nav-links a:not(.nav-cta) {
    display: none;
  }
  .nav-cta {
    padding: 8px 18px !important;
    font-size: 0.8rem !important;
  }
}
</style>
