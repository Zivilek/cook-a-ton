import client from '../api/client';

class ImagesDataService {
  postImages = ({ params }) => {
    return client.post('/images', { params });
  };
}

export default new ImagesDataService();

// router.post(`/images`, imageController.post);
