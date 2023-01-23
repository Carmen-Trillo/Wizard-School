import { studentService } from "../services/studentService.js";

export const studentHandler = {
    addTask(newStudent){
        if (!newStudent) {
            return;
        }

        let student = {
            "name": newStudent.name,
            "surnames": newStudent.surnames,
            "course": newStudent.course,
            "birth": newStudent.birth,
            "sign": newStudent.sign,
            "city": newStudent.city,
            "country": newStudent.country,
            "id": ""
        }
        studentService.submitTask(student);
        return student;
    },
    loadTasks(){
        return studentService.getTasks();
    },
    loadTask(id) {
        return studentService.getTask(id);
    },
    deleteTask(id){
        return studentService.deleteTask(id);
    },
    updateTask(newStudent){
        if (!newStudent) {
            return;
        }

        let newStudentModel = {
            "name": newStudent.name,
            "surnames": newStudent.surnames,
            "course": newStudent.course,
            "birth": newStudent.birth,
            "sign": newStudent.sign,
            "city": newStudent.city,
            "country": newStudent.country,
            "id": newStudent.id
        }

        let id = newStudentModel.id;

        return studentService.updateTask(id, newStudentModel);
    }
}