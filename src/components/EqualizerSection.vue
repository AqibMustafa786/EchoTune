<template>
  <section id="equalizer" class="eq-section">
    <div class="section-container">
      <div class="eq-card glass-card reveal">
        <div class="eq-grid">
          <div class="eq-text">
            <h2 class="gradient-text">Studio Grade Equalizer</h2>
            <p>Take full control of your sound with our advanced 5-band equalizer and 15+ professional presets.</p>
            
            <div class="eq-features">
              <div class="eq-feat-item">
                <span class="feat-val">15+</span>
                <span class="feat-label">Presets</span>
              </div>
              <div class="eq-feat-item">
                <span class="feat-val">5</span>
                <span class="feat-label">Bands</span>
              </div>
              <div class="eq-feat-item">
                <span class="feat-val">3D</span>
                <span class="feat-label">Surround</span>
              </div>
            </div>
            
            <div class="presets-grid">
              <span v-for="preset in presets" :key="preset" class="preset-pill">
                {{ preset }}
              </span>
            </div>
          </div>
          
          <div class="eq-visual">
            <div class="phone-mockup phone-3d">
              <div class="phone-screen">
                <img :src="eqImage" alt="Equalizer Mockup" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import eqImage from '../assets/app-screenshots/equalizer.jpeg';

const presets = [
  'Rock', 'Pop', 'Jazz', 'Classical', 'Heavy Metal', 'Hip Hop', 'Dance', 'Bass Boost', 'Treble Boost', 'Vocal', 'Electronic'
];
</script>

<style scoped>
.eq-section {
  padding: 120px 0;
}

.eq-card {
  padding: 80px;
  overflow: hidden;
  background: radial-gradient(circle at top right, rgba(139, 92, 246, 0.1), transparent);
}

.eq-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.eq-text h2 {
  font-size: 3.5rem;
  margin-bottom: 24px;
}

.eq-text p {
  font-size: 1.2rem;
  margin-bottom: 48px;
}

.eq-features {
  display: flex;
  gap: 40px;
  margin-bottom: 48px;
}

.eq-feat-item {
  display: flex;
  flex-direction: column;
}

.feat-val {
  font-size: 2.5rem;
  font-weight: 900;
  font-family: 'Outfit', sans-serif;
  line-height: 1;
  color: var(--primary-light);
}

.feat-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.presets-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.preset-pill {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.mockup-img {
  width: 100%;
  border-radius: 24px;
  transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
  box-shadow: 20px 20px 60px rgba(0,0,0,0.5);
  transition: transform 0.5s ease;
}

.eq-visual:hover .mockup-img {
  transform: perspective(1000px) rotateY(0) rotateX(0);
}

@media (max-width: 968px) {
  .eq-card {
    padding: 40px;
  }
  .eq-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .eq-features {
    justify-content: center;
  }
  .presets-grid {
    justify-content: center;
  }
  .mockup-img {
    transform: none;
  }
}
</style>
