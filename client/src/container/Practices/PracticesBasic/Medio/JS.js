export function logicaMedio (str) {
    let arr = str.split(',');
    arr.forEach((e, i) => arr[i] = parseInt(e));

    let div = arr.length / 2;

    if (arr.length % 2 === 0) return arr[div-1]
    else return arr[(Math.ceil(div))-1];
};