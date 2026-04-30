<template>
  <section id="audio" class="audio-section">
    <div class="section-container audio-content">
      <div class="audio-visual">
        <div class="visualizer-container">
          <div v-for="n in 20" :key="n" class="bar" :style="{ height: Math.random() * 80 + 20 + '%', animationDelay: n * 0.1 + 's' }"></div>
        </div>
        <div class="audio-label glass-card">
          <span>Gapless Playback Engine</span>
          <div class="status-dot"></div>
        </div>
      </div>
      <div class="audio-text">
        <h2 class="reveal">Built for <span class="gradient-text">Audiophiles.</span></h2>
        <p class="reveal">
          Built on the powerful <code>just_audio</code> and <code>audio_service</code> stack, our engine provides bit-perfect playback and background persistence. 
          Enjoy seamless transitions and a 5-band digital signal processor (DSP) for total soundstage control.
        </p>
        <ul class="audio-features">
          <li class="reveal">High-Fidelity Gain Management</li>
          <li class="reveal">Bit-depth preservation</li>
          <li class="reveal">Custom Audio Session Handling</li>
          <li class="reveal">Gapless Transition Logic</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.audio-section {
  padding: 120px 0;
  background: black;
}

.audio-content {
  display: flex;
  align-items: center;
  gap: 80px;
}

.audio-visual {
  flex: 1;
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visualizer-container {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 200px;
}

.bar {
  width: 12px;
  background: linear-gradient(to top, var(--primary), var(--accent));
  border-radius: 6px;
  animation: wave 1.2s ease-in-out infinite alternate;
}

@keyframes wave {
  from { transform: scaleY(0.5); }
  to { transform: scaleY(1.5); }
}

.audio-label {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  white-space: nowrap;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  box-shadow: 0 0 10px #22c55e;
}

.audio-text {
  flex: 1;
}

.audio-text h2 {
  font-size: 3.5rem;
  margin-bottom: 24px;
}

.audio-text p {
  color: var(--text-muted);
  font-size: 1.2rem;
  margin-bottom: 32px;
}

.audio-features {
  list-style: none;
}

.audio-features li {
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
}

.audio-features li::before {
  content: '✓';
  color: var(--primary);
}

@media (max-width: 1024px) {
  .audio-content {
    flex-direction: column-reverse;
    text-align: center;
  }
  .audio-features {
    text-align: left;
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>
