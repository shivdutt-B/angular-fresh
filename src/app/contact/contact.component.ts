import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="contact-container">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us with any questions or inquiries!</p>

      <div class="contact-info">
        <div class="contact-item">
          <h3>Email</h3>
          <p>info.com</p>
        </div>

        <div class="contact-item">
          <h3>Phone</h3>
          <p>+1 (555) 123-4567</p>
        </div>

        <div class="contact-item">
          <h3>Address</h3>
          <p>123 Angular Way<br />Web Development City, WD 12345</p>
        </div>
      </div>

      <button class="back-button" routerLink="/">Back to Home</button>
    </div>
  `,
  styles: `
    .contact-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      font-family: 'Inter', sans-serif;
    }
    
    h1 {
      color: #333;
      margin-bottom: 1rem;
    }
    
    .contact-info {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      margin: 2rem 0;
    }
    
    .contact-item {
      flex: 1;
      min-width: 200px;
      padding: 1.5rem;
      background: #f5f5f5;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .contact-item h3 {
      margin-top: 0;
      color: #1976d2;
    }
    
    .back-button {
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
    
    .back-button:hover {
      background: #1565c0;
    }
  `,
})
export class ContactComponent {}
