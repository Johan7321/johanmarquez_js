// //primer punto
// var n = Math.round(Math.random()*100)
// console.log(n)
// for (i = 1 ; i <= n ; i++) {
//     d = n % i
//     if (d == 0) {
//         console.log(i+' es divisor de '+n)
//     }
// }

// //punto 2
// var n =Math.round(Math.random()*20)
// var c =0
// console.log(n)
// for (x=1; x<=n; x++) {
//     var d = n % x
//     if (d==0) {
//         c = c+1
//     }
// }
// if (c==2) {
//     console.log(n+" es primo")
// }


// //punto 3
// var n = Math.round(Math.random()*100),
//     c = 0,
//     p = 0
// console.log(n)
// for (i = 1 ; i < n ; i++) {
//     d = n % i
//     if (d == 0) {
//         c = c + i
//     }
// }
// if (c==n) {
//     console.log (n+' es un numero perfecto')
// } else {
//     console.log (n+' no es un numero perfecto')
// }

// //punto 4
// var n = 1,
//     c = 0,
//     p = 0
// console.log(n)
// for (i = 1 ; i <= 1000 ; n++) {
//     while (i<n) {
//         d = n % i
//         i += 1
//         if (d == 0) {
//             c = c + i
//             console.log(c)
//         }
//     if (c==n) {
//         console.log (n+' es un numero perfecto')
//     } else {
//         console.log (n+' no es un numero perfecto')
//     }
//     }
    
// }

// //punto 5
// var x=1
// var c =0
// for (n=1; n<=10; n++) {
//     while (x<n) {
//         var d = n % x
//         x = x + 1
//         if (d==0) {
//             c = c+1   
//         } 
//     }
//     if (c==2) {
//         console.log(n+" es primo")
//     }
// }


// // punto 8
// var n = Math.round(Math.random()*100)
// console.log(n)
// for (i = 1; i < n; i++) {
//     m = 5 * i
//     console.log('los multiplos de 5 son: '+m)
// }

// //punto 9
// var n = Math.round(Math.random()*10),
//     x = Math.round(Math.random()*50)
// console.log(x+' '+n)
// for (i = 1; i <= n; i++) {
//     x = x * x
// }
// console.log(Math.trunc(x))

// //punto 10
// var m = Math.round(Math.random()*100),
//     n = Math.round(Math.random()*100)
// console.log(m+' '+n)
// var r1= Math.trunc(m/n),
//     r2= n * r1,
//     r3= m - r2,
//     r4= n % r3
// if (r4==0) {
//     console.log('el m.c.d es '+r3)
// } 


// //punto 11
// var n = Math.round(Math.random()*100),
//     m = Math.round(Math.random()*100)




// //punto 12
// var x = Math.round(Math.random()*10+5)
// console.log(x)
// for (i=1; i<=x; i++) {
//     var p =""
//     for (j=0;j<i;j++){
//         p=p+"*"
//     }
//     console.log(p)
// }

// //punto 13
// var n = 6754
// for (i=1; i <=n; i++) {
//     d = n % 10
//     n = d / 10
//     console.log(d)
// }