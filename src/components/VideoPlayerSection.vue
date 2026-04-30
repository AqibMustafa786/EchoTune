<template>
  <section id="swipe" class="video-section">
    <div class="section-container">
      <div class="video-grid">
        <div class="video-visual reveal">
          <div class="phone-mockup">
            <div class="phone-screen">
              <img :src="videoImage" alt="Swipe Tech Mockup" />
            </div>
            <div class="swipe-hint">
              <div class="arrow-up"></div>
              <span>Swipe Up</span>
            </div>
          </div>
        </div>
        
        <div class="video-text reveal">
          <div class="tag">Exclusive Feature</div>
          <h2 class="gradient-text">Immersive "Swipe" Technology</h2>
          <p>Experience your local video library like never before. Effortlessly flick between tracks with TikTok-style vertical navigation.</p>
          
          <ul class="feature-list">
            <li>
              <div class="icon">✨</div>
              <div>
                <strong>Seamless Transitions</strong>
                <p>Instant playback with zero buffering for local files.</p>
              </div>
            </li>
            <li>
              <div class="icon">🖐️</div>
              <div>
                <strong>Gestural Controls</strong>
                <p>Double tap for immersive mode, horizontal drag for seek.</p>
              </div>
            </li>
            <li>
              <div class="icon">⚡</div>
              <div>
                <strong>Haptic Feedback</strong>
                <p>Feel every swipe with precision-tuned vibration effects.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import videoImage from '../assets/app-screenshots/videoplayer.jpeg';
</script>

<style scoped>
.video-section {
  padding: 120px 0;
  background: linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.05), transparent);
}

.video-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 100px;
  align-items: center;
}

.tag {
  display: inline-block;
  padding: 6px 16px;
  background: var(--primary-glow);
  color: var(--primary-light);
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.video-text h2 {
  font-size: 3.5rem;
  margin-bottom: 24px;
}

.video-text p {
  font-size: 1.2rem;
  margin-bottom: 40px;
}

.feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.feature-list li {
  display: flex;
  gap: 20px;
}

.feature-list .icon {
  width: 48px;
  height: 48px;
  background: var(--glass);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.feature-list strong {
  display: block;
  font-family: 'Outfit', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 4px;
  color: white;
}

.feature-list p {
  font-size: 1rem;
  margin-bottom: 0;
}

.phone-frame {
  position: relative;
  max-width: 400px;
  margin: 0 auto;
}

.mockup-img {
  width: 100%;
  border-radius: 40px;
  box-shadow: 0 30px 100px rgba(0,0,0,0.8);
}

.swipe-hint {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: white;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {transform: translateX(-50%) translateY(0);}
  40% {transform: translateX(-50%) translateY(-20px);}
  60% {transform: translateX(-50%) translateY(-10px);}
}

.arrow-up {
  width: 20px;
  height: 20px;
  border-top: 3px solid white;
  border-right: 3px solid white;
  transform: rotate(-45deg);
}

@media (max-width: 968px) {
  .video-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  .video-visual {
    order: 2;
  }
  .video-text {
    order: 1;
    text-align: center;
  }
  .feature-list li {
    text-align: left;
  }
}
</style>
