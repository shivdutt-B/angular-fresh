import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-container">
      <div class="hero-section">
        <h1>Welcome to Angular Fresh</h1>
        <p>A modern Angular application built with the latest features</p>
        <div class="action-buttons">
          <button class="contact-btn" routerLink="/contact">Contact Us</button>
        </div>
      </div>

      <div class="features-section">
        <div class="feature-card">
          <h2>Fast & Responsive</h2>
          <p>Built with performance in mind for a seamless user experience.</p>
        </div>

        <div class="feature-card">
          <h2>Modern Design</h2>
          <p>Clean and intuitive interface that adapts to any device.</p>
        </div>

        <div class="feature-card">
          <h2>Easy to Use</h2>
          <p>Simple navigation and user-friendly interactions.</p>
        </div>
      </div>
    </div>
  `,
  styles: `
    .home-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      font-family: 'Inter', sans-serif;
    }
    
    .hero-section {
      text-align: center;
      padding: 4rem 1rem;
    }
    
    .hero-section h1 {
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 1rem;
    }
    
    .hero-section p {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 2rem;
    }
    
    .action-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
    
    .contact-btn {
      background: #1976d2;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      font-weight: 500;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s;
    }
    
    .contact-btn:hover {
      background: #1565c0;
    }
    
    .features-section {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      margin-top: 3rem;
    }
    
    .feature-card {
      flex: 1;
      min-width: 250px;
      padding: 2rem;
      background: #f5f5f5;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .feature-card h2 {
      color: #1976d2;
      margin-top: 0;
    }
    
    @media (max-width: 768px) {
      .hero-section h1 {
        font-size: 2rem;
      }
      
      .hero-section p {
        font-size: 1rem;
      }
      
      .feature-card {
        min-width: 100%;
      }
    }
  `,
})
export class HomeComponent {}
