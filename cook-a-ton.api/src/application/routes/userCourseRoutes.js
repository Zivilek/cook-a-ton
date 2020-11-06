import userCourseController from '../controllers/userCourseController';

export default (router) => {
    router.get(`/userCourses/:id`, userCourseController.get);
    router.get(`/userCourses`, userCourseController.getAll);
    router.post(`/userCourses`, userCourseController.insert)
    router.put(`/userCourses/:id`, userCourseController.update);
    router.delete(`/userCourses/:id`, userCourseController.delete);
}