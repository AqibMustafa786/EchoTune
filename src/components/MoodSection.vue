<template>
  <section id="moods" class="mood-section">
    <div class="section-container">
      <div class="mood-content">
        <div class="mood-text reveal">
          <h2 class="gradient-text">Music for Every Vibe</h2>
          <p>EchoTune's AI-powered mood filters analyze your library to curate the perfect playlist for your current state of mind.</p>
          
          <div class="mood-tags">
            <span v-for="mood in moods" :key="mood.name" 
                  :class="['mood-tag', { active: activeMood === mood.name }]"
                  @mouseenter="activeMood = mood.name">
              {{ mood.icon }} {{ mood.name }}
            </span>
          </div>
        </div>
        
        <div class="mood-visual reveal">
          <div class="phone-mockup">
            <div class="phone-screen">
              <img :src="moodImage" alt="Mood Filters Mockup" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import moodImage from '../assets/app-screenshots/genres.jpg';

const moods = [
  { name: 'Party', icon: '🥳', color: '#F59E0B' },
  { name: 'Sad', icon: '😔', color: '#3B82F6' },
  { name: 'Chill', icon: '😌', color: '#10B981' },
  { name: 'Workout', icon: '💪', color: '#EF4444' },
  { name: 'Love', icon: '❤️', color: '#EC4899' }
];

const activeMood = ref('Party');
</script>

<style scoped>
.mood-section {
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

.mood-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
  align-items: center;
}

.mood-text h2 {
  font-size: 3.5rem;
  margin-bottom: 24px;
}

.mood-text p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  max-width: 500px;
}

.mood-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.mood-tag {
  padding: 12px 24px;
  background: var(--glass);
  border: 1px solid var(--glass-border);
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  color: var(--text-muted);
}

.mood-tag.active, .mood-tag:hover {
  background: var(--glass-heavy);
  border-color: var(--primary);
  color: white;
  transform: translateY(-2px);
}

.mood-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

@media (max-width: 968px) {
  .mood-section {
    padding: 80px 0;
  }
  .mood-text h2 {
    font-size: 2.8rem;
  }
  .mood-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .mood-text p {
    margin: 0 auto 40px;
    font-size: 1.1rem;
  }
  .mood-tags {
    justify-content: center;
  }
  .mood-visual {
    margin-top: 40px;
  }
}

@media (max-width: 480px) {
  .mood-text h2 {
    font-size: 2.2rem;
  }
  .mood-tag {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}
</style>
