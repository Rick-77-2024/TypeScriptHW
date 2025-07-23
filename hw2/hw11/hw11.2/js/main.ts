// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні
// // бути список під час відображення.

interface Recipe {
    [key: string]: string | number | any[];
}

fetch(link)
    .then(value => value.json())
    .then((recipesObj: { recipes: Recipe[] }) => {
        let { recipes } = recipesObj;
        console.log(recipes);

        recipes.forEach((recipe: Recipe) => {
            const ulRecipe: HTMLUListElement = document.createElement('ul');
            food.appendChild(ulRecipe);
            console.log(recipe);
            for (const key in recipe) {
                const liRecipe: HTMLLIElement = document.createElement('li');
                ulRecipe.appendChild(liRecipe);

                if (typeof recipe[key] === 'object' && Array.isArray(recipe[key])) {
                    const ulAdditInfo: HTMLUListElement = document.createElement('ul');
                    ulAdditInfo.textContent = `${key}`;
                    liRecipe.appendChild(ulAdditInfo);
                    let info: any[] = recipe[key];
                    info.forEach((anyItem: any) => {
                        const any: HTMLLIElement = document.createElement('li');
                        any.textContent = `${anyItem}`;
                        ulAdditInfo.appendChild(any);
                    });
                } else {
                    liRecipe.textContent = `${key}:  ${recipe[key]}`;
                }
            }
        });
    });
