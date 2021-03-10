Object.defineProperty(Array.prototype, 'first', { enumerable: false, value:function (returnNull: boolean = false): any | [] | null  {
    const array = this || [];
    if (array.length > 0) {
        return array[0];
    } else if (returnNull) {
        return [];
    } else {
        return null;
    }
}});

Object.defineProperty(Array.prototype,'last', { enumerable: false, value: function (returnNull: boolean = false): any | [] | null {
        const array = this || [];
        const lastIndex = array.length - 1;
        if (array.length > 0) {
            return array[lastIndex];
        } else if (returnNull) {
            return []
        } else {
            return null;
        }
    }
});

Object.defineProperty(Array.prototype, 'isEmpty',  { enumerable: false, value:function(): boolean {
    const array = this || [];
    return (array.length === 0)
}});