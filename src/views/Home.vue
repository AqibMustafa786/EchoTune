<template>
  <div class="home-page">
    <HeroSection />
    <SetupSection />
    <MoodSection />
    <FeatureGrid />
    <AppGallery />
    <VideoPlayerSection />
    <EqualizerSection />
    <FAQSection />
    
    <section id="download" class="download-section">
      <div class="section-container">
        <div class="download-card glass-card reveal">
          <h2 class="gradient-text">Ready to Tune In?</h2>
          <p>Join thousands of audiophiles who have upgraded their listening experience.</p>
          <div class="download-buttons">
            <a href="#" class="btn-primary">Download for Android</a>
            <a href="#" class="btn-secondary">View on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '../components/HeroSection.vue';
import SetupSection from '../components/SetupSection.vue';
import MoodSection from '../components/MoodSection.vue';
import FeatureGrid from '../components/FeatureGrid.vue';
import AppGallery from '../components/AppGallery.vue';
import VideoPlayerSection from '../components/VideoPlayerSection.vue';
import EqualizerSection from '../components/EqualizerSection.vue';
import FAQSection from '../components/FAQSection.vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let ctx = gsap.context(() => {
    // Optimized GSAP Revelations
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach((el) => {
      gsap.fromTo(el, 
        { 
          opacity: 0, 
          y: 20, // Reduced distance for smoother feel
          scale: 0.99
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6, // Faster duration
          ease: "expo.out", // Snappier ease
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Hero Performance Optimizations
    gsap.from(".hero-text > *", {
      opacity: 0,
      y: 15,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
      delay: 0.1
    });

    gsap.from(".hero-mockup", {
      opacity: 0,
      scale: 0.95,
      x: 30,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.3
    });
  });
});
</script>

<style scoped>
.home-page {
  width: 100%;
}

.download-section {
  padding: 100px 0 160px;
  text-align: center;
}

.download-card {
  padding: 100px 40px;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 48px;
  background: radial-gradient(circle at center, rgba(139, 92, 246, 0.15), transparent);
}

.download-card h2 {
  font-size: 4.5rem;
  margin-bottom: 24px;
}

.download-card p {
  font-size: 1.5rem;
  color: var(--text-muted);
  margin-bottom: 48px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.download-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

@media (max-width: 768px) {
  .download-section {
    padding: 60px 0 100px;
  }
  .download-card {
    padding: 60px 24px;
    border-radius: 32px;
  }
  .download-card h2 {
    font-size: 2.8rem;
  }
  .download-card p {
    font-size: 1.1rem;
    margin-bottom: 32px;
  }
  .download-buttons {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .download-buttons a {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .download-card h2 {
    font-size: 2.2rem;
  }
}
</style>

