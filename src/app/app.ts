import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/ui/navbar/navbar';
import { CardLarg } from './components/ui/card-larg/card-larg';
import { Card } from './components/ui/card1/card';
import { PerfectAccessoriesCard } from './components/ui/perfect-accessories-card/perfect-accessories-card';
import { FeaturedCard } from './components/ui/featured-card/featured-card';
import { CardLargRevers } from './components/ui/card-larg-revers/card-larg-revers';
import { LocationCard } from './components/ui/location-card/location-card';
import { InstallmentProcessCard } from './components/ui/installment-process-card/installment-process-card';
import { Footer } from './components/ui/footer/footer';
import { register } from 'swiper/element/bundle';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
register();
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    CardLarg,
    Card,
    PerfectAccessoriesCard,
    FeaturedCard,
    CardLargRevers,
    LocationCard,
    InstallmentProcessCard,
    Footer,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  latest_product = [
    {
      name: 'MacBook Neo 13-inch',
      price: 729,
      img: 'https://www.ione.com.kh/wp-content/uploads/2026/03/mac-book-neo-13-inch-10-ione-cambodia.png',
    },
    {
      name: 'iPad Air 13-inch (M4)',
      price: 929,
      img: 'https://www.ione.com.kh/wp-content/uploads/2026/03/mac-book-neo-13-inch-10-ione-cambodia.png',
    },
    {
      name: 'MacBook Neo 13-inch',
      price: 729,
      img: 'https://www.ione.com.kh/wp-content/uploads/2025/07/ipad-air-cambodia-1.png',
    },
    {
      name: 'Apple Watch Series 11',
      price: 479,
      img: 'https://www.ione.com.kh/wp-content/uploads/2025/10/apple-watch-series-11-1-cambodia.png',
    },
  ];
  accessories = [
    {
      name: 'Apple Accessories',
      img: 'https://www.ione.com.kh/wp-content/uploads/2025/07/apple-accessories-cambodia-1.png',
    },
    {
      name: 'Bags & Sleeves',
      img: 'https://www.ione.com.kh/wp-content/uploads/2025/07/bag-sleev-accessories-cambodia.png',
    },
    {
      name: 'Cables & Adapters',
      img: 'https://www.ione.com.kh/wp-content/uploads/2025/07/cable-cambodia.png',
    },
    {
      name: 'Cases & Protection',
      img: 'https://www.ione.com.kh/wp-content/uploads/2025/07/case-protection.png',
    },
    {
      name: 'Power Banks',
      img: 'https://www.ione.com.kh/wp-content/uploads/2025/07/power-bank-accessories-cambodia.png',
    },
    {
      name: 'Speakers & Headphones',
      img: 'https://www.ione.com.kh/wp-content/uploads/2025/07/speaker-headphone-accessories-cambodia.png',
    },
  ];
  featured_apple_accessories = [
    {
      img: 'https://www.ione.com.kh/wp-content/uploads/2026/01/iphone-air-magsafe-battery-1-ione-cambodia.png',
      name: 'iPhone Air MagSafe Battery',
    },
    {
      img: 'https://www.ione.com.kh/wp-content/uploads/2025/10/apple-iphone-17-pro-clear-case-with-magsafe-5-cambodia.png',
      name: 'Apple iPhone 17 Pro Max Clear Case with MagSafe',
    },
    {
      img: 'https://www.ione.com.kh/wp-content/uploads/2025/10/apple-iphone-17-pro-clear-case-with-magsafe-5-cambodia.png',
      name: 'Apple iPhone 17 Pro Clear Case with MagSafe',
    },
    {
      img: 'https://www.ione.com.kh/wp-content/uploads/2025/09/airpods-pro-3-5-cambodia.png',
      name: 'AirPods Pro 3',
    },
  ];
  services = [
    {
      title: 'Easy Payment installment to own your Apple devices right away!',
      img: 'https://www.ione.com.kh/wp-content/uploads/2025/07/ucb-card-cambodia.png',
    },
    {
      title: 'Trade-In your old device for a brand new iPhone.',
      img: 'https://www.ione.com.kh/wp-content/uploads/2025/07/trade-in-cambodia-1.png',
    },
    {
      title: 'Benefit from our worry-free device insurance plans.',
      img: 'https://www.ione.com.kh/wp-content/uploads/2025/07/device-protection-plan.png',
    },
    {
      title: 'Join our free Apple Workshops & Quick Training Sessions.',
      img: 'https://www.ione.com.kh/wp-content/uploads/2025/07/workshop-cambodia.png',
    },
  ];
  iOneLogo: string = '/image/iOne-logo-clear.webp';
  appleReseller: string = '/image/apple-reseller-logo.webp';
  locations = [
    {
      img: 'https://www.ione.com.kh/wp-content/uploads/2025/07/ione-sothearos-cambodia.png',
      name: 'iOne Sothearos',
    },
    {
      img: 'https://www.ione.com.kh/wp-content/uploads/2025/07/ione-sen-sok-cambodia.png',
      name: 'iOne Sen Sok',
    },
    {
      img: 'https://www.ione.com.kh/wp-content/uploads/2025/07/ione-service-cambodia.png',
      name: 'iOne Service Center',
    },
  ];
  installment_process = [
    {
      title: 'Submit Request',
      description: 'Send us your request and specify the device you want.',
    },
    {
      title: 'Provide Documents',
      description: 'Submit your ID and proof of income ($300+ per month).',
    },
    {
      title: 'Bank Verification',
      description: 'Our partner bank reviews and processes your documents.',
    },
    {
      title: 'Get Approved',
      description: 'Once approved, take home your dream device!',
    },
  ];
  style_revers = 'revers';
  protected readonly indexedDB = indexedDB;
}
