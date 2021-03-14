// interface ArrayExtConstructor {
//     first(returnEmpty: boolean): ArrayExt | [] | null;
//
//     last(returnEmpty: boolean): ArrayExt | [] | null;
//
//     isEmpty(): boolean
// }
//
// var ArrayExt: ArrayExtConstructor
//
// function first(returnEmpty: boolean = true): ArrayExt | [] | null {
//     const array = this;
//     if (array.length > 0) {
//         return array[0];
//     } else if (returnEmpty) {
//         return [];
//     } else {
//         return null;
//     }
// }
//
// function last(returnEmpty: boolean = true): ArrayExt | [] | null {
//     const array = this.array;
//     const lastIndex = array.length - 1;
//     if (array.length > 0) {
//         return array[lastIndex];
//     } else if (returnEmpty) {
//         return []
//     } else {
//         return null;
//     }
// }
//
// function isEmpty(): boolean {
//     const array = this.array;
//     console.log("array.length, isEmpty", array.length)
//     return array.length <= 0
// }
//
// export default ArrayExt;