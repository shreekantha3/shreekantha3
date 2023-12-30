

// function z() {
//     var a = 90;
//     function x() {
//         var b = 80;
//         function y() {
//             console.log(a,b);
//         }
//         y()
//     }
//     x()
// }
// z()

function x() {
    var i = 1;
     setTimeout(() => {
        console.log(i)
    }, 4000);
        
    }

    x()