// Array.prototype.first =
Object.defineProperty(Array.prototype, 'first', {
    get: function (returnNull: boolean = false): any | [] | null {
        const array = this || [];
        if (array.length > 0) {
            return array[0];
        } else if (returnNull) {
            return [];
        } else {
            return null;
        }
    }, enumerable: false
});
// Array.prototype.last =
    Object.defineProperty(Array.prototype, 'last', {
    get: function (returnNull: boolean = false): any | [] | null {
        const array = this || [];
        const lastIndex = array.length - 1;
        if (array.length > 0) {
            return array[lastIndex];
        } else if (returnNull) {
            return []
        } else {
            return null;
        }
    }, enumerable: false
});

Array.prototype.isEmpty =
    function(): boolean {
    const array = this || [];
    return (array.length === 0)
}
    Object.defineProperty(Array.prototype, 'isEmpty', {get: function(): boolean {
            const array = this || [];
            return (array.length === 0)
        }, enumerable: false});