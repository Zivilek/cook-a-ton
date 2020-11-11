import client from '../api/client';

class RecipeCourseDataService {
  getCourses = () => {
    return client.get('/userCourses');
  };
}

export default new RecipeCourseDataService();

// router.get(`/userCourses/:id`, userCourseController.get);
// router.get(`/userCourses`, userCourseController.getAll);
// router.post(`/userCourses`, userCourseController.insert)
// router.put(`/userCourses/:id`, userCourseController.update);
// router.delete(`/userCourses/:id`, userCourseController.delete);
