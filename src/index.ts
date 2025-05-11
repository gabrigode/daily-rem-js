import DanbooruService from './services/danbooru';
import TwitterService from './services/twitter';
import ImageHelper from './helpers/image';

const main = async () => {
  const twitterService = new TwitterService();

  try {
    const { tag_string_artist = null, large_file_url } = await DanbooruService.getPost();
    const imageBuffer = await ImageHelper.bufferizeImage(large_file_url);

    console.log('Danbooru post data:', { tag_string_artist, large_file_url });

    twitterService.tweetWithImageUrl(tag_string_artist, imageBuffer);

    console.log('Tweet sent successfully in', new Date().toLocaleString());
  } catch (err) {
    console.error('Error in main function:', err);
  }
};
main();
