const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsList = document.querySelector(`ul`);
const list = document.createElement("ul");
ingredients.forEach((element) => {
    const li = document.createElement("li"); 
    li.innerHTML = element;
    list.appendChild(li);
});
ingredientsList.append(list);