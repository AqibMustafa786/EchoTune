<template>
  <section id="setup" class="setup-section">
    <div class="section-container">
      <div class="setup-header reveal">
        <h2 class="gradient-text">Ready in Seconds</h2>
        <p>A seamless onboarding experience designed to get you to your music faster.</p>
      </div>
      
      <div class="setup-grid">
        <div v-for="(step, index) in steps" :key="index" class="setup-card glass-card reveal">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-visual">
            <div class="phone-mockup setup-phone">
              <div class="phone-screen">
                <img :src="step.image" :alt="step.title" class="step-img" loading="lazy" />
              </div>
            </div>
          </div>
          <div class="step-content">
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import s1 from '../assets/app-screenshots/onboardingscreen1.jpg';
import s2 from '../assets/app-screenshots/onboardingscreen2.jpg';
import s3 from '../assets/app-screenshots/onboardingscreen3.jpg';

const steps = [
  {
    title: "Welcome to EchoTune",
    description: "Experience the most powerful offline player with a stunning glassmorphic UI.",
    image: s1
  },
  {
    title: "Instant Library Scan",
    description: "We automatically find and organize your music collection in seconds.",
    image: s2
  },
  {
    title: "Personalized Vibe",
    description: "Our AI analyzes your music to provide mood-based filters immediately.",
    image: s3
  }
];
</script>

<style scoped>
.setup-section {
  padding: 120px 0;
  background: radial-gradient(circle at bottom right, rgba(6, 182, 212, 0.05), transparent);
}

.setup-header {
  text-align: center;
  margin-bottom: 80px;
}

.setup-header h2 {
  font-size: 3.5rem;
  margin-bottom: 24px;
}

.setup-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.setup-card {
  padding: 40px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-number {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  background: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-family: 'Outfit', sans-serif;
  color: white;
}

.setup-phone {
  max-width: 200px;
  border-radius: 28px;
  padding: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.setup-phone::before {
  width: 60px;
  height: 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.setup-phone .phone-screen {
  border-radius: 20px;
}

.step-visual {
  width: 100%;
  margin-bottom: 32px;
}

.step-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.setup-card:hover .step-img {
  transform: scale(1.05);
}

.step-content h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: white;
}

.step-content p {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.5;
}

@media (max-width: 1100px) {
  .setup-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .setup-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
  .setup-header h2 {
    font-size: 2.5rem;
  }
}
</style>
