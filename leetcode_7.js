// 2 -> every 2
// 3 -> every 4
// 4 -> every 6
// 5 -> every 8
// PAYPALISHIRING
//
// P   H
// A  SI
// Y I R
// PL  IG
// A   N
function convert(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    var numArrays = (numRows - 1) * 2;
    var f = "";
    for (var i = 0; i < numRows; i++) {
        if (i === 0 || i === numRows - 1) {
            for (var j = i; j < s.length; j += numArrays) {
                f += s[j];
                // console.log(j);
            }
        }
        else {
            for (var j = i; j < s.length; j += numArrays) {
                f += s[j - i * 2] && j - i * 2 >= 0 ? s[j - i * 2] : "";
                // console.log(j - i * 2);
                f += s[j] ? s[j] : "";
                // console.log(j);
            }
        }
    }
    return f;
}
var a = [
    { s: "PAYPALISHIRING", n: 3 },
    { s: "PAYPALISHIRING", n: 4 },
    { s: "A", n: 1 },
];
a.forEach(function (a, i) {
    console.log(a.n, a.s, convert(a.s, a.n));
    console.log("____");
});
// function convert(s: string, numRows: number): string {
//     if (numRows === 1) {
//         return s;
//     }
//     // each array has (n-1)*2 elements
//     var x: [string[]] = [[]];
//     var numArrays = (numRows - 1) * 2;
//     var currArray: number = 0;
//     var finalString: string = "";
//     // prepare arrays
//     for (let i = 0; i < (numRows - 1) * 2; i++) {
//         x.push([]);
//     }
//     // populate arrays
//     for (var i = 0; i < s.length; i++) {
//         x[Math.floor(i / numArrays)].push(s[i]);
//     }
//     // print
//     var j = 0;
//     for (let i = 0; i < numArrays; i++) {
//         j = 0;
//         while (x[i][j]) {
//             console.log(i, j, x[i][j]);
//             j++;
//         }
//     }
//     for (let i = 0; i < s.length; i++) {
//         if (i % numArrays <= numArrays / 2) {
//             finalString+=
//         }
//     }
//     return finalString;
// }
