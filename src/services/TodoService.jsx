import { apiClient } from "../client/ApiClient";

const TodoService = {
  getAllCourses: () => apiClient.get('/courses'), 
  deleteCourse: (id) => apiClient.delete(`/courses/${id}`),
  getSingleCourse: (id) => apiClient.get(`/courses/${id}`),
  updateCourse: (todo) => apiClient.put(`/courses`, todo),
  addCourse: (todo) => apiClient.post(`/courses`, todo),

};

export default TodoService;