import React, { useEffect, useState } from 'react';
import client from '../../api/client';

import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

const ImagesViewer = ({ images = [] }) => {
  const [defaultFileList, setDefaultFileList] = useState(
    //example - change in edit
    images.map((image, index) => ({
      uid: -index,
      url: image,
    }))
  );
  const [picUrls, setPicUrls] = useState([]);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const strImage = /^data:image\/[a-z]+;base64,/;

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.replace(strImage, ''));
      reader.onerror = (error) => reject(error);
    });

  const uploadPicture = async (event) => {
    const { onSuccess, onError, file } = event;

    const result = await toBase64(file).catch((e) => Error(e));
    if (result instanceof Error) {
      console.log('Error: ', result.message);
      onError('could not convert to base64');

      return;
    }

    const data = await client.post('/image', { image: result });
    setPicUrls([...picUrls, data.data.imageUrl]);

    onSuccess('Ok');
  };

  const onChange = ({ file, fileList }) => {
    setDefaultFileList(fileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <ImgCrop rotate>
      <Upload
        customRequest={uploadPicture}
        onChange={onChange}
        onPreview={onPreview}
        defaultFileList={defaultFileList}
        listType="picture-card"
      >
        {defaultFileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};

export default ImagesViewer;
