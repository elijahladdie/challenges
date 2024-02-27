const customApi = arr => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (const obj of arr) {
                obj.totalNumberofFamilyMembers = Object.keys(obj).length;
                if (obj.fatherName && obj.fatherName.toLowerCase() === 'yves') {
                    reject("Yves is not an allowed dad in 2022.");
                    return;
                }
            }
            resolve(arr);
        }, 1000);
    });
};

async function testCustomApi() {
    try {
        const result = await customApi([
            { fatherName: 'John', motherName: 'Jane', childrenNumber: 2 },
            { fatherName: 'Yves', motherName: 'Yvonne', childrenNumber: 1 }
        ]);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

testCustomApi();
