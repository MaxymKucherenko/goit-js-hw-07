const categories = document.querySelectorAll(`li.item`);
categories.forEach((element) => {
  const h2 = element.querySelector(`h2`);
  const li = element.querySelectorAll(`li`);
  console.log("Категория:", h2.textContent);
  console.log("Количество элементов:", li.length);
});

