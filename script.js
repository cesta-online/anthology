document.addEventListener("DOMContentLoaded", (event) => {
  insertTOCElement().then(() => generateTOC());
});

function insertTOCElement() {
  return new Promise((resolve, reject) => {
    try {
      // Create a new table-of-contents element
      var toc = document.createElement("table-of-contents");
      toc.innerHTML = `
      <h5>Contents</h5>
      <div class="toc-contents"></div>
      `;

      // Get the main element and the first article element
      var main = document.querySelector("main");
      var article = document.querySelector("article");

      // Insert the table-of-contents before the first article
      if (article) {
        article.prepend(toc);
      }

      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

function generateTOC() {
  const toc = document.querySelector(".toc-contents");
  const article = document.querySelector("article");
  const tags = ["sub-article-title", "h1", "h2", "h3"];
  const selectors = tags.join(", ");
  let headings = Array.from(article.querySelectorAll(selectors));
  let activeId = null;

  const addActiveClass = (id) => {
    if (activeId) {
      const activeTocLink = toc.querySelector(`[href="#${activeId}"]`);
      if (activeTocLink) {
        activeTocLink.classList.remove("active-toc-item");
      }
    }

    const tocLink = toc.querySelector(`[href="#${id}"]`);
    if (tocLink) {
      tocLink.classList.add("active-toc-item");
    }

    activeId = id;
  };

  const ul = document.createElement("ul"); // Single ul for all li
  toc.appendChild(ul);

  headings.forEach((heading, index) => {
    const id = `heading-${index}`;
    heading.setAttribute("id", id);

    const li = document.createElement("li");
    const tocLink = document.createElement("a");
    tocLink.setAttribute("href", `#${id}`);
    tocLink.textContent = heading.textContent;
    li.appendChild(tocLink);

    const tagIndex = tags.indexOf(heading.tagName.toLowerCase());

    // Add a class to the li to indicate its level
    li.className = `level-${tagIndex + 1}`;

    ul.appendChild(li); // Append all li to the single ul
  });

  // Add active class to the first heading initially
  addActiveClass("heading-0");

  window.addEventListener("scroll", () => {
    let topHeading = null;

    headings.forEach((heading, index) => {
      const bounding = heading.getBoundingClientRect();

      if (
        bounding.top >= 0 &&
        (topHeading === null ||
          bounding.top < topHeading.getBoundingClientRect().top)
      ) {
        topHeading = heading;
      }
    });

    if (topHeading) {
      addActiveClass(topHeading.getAttribute("id"));
    }
  });
}
