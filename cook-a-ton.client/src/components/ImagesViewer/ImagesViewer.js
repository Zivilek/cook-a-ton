import React, { useState, useEffect } from 'react';
import './ImagesViewer.css';

import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { Image } from 'antd';
import ImgCrop from 'antd-img-crop';
import imagesDataService from '../../dataService/ImagesDataService';

const ImagesViewer = ({ images = [] }) => {
  const [defaultFileList, setDefaultFileList] = useState(
    //example - change in edit
    images.map((image, index) => ({
      uid: -index,
      url: image,
    }))
  );
  const [picUrls, setPicUrls] = useState([]);
  const [selectedPicture, setSelectedPicture] = useState('');

  useEffect(() => {
    if (defaultFileList[0]) {
      setSelectedPicture(defaultFileList[0].url);
    }
  }, [defaultFileList]);

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

    const data = await imagesDataService.postImages({ image: result });
    setPicUrls([...picUrls, data.data.imageUrl]);

    onSuccess('Ok');
  };

  const onChange = ({ file, fileList }) => {
    setDefaultFileList(fileList);

    console.log(fileList);
    console.log(picUrls);
  };

  const onPreview = async (file) => {
    setSelectedPicture(file.url);
  };

  return (
    <div className="image-viewer">
      <Image className="picture-placeholder" src={selectedPicture} />
      <ImgCrop rotate>
        <Upload
          customRequest={uploadPicture}
          onChange={onChange}
          onPreview={onPreview}
          defaultFileList={defaultFileList}
          listType="picture"
          className="upload-list-inline"
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </ImgCrop>
    </div>
  );
};

export default ImagesViewer;
