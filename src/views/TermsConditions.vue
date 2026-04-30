<template>
  <div class="legal-page section-container">
    <div class="noise-overlay"></div>
    <div class="glow-spot top-right"></div>
    
    <header class="legal-header">
      <h1 class="gradient-text">Terms & Conditions</h1>
      <p class="last-updated">Last updated: April 30, 2026</p>
    </header>

    <div class="legal-content glass-card">
      <section>
        <h2>1. Acceptance</h2>
        <p>By using EchoTune, you agree to these terms.</p>
      </section>

      <section>
        <h2>2. Usage</h2>
        <p>EchoTune is provided for personal, non-commercial use only. You agree NOT to reverse engineer the app or use the app for illegal purposes.</p>
      </section>

      <section>
        <h2>3. Content Responsibility</h2>
        <p>EchoTune only plays <strong>local media files from your device</strong>. You are responsible for the legality of the content you play and having rights to access your media. EchoTune does NOT host or distribute any content.</p>
      </section>

      <section>
        <h2>4. Intellectual Property</h2>
        <p>All app design, branding, and features belong to EchoTune.</p>
      </section>

      <section>
        <h2>5. Disclaimer</h2>
        <p>The software is provided "as is" without warranties of any kind.</p>
      </section>

      <section>
        <h2>6. Limitation of Liability</h2>
        <p>We are not responsible for data loss, device issues, or misuse of the application.</p>
      </section>

      <section>
        <h2>7. Updates</h2>
        <p>We may update the app or these terms at any time.</p>
      </section>
      
      <div class="contact-info">
        <p>For any questions: <a href="mailto:aqib2k1@gmail.com" class="gradient-text">aqib2k1@gmail.com</a></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.legal-page {
  padding-top: 180px;
  padding-bottom: 120px;
  min-height: 100vh;
  position: relative;
}

.top-right {
  top: -100px;
  right: -100px;
  background: var(--accent);
}

.legal-header {
  text-align: center;
  margin-bottom: 60px;
}

.legal-header h1 {
  font-size: 4.5rem;
  margin-bottom: 12px;
}

.last-updated {
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  color: var(--text-dim);
  letter-spacing: 0.05em;
}

.legal-content {
  padding: 80px;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: white;
  font-family: 'Outfit', sans-serif;
}

p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-muted);
}

.contact-info {
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid var(--glass-border);
  text-align: center;
}

@media (max-width: 768px) {
  .legal-content {
    padding: 40px 24px;
  }
  .legal-header h1 {
    font-size: 3rem;
  }
}
</style>
