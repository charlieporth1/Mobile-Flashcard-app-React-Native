export default class ArrayExt extends Array {
    first(returnEmpty: boolean = true) {
        const array = this || [];
        if (array.length > 0) {
            return array[0];
        } else if (returnEmpty) {
            return [];
        } else {
            return null;
        }
    }

    last(returnEmpty: boolean = true) {
        const array = this || [];
        const lastIndex = array.length - 1;
        if (array.length > 0) {
            return array[lastIndex];
        } else if (returnEmpty) {
            return []
        } else {
            return null;
        }
    }

    isEmpty() {
        const array = this || [];
        return array.length <= 0
    }
}