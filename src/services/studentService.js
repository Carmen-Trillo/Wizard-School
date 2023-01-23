const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export const studentService = {
    async getStudent() {
        let response = await apiClient.get("/students");
        let allStudent = response.data;
        return allStudent;
    },
    async getStudent(id) {
        let response = await apiClient.get("/students/" + id);
        let student = response.data;
        return student;
    },
    async submitStudent(newStudent){
        await apiClient.post("/students", newStudent)
    },
    async deleteStudent(id){
        await apiClient.delete("/students/" + id)
    },
    async updateTask(id, updatedTask){
        await apiClient.patch("/students/" + id, updatedStudent)
    }
}