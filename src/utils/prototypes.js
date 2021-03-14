// Array.prototype.first =
Object.defineProperty(Array.prototype, 'first', {
    get: function (): any | [] | null {
        const array = this || [];
        if (array.length > 0) {
            return array[0];
        } else
        {
            return [];
        }
    }, enumerable: false
});
    Object.defineProperty(Array.prototype, 'last', {
    get: function (): any | [] | null {
        const array = this || [];
        const lastIndex = array.length - 1;
        if (array.length > 0) {
            return array[lastIndex];
        } else
        {
            return [];
        }
    }, enumerable: false
});

Array.prototype.isEmpty =
    function(): boolean {
    const array = this || [];
    return (array.length === 0)
};
    Object.defineProperty(Array.prototype, 'isEmpty', {get: function(): boolean {
            const array = this || [];
            return (array.length === 0)
        }, enumerable: false});