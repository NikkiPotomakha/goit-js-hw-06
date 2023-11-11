const categoryList = document.querySelector(".categories");
const listItem = document.querySelector(".item");
console.log("Number of categories", listItem.length);

// Calculate

const items = document.querySelectorAll("#categories .item");

items.forEach((item) => {
  const headerText = item.querySelector("h2").textContent;
  const numberOfElements = item.querySelectorAll("li").length;

  console.log("Categories: ${headerText}");
  console.log("Elements: ${numberOfElements}");
});
