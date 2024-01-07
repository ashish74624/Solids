# Solids - E-Commerce Website with Next.js 13

## Overview
Solids is a feature-rich e-commerce website developed using Next.js 13. This platform integrates third-party authentication via Kindle Auth, employs MongoDB for robust data storage, and ensures secure and seamless transactions through the Razorpay payment gateway.

## Features
- **Next.js 13:** Utilizing the latest features and optimizations for a performant web application.
- **Kindle Auth:** Enhance user authentication with secure third-party login and registration processes.
- **MongoDB Integration:** Store and manage data efficiently, providing scalability and flexibility.
- **Razorpay Payment Gateway:** Facilitate secure and seamless transactions for a smooth shopping experience.

## Getting Started
1. **Clone the Repository:**
   ```
   git clone https://github.com/your-username/solids.git
   cd solids
   ```

2. **Install Dependencies:**
   ```
   npm install
   ```

3. **Configure Kindle Auth:**
   - Obtain Kindle Auth credentials and configure them in the appropriate files.
   - KINDE_ISSUER_URL
   - KINDE_CLIENT_ID
   - KINDE_CLIENT_SECRET
   - KINDE_SITE_URL
   - KINDE_POST_LOGOUT_REDIRECT_URL
   - KINDE_POST_LOGIN_REDIRECT_URL

4. **Configure MongoDB:**
   - Set up a MongoDB database and update connection details in the project.
   - MONGODB_URI=your_mongodb_connection_string

5. **Configure Razorpay:**
   - Obtain Razorpay API credentials and configure them in the appropriate files.
   - RAZORPAYAPIKEY = your razoppay api key

6. **Run the Application:**
   ```
   npm run dev
   ```

7. **Access the Application:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Usage
- Explore the Solids e-commerce website, browse a diverse range of products, and make seamless purchases.
- Register and log in securely using Kindle Auth for a personalized shopping experience.
- Enjoy secure transactions through the integrated Razorpay payment gateway.

## Technologies Used
- Next.js 13
- Kindle Auth
- MongoDB
- Razorpay Payment Gateway

Feel free to customize this template according to your project's specific details.