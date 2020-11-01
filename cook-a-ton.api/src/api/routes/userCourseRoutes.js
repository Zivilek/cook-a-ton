import userCourseController from '../controllers/userCourseController';

export default (router) => {
    router.get(`/userCourse/:id`, userCourseController.get);
    router.get(`/userCourse`, userCourseController.getAll);
    router.post(`/userCourse`, userCourseController.insert)
    router.put(`/userCourse/:id`, userCourseController.update);
    router.delete(`/userCourse/:id`, userCourseController.delete);
}