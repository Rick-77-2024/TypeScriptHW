// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

interface Product {
    id: number;
    title: string;
    price: number;
    quantity: number;
    discountPercentage: number;
    discountedTotal: number;
    total: number;
    thumbnail: string;
}
interface Cart {
    id: number;
    totalProducts: number;
    userId: number;
    total: number;
    discountedTotal: number;
    totalQuantity: number;
    products: Product[];
}
interface CartsResponse {
    carts: Cart[];
}
const divWrapper: HTMLDivElement = document.createElement('div');
divWrapper.classList.add('divBox');
document.body.appendChild(divWrapper);
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((cartsObjects: CartsResponse) => {
        const { carts } = cartsObjects;
        console.log(carts);
        for (const cart of carts) {
            const divBox: HTMLDivElement = document.createElement('div');
            divWrapper.append(divBox);
            divBox.innerText = `"id":${cart.id}
            'Total Products':${cart.totalProducts},
            'user Id':${cart.userId},
            'Total':${cart.total},
            'Discounted Total':${cart.discountedTotal},
            'Total Quantity':${cart.totalQuantity} 
            `;
            const ol: HTMLOListElement = document.createElement('ol');
            divBox.append(ol);
            for (const product of cart.products) {
                const li: HTMLLIElement = document.createElement('li');
                li.innerText = `
                'id':${product.id},
                'title':${product.title},
                'price':${product.price},
                'quantity':${product.quantity},
                'discountPercentage':${product.discountPercentage},
                'discountedTotal':${product.discountedTotal},
                'total':${product.total}`;
                const pict: HTMLImageElement = document.createElement('img');
                pict.src = product.thumbnail;
                ol.append(li, pict);
            }
        }
    });
