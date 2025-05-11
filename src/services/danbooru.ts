class DanbooruService {
  static getPost = async () => {
    try {
      const response = await fetch(process.env.DANBOORU_API_URL || '');

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
