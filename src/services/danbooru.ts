class DanbooruService {
  static getPost = async () => {
    try {
      const apiUrl = process.env.DANBOORU_API_URL;
      if (!apiUrl) {
        throw new Error('DANBOORU_API_URL is not set or is empty');
      }
      const response = await fetch(apiUrl);

      const data = await response.json();

      if (!response.ok) {
        throw new Error('Failed to fetch data from Danbooru');
      }

      return data;
    } catch (err) {
      console.error('Error fetching posts:', err);
      return null;
    }
  };
}

export default DanbooruService;
