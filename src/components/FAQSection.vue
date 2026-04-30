<template>
  <section id="faq" class="faq-section">
    <div class="section-container">
      <div class="faq-header reveal">
        <h2 class="gradient-text">Frequently Asked Questions</h2>
        <p>Everything you need to know about the world's most powerful offline player.</p>
      </div>
      
      <div class="faq-grid reveal">
        <div v-for="(item, index) in faqs" :key="index" 
             class="faq-item glass-card" 
             :class="{ active: activeIndex === index }"
             @click="activeIndex = activeIndex === index ? -1 : index">
          <div class="faq-question">
            <h3>{{ item.question }}</h3>
            <span class="faq-icon">+</span>
          </div>
          <div class="faq-answer">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(0);

const faqs = [
  {
    question: "Is EchoTune really an offline-only player?",
    answer: "Yes! EchoTune is designed primarily for playing your local media collection. We don't stream music from the cloud, which means you save data and enjoy your high-fidelity files exactly as they were meant to be heard."
  },
  {
    question: "How does the AI Mood filter work?",
    answer: "Our advanced algorithm scans your local library's metadata and acoustic features to categorize songs into moods like Party, Chill, Sad, and Workout. It helps you find the right vibe without manually creating playlists."
  },
  {
    question: "What video formats does the 'Swipe' player support?",
    answer: "The vertical swipe player supports all major video formats including MP4, MKV, and MOV. It's optimized for high-resolution gallery videos with smooth, lag-free transitions."
  },
  {
    question: "Is my data private?",
    answer: "Absolutely. EchoTune does not collect personal information like names or emails. Your music remains on your device, and we only access storage to play your files. We use anonymous crash reporting to improve performance."
  },
  {
    question: "Does it support high-fidelity audio formats?",
    answer: "Yes, EchoTune supports FLAC, WAV, and high-bitrate MP3s, ensuring audiophile-level quality for your local collection."
  }
];
</script>

<style scoped>
.faq-section {
  padding: 120px 0;
}

.faq-header {
  text-align: center;
  margin-bottom: 80px;
}

.faq-header h2 {
  font-size: 3.5rem;
  margin-bottom: 24px;
}

.faq-header p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.faq-grid {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.faq-item {
  cursor: pointer;
  padding: 24px 32px;
  transition: all 0.4s cubic-bezier(0.2, 0, 0.2, 1);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0;
  color: white;
}

.faq-icon {
  font-size: 1.5rem;
  font-weight: 300;
  transition: transform 0.4s ease;
  color: var(--primary-light);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.2, 0, 0.2, 1);
  opacity: 0;
}

.faq-item.active {
  background: var(--glass-heavy);
  border-color: var(--primary-glow);
}

.faq-item.active .faq-icon {
  transform: rotate(45deg);
}

.faq-item.active .faq-answer {
  max-height: 200px;
  padding-top: 20px;
  opacity: 1;
}

.faq-answer p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .faq-section {
    padding: 80px 0;
  }
  .faq-header {
    margin-bottom: 40px;
  }
  .faq-header h2 {
    font-size: 2.2rem;
  }
  .faq-item {
    padding: 20px;
  }
  .faq-question h3 {
    font-size: 1.1rem;
    padding-right: 12px;
  }
}
</style>
