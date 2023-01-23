export const domRequest = {
    getInputValue(){
    var inputName = document.getElementById("inputNombre").value;
    var inputSurname = document.getElementById("inputApellidos").value;
    var inputCourse = document.getElementById("inputCurso").value;
    var inputBirth = document.getElementById("inputNacimiento").value;
    var inputCity = document.getElementById("inputCiudad").value;
    var inputCountry = document.getElementById("inputPais").value;
    var date=new Date(fechaNac);
    var mes = date.getMonth() + 1;
    var dia = date.getDate();
    var ano = date.getFullYear();
    var sign="";
    console.log(fecha);
    console.log(mes);
    console.log(dia);
    console.log(ano);
    return (inputName, inputSurname, inputCourse, inputBirth, inputCity, inputCountry, sign);

    



    },
    getTasksElements(){
        let tasksEl = document.querySelector(".main__container");
        return tasksEl;
    },
    getTaskElement(id) {
        let tasksElements = document.querySelectorAll(".main__container-task");
        let task = [...tasksElements].filter(task => {
            return task.dataset.task == id;
        })
        return task[0];
    },
    getTaskNameEl(id) {
        let tasksElements = document.querySelectorAll(".main__container-task");
        let task = [...tasksElements].filter(task => {
            return task.dataset.task == id;
        })
        return task[0].querySelector(".main__container-task--name");
    },
    getTaskEditIconEl(id) {
        let tasksElements = document.querySelectorAll(".main__container-task");
        let task = [...tasksElements].filter(task => {
            return task.dataset.task == id;
        })
        return task[0].querySelector(".main__container-task--icons--edit");
    }
}