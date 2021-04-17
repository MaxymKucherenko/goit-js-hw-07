const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const Ul = document.querySelector(`ul`);
const list = document.createElement("ul");
ingredients.forEach((element) => {
    const li = document.createElement("li"); 
    li.innerHTML = element;
    list.appendChild(li);
});
Ul.append(list);