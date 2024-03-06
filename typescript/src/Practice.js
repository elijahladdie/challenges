"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const customApi = (arr) => {
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
        }, 5000);
    });
};
function testCustomApi() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield customApi([
                { fatherName: 'John', motherName: 'Jane', childrenNumber: 2 },
                { fatherName: 'Kalisa', motherName: 'Yvonne', childrenNumber: 1 }
            ]);
            console.log(result);
        }
        catch (error) {
            console.error(error);
        }
    });
}
testCustomApi();
