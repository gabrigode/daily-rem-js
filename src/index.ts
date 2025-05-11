import DanbooruService from './services/danbooru';
import TwitterService from './services/twitter';
import ImageHelper from './helpers/image';
import cron from 'node-cron';

const main = async () => {
  const twitterService = new TwitterService();

  try {
    const { tag_string_artist = null, large_file_url } = await DanbooruService.getPost();
    const imageBuffer = await ImageHelper.bufferizeImage(large_file_url);

    console.log('Danbooru post data:', { tag_string_artist, large_file_url });

    await twitterService.tweetWithImageUrl(tag_string_artist, imageBuffer);

    console.log('Tweet sent successfully in', new Date().toLocaleString());
  } catch (err) {
    console.error('Error in main function:', err);
  }
};

// Schedule the main function to run every hour
cron.schedule('0 * * * *', () => {
  console.log('Running scheduled task at', new Date().toLocaleString());
  main();
});

console.log('Cron job scheduled. The script will run every hour.');
