const setStudentAgeApi = (student, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            student.age = age;
            if (age < 0)
                reject("Bad Age");
            else
                resolve(student);
        }, 500);
    });
};

const student = { name: "denis" }
setStudentAgeApi(student, 90)
    .then(student => console.log(student))
    .catch(error => console.error(error));
