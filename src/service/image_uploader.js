const UPLOAD_URL = process.env.REACT_APP_CLOUDINARY_UPLOAD_URL;

class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('upload_preset', 'wt1dbv6y');
    data.append('folder', 'card_maker');
    data.append('file', file);

    const result = await fetch(UPLOAD_URL, {
      method: 'POST',
      body: data,
    });

    return result.json();
  }
}

export default ImageUploader;
