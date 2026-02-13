document.getElementById('app').innerHTML = `
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
      line-height: 1.6;
      color: #333;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem;
    }
    .card {
      background: white;
      border-radius: 16px;
      padding: 3rem;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      margin-bottom: 2rem;
    }
    .header {
      text-align: center;
      margin-bottom: 3rem;
    }
    .header h1 {
      font-size: 2.5rem;
      color: #667eea;
      margin-bottom: 0.5rem;
    }
    .badge {
      display: inline-block;
      background: #667eea;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
    }
    .intro {
      font-size: 1.1rem;
      color: #666;
      text-align: center;
      margin-bottom: 2rem;
    }
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin: 2rem 0;
    }
    .feature {
      padding: 1.5rem;
      background: #f8f9fa;
      border-radius: 12px;
      border-left: 4px solid #667eea;
    }
    .feature h3 {
      color: #667eea;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }
    .feature p {
      color: #666;
      font-size: 0.95rem;
    }
    .info-section {
      background: #f8f9fa;
      padding: 1.5rem;
      border-radius: 12px;
      margin: 2rem 0;
    }
    .info-section h2 {
      color: #333;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    .info-item {
      display: flex;
      justify-content: space-between;
      padding: 0.75rem 0;
      border-bottom: 1px solid #e0e0e0;
    }
    .info-item:last-child {
      border-bottom: none;
    }
    .info-label {
      font-weight: 600;
      color: #555;
    }
    .info-value {
      color: #667eea;
      font-family: 'Courier New', monospace;
    }
    .cta-section {
      text-align: center;
      margin-top: 2rem;
      padding: 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      color: white;
    }
    .cta-section h2 {
      margin-bottom: 1rem;
    }
    .cta-section p {
      margin-bottom: 1.5rem;
      opacity: 0.9;
    }
    .btn {
      display: inline-block;
      background: white;
      color: #667eea;
      padding: 0.75rem 2rem;
      border-radius: 25px;
      text-decoration: none;
      font-weight: 600;
      transition: transform 0.2s;
      cursor: pointer;
      border: none;
      font-size: 1rem;
    }
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
  </style>
  
  <div class="container">
    <div class="card">
      <div class="header">
        <h1>🚀 Welcome to Service 2</h1>
        <span class="badge">Port 8093</span>
      </div>
      
      <p class="intro">
        A powerful Vite development server ready to help you build amazing web applications. 
        This service is fully configured and running smoothly.
      </p>
      
      <div class="features">
        <div class="feature">
          <h3>⚡ Lightning Fast</h3>
          <p>Powered by Vite for instant hot module replacement and blazing-fast builds.</p>
        </div>
        <div class="feature">
          <h3>🔧 Easy Configuration</h3>
          <p>Pre-configured with optimal settings for modern web development.</p>
        </div>
        <div class="feature">
          <h3>🌐 Network Ready</h3>
          <p>Accessible from any device on your network with proper host configuration.</p>
        </div>
      </div>
      
      <div class="info-section">
        <h2>📊 Service Information</h2>
        <div class="info-item">
          <span class="info-label">Service Name:</span>
          <span class="info-value">Service 2</span>
        </div>
        <div class="info-item">
          <span class="info-label">Port:</span>
          <span class="info-value">8093</span>
        </div>
        <div class="info-item">
          <span class="info-label">Local URL:</span>
          <span class="info-value">http://localhost:8093</span>
        </div>
        <div class="info-item">
          <span class="info-label">Status:</span>
          <span class="info-value" style="color: #10b981;">● Running</span>
        </div>
      </div>
      
      <div class="cta-section">
        <h2>Ready to Build Something Great?</h2>
        <p>Start developing your application with the power of modern tooling at your fingertips.</p>
        <button class="btn" onclick="alert('Service 2 is running perfectly! Start coding to see changes instantly.')">Get Started</button>
      </div>
    </div>
  </div>
`
