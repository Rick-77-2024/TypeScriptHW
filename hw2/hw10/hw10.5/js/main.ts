// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається
// інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

const storage: string[] = JSON.parse(localStorage.getItem('data') || '[]');
storage.push(new Date().toString());
localStorage.setItem('data', JSON.stringify(storage));

