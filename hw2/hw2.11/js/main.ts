// Логічні розгалуження:

// #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті,
//     які приводиться до false, а це 0 null undefined і тд).
console.log('Assign the value default to the error variable x');

let x1: any = 0;
if (!x1) {
    x1 = 'default';
}
