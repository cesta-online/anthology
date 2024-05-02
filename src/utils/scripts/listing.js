function loadJsonData(containerSelector, jsonFilePath) {
  fetch(jsonFilePath)
    .then((response) => response.json())
    .then((data) => {
      const containerElement = document.querySelector(containerSelector);
      data.forEach((item) => {
        const listItem = document.createElement("div");
        listItem.innerHTML = `
          <h2>${item.title}</h2>
          <p>${item.description}</p>
          <img src="${item.img}" alt="${item.title}">
          <a href="${item.link}">Read More</a>
        `;
        containerElement.appendChild(listItem);
      });
    })
    .catch((error) => console.error("Error:", error));
}
