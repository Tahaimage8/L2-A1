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