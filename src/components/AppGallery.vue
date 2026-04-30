<template>
  <section class="gallery-section">
    <div class="section-container">
      <div class="section-header">
        <h2 class="reveal">The <span class="gradient-text">Experience.</span></h2>
        <p class="reveal">Every pixel crafted for the perfect listening experience. Designed with love for audiophiles.</p>
      </div>
    </div>
    
    <div class="wall-container reveal">
      <div class="scroll-row row-1">
        <div class="scroll-track">
          <div v-for="mock in mockups" :key="mock" class="gallery-item reveal">
            <div class="phone-mockup">
              <div class="phone-screen">
                <img :src="mock" alt="EchoTune Premium Interface" loading="lazy" />
              </div>
            </div>
          </div>
          <!-- Duplicate for seamless scroll -->
          <div v-for="mock in mockups" :key="mock + '-dup'" class="gallery-item reveal">
            <div class="phone-mockup">
              <div class="phone-screen">
                <img :src="mock" alt="EchoTune Premium Interface" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import m1 from '../assets/app-screenshots/homescreen.jpeg';
import m2 from '../assets/app-screenshots/audioscreen.jpeg';
import m3 from '../assets/app-screenshots/galleryvideos.jpg';
import m4 from '../assets/app-screenshots/library.jpeg';
import m5 from '../assets/app-screenshots/playqueue.jpeg';
import m6 from '../assets/app-screenshots/setting.jpg';
import m7 from '../assets/app-screenshots/onboardingscreen1.jpg';
import m8 from '../assets/app-screenshots/videoplayer.jpeg';
import m9 from '../assets/app-screenshots/accents.jpeg';
import m10 from '../assets/app-screenshots/equalizer.jpeg';
import m11 from '../assets/app-screenshots/genres.jpg';
import m12 from '../assets/app-screenshots/home.jpg';
import m13 from '../assets/app-screenshots/onboardingscreen2.jpg';
import m14 from '../assets/app-screenshots/onboardingscreen3.jpg';
import m15 from '../assets/app-screenshots/theme.jpeg';

const mockups = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15];
</script>

<style scoped>
.gallery-section {
  padding: 120px 0;
  overflow: hidden;
  background: var(--bg-dark);
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.wall-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.scroll-row {
  display: flex;
  overflow: hidden;
  width: 100%;
}

.scroll-track {
  display: flex;
  gap: 40px;
  animation: scrollLeft 60s linear infinite;
  will-change: transform;
  padding: 20px 0;
}

.gallery-item {
  flex: 0 0 320px;
  padding: 10px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.2, 0, 0.2, 1);
}

.gallery-item:hover img {
  transform: scale(1.1);
}

@keyframes scrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-360px * 15)); }
}

@media (max-width: 768px) {
  .gallery-section {
    padding: 60px 0;
  }
  .section-header h2 {
    font-size: 2.5rem;
  }
  .gallery-item {
    flex: 0 0 240px;
  }
  .scroll-track {
    gap: 20px;
  }
  @keyframes scrollLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-260px * 15)); }
  }
}
</style>
