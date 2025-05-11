class ImageHelper {
  static async bufferizeImage(imageUrl: string) {
    try {
      const imageResponse = await fetch(imageUrl);

      if (!imageResponse.ok) {
        throw new Error('Failed to fetch image');
      }

      const arrayBuffer = await imageResponse.arrayBuffer();
      const imageBuffer = Buffer.from(arrayBuffer);

      return imageBuffer;
    } catch (err) {
      console.error('Error buffering image:', err);
      throw err;
    }
  }
}

export default ImageHelper;
