# Daily Rem

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D24.0.0-green)](https://nodejs.org/)

[**Daily Rem**](https://twitter.com/daily-rem) is a Twitter bot that tweets a Rem picture from Danbooru every hour. This version is built with Node.js, using the Danbooru API to fetch images and the Twitter API v2 to post tweets.

## Features
- Fetches random safe-for-work Rem images from Danbooru.
- Tweets the image along with the artist's name (if available) every hour.
- Built with TypeScript for type safety and maintainability.

## Local Setup

1. Clone the project repository:
   ```sh
   git clone https://github.com/your-repo/daily-rem.git
   cd daily-rem
   ```

2. Copy the `.env.example` file to `.env` and fill in your credentials:
   ```sh
   cp .env.example .env
   ```
   Update the following variables with your Twitter API keys and Danbooru API URL:
   ```
   API_KEY='YOUR_API_KEY'
   API_SECRET='YOUR_API_SECRET'
   ACCESS_TOKEN='YOUR_ACCESS_TOKEN'
   ACCESS_TOKEN_SECRET='YOUR_ACCESS_TOKEN_SECRET'
   DANBOORU_API_URL='https://danbooru.donmai.us/posts/random.json?tags=rem_(re:zero)+rating:safe'
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Run the bot in development mode:
   ```sh
   npm run dev
   ```

5. To build and run the bot in production:
   ```sh
   npm run build
   npm start
   ```

## Docker Setup

1. Build the Docker image:
   ```sh
   docker-compose build
   ```

2. Start the container:
   ```sh
   docker-compose up -d
   ```

3. Logs can be found in the `logs` directory.

## Credits
All images used are the property of their respective artists. 

## Contact
If you have any questions, encounter issues, or just want to connect, feel free to reach out on [**Twitter**](https://twitter.com/gabrigodes).

