function multiplyValue(value: number, multiplier?: number): number {
    if (multiplier === undefined) {
        return value * 2;
    }
    return value * multiplier;
}


function processInput(value: string | number | boolean): string | number {
    if (typeof value === "string") {

        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {

        return value * 10;
    }
    else {

        if (value === true) {
            return "Active";
        } else {
            return "Inactive";
        }
    }
}

function formatCoordinate(coordinate: readonly [number, number, string]): string {
    const latitude = coordinate[0];
    const longitude = coordinate[1];
    const locationName = coordinate[2];
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    let combinedArray: T[] = [];
    for (const arr of arrays) {
        for (const item of arr) {
            combinedArray.push(item);
        }
    }
    return combinedArray;
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    return courses.filter((course) => {
        return course.isPublished === true && course.students >= minStudents;
    });
}
function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    let result: T[K][] = [];
    for (const item of items) {
        result.push(item[key]);
    }
    return result;
}



class Employee {
    protected name: string;
    private baseSalary: number;
    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;
    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}


async function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}