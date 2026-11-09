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