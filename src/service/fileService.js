const UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dioswxmsc/image/upload';
const REQUEST_URL = `https://res.cloudinary.com/dioswxmsc/image/upload/card_maker`;

class FileService {
  onChange = (changeState, changeLoadingState) => {
    const img = this.input.files[0];
    console.log('onchange');
    if (!img) {
      console.log('not file');
      return;
    }

    changeLoadingState && changeLoadingState(true);
    const name = img.name.split('.')[0];

    const formData = new FormData();
    formData.append('upload_preset', 'wt1dbv6y');
    formData.append('folder', 'card_maker');
    formData.append('file', img);
    formData.append('public_id', name);

    fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData,
    }) //
      .then(() => {
        changeState && changeState(name, REQUEST_URL);
        changeLoadingState && changeLoadingState(false);
      });
  };

  uploadFile(changeState, changeLoadingState) {
    this.input = document.createElement('input');
    this.input.setAttribute('type', 'file');
    this.input.setAttribute('accept', 'image/*');

    this.input.addEventListener(
      'change',
      () => {
        this.onChange(changeState, changeLoadingState);
      },
      { once: true }
    );
    this.input.click();
  }
}

export default FileService;
