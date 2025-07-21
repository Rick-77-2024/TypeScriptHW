// Логічні розгалуження:

// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на
// цей день (можна замість плану на день, назву дня англійською).

let plan: string = String(prompt('Enter the week day in english'));

switch (plan) {
    case 'Monday':
        console.log('Plans on Monday');
        break;
    case 'Tuesday':
        console.log('Plans on Tuesday');
        break;
    case 'Wednesday':
        console.log('Plans on Wednesday');
        break;
    case 'Thursday':
        console.log('Plans on Thursday');
        break;
    case 'Friday':
        console.log('Plans on Friday');
        break;
    case 'Saturday':
        console.log('Plans on Saturday');
        break;
    case 'Sunday':
        console.log('Plans on Sunday');
        break;
    default:
        console.log('Please try again');
}
