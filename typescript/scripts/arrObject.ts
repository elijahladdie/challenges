interface Person {
    'second-name': string;
    age: number;
}

interface FormattedData {
    females: Record<string, Person>[];
    males: Record<string, Person>[];
}

const formatArray = (arr: string[]): FormattedData => {
    const result: FormattedData = {
        females: [],
        males: []
    };
    for (const item of arr) {
        const [name, age, gender] = item.split(', ');
        const [firstName, secondName] = name.split(' ');
        const person: Person = { 'second-name': secondName, 'age': parseInt(age) };
        if (gender === 'female') {
            result.females.push({ [firstName]: person });
        } else if (gender === 'male') {
            result.males.push({ [firstName]: person });
        }
    }
    return result;
};

const data: string[] = [
    "Milker Dance, 30, female",
    "Kellen Brandine, 25, male",
    "evely bruce, 35, female",
    "John Dunk, 40, male"
];

const formattedData: FormattedData = formatArray(data);
console.log(formattedData);
