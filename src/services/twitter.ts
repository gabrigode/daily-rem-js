import { TwitterApi } from 'twitter-api-v2';

class TwitterService {
  private client: TwitterApi;

  constructor() {
    this.client = new TwitterApi({
      appKey: process.env.API_KEY || '',
      appSecret: process.env.API_SECRET || '',
      accessToken: process.env.ACCESS_TOKEN || '',
      accessSecret: process.env.ACCESS_TOKEN_SECRET || '',
    });
  }

  async tweetWithImageUrl(artist: string, bufferImage: Buffer) {
    try {
      const mediaId = await this.client.v1.uploadMedia(bufferImage, { mimeType: 'image/jpeg' });

      await this.client.v2.tweet({
        text: artist ? `Artist: ${artist}` : 'Artist not found or not specified',
        media: { media_ids: [mediaId] },
      });
    } catch (err) {
      console.error('Error tweeting:', err);
    }
  }
}

export default TwitterService;
