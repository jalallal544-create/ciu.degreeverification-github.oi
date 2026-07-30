const student = JSON.parse(

    localStorage.getItem("student")

);

if(student){

    document.querySelector("#name").textContent =
    student.full_name;

    document.querySelector("#studentId").textContent =
    student.student_id;

    document.querySelector("#program").textContent =
    student.program;

    document.querySelector("#department").textContent =
    student.department;

    document.querySelector("#cgpa").textContent =
    student.cgpa;

    document.querySelector("#passingYear").textContent =
    student.passing_year;

}
