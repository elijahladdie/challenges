interface Student {
    name: string;
    age?: number;
}

const setStudentAgeApi = (student: Student, age: number): Promise<Student> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            student.age = age;
            if (!Number(age)) {
                reject("Invalid number");
            }
            if (age < 0) {
                reject("Bad Age");
            } else {
                resolve(student);
            }
        }, 500);
    });
};

const student: Student = { name: "denis" };

setStudentAgeApi(student,34)
    .then(student => console.log(student))
    .catch(error => console.error(error));
