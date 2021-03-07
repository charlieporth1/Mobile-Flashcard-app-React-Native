export const padding = (a, b, c, d) => {
    return {
        paddingTop: a,
        paddingRight: b ? b : a,
        paddingBottom: c ? c : a,
        paddingLeft: d ? d : (b ? b : a)
    }
};
export const onlyUnique = (value: any, index: number, self: any[]): boolean => {
    return self.indexOf(value) === index;
};
export const filterNil = (value: any): boolean => {
    return !!value;
};
Array.prototype.unique = function() {
    let a = this.concat();
    for(let i=0; i<a.length; ++i) {
        for(let j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};
Array.prototype.last = function() {
    const array = this;
    const lastIndex = array.length - 1;
    if (array.length > 0) {
        return array[lastIndex];
    } else {
        return [];
    }
};
Array.prototype.first = function() {
    const array = this;
    if (array.length > 0) {
        return array[0];
    } else {
        return [];
    }
};
export const randomNumber = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const simpleSort = (a: any, b: any): number => {
    const simpleCompare = (
        a: any,
        b:any
    ) => {
        if (a > b) return 1;
        else if (b < a) return -1;
        else return 0;
    };
    if (typeof a === 'number' && typeof b == 'number') {
        return a - b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b);
    } else if (typeof a === 'object' && typeof b === 'object') {
        return simpleCompare(a, b);
    } else {
        return simpleCompare(a, b);
    }
};
//Alias function
export const simpleSortAscending = (
    a: any,
    b: any
): number => {
    return simpleSort(a, b);
};
//reverse function
export const simpleSortDescending = (
    a: any,
    b: any
): number => {
    return simpleSort(b, a);
};