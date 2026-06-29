# KuroShiro

A fictional luxury fashion website mixed with anime. The project is a React focused shopping cart project
<br>
Live Preview: (coming soon)

## Overview
KuroShiro is a fictional storefront that is themed around the concept of anime characters and being treated as high end fashion icons. Products are all fetched from a local json file and through this, we can browse the collection of products, add items to cart and make any last minute changes before checkout.

## Home
<img width="1920" height="2367" alt="kuroshiro-shop-home" src="https://github.com/user-attachments/assets/90f86fa7-b9ed-4766-b6d5-bf24b0b1b26c" />
<br>

## Shop
<img width="1920" height="2407" alt="kuroshiro-shop-collection" src="https://github.com/user-attachments/assets/da327205-2ec8-4afe-9189-4bbcf00633e0" />
<br>

## Cart
<img width="1920" height="1916" alt="kuroshiro-shop-cart" src="https://github.com/user-attachments/assets/183f06d4-6644-4b1e-bba2-9d929fc7d9a8" />
<br>

## Features
- Product data was originally fetched from th FakeStore API on mount, however this was changed for a more creative idea and nose uses local json for data retrieval and updates.
- Users are able to add products to cart and have live updates in the navigation
- Users can either type a custom amount or use buttons to change the quantity to add to cart
- Items can be removed from the cart if needed
- Client side navigation using `react-router`

## Tech Stack
- React
- Vite

## Getting Started
### Prerequisites
- Node.js

### Installation
1. Clone the repo
```bash
git clone https://github.com/Olly-Codes/kuroshiro-shop.git
cd kuroshiro-store
```

2. Install dependencies
```
npm install
```

3. Start development server
```bash
npm run dev
```

## What I learned
- Lifting state so multiple pages can read and update the same cart state without prop drilling other components
- Using `react-router` to create a multi-page SPA

## Acknowledgements
- All pictures are not mine, they were all sourced from Pinterest. If removal is necessary, please let me know
- Prices and clothing are all made up
- Not mobile responsive, will update soon
