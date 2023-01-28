const contentBtns = [
  ...document.querySelectorAll("[data-content-id]"),
];
const subcontentIds = [
  ...document.querySelectorAll("[data-content]"),
];


contentBtns.map((btn) => {
  btn.addEventListener("click", (item) => {
    const btnId = btn.getAttribute(["data-content-id"]);

    const selectedContent = subcontentIds.find((subcontent) => {
      const subcontentId = subcontent.getAttribute(["data-content"]);

      if (btnId === subcontentId) {
        return subcontentId;
      }
    });

    setHiddenForAllTags();
    selectedContent.classList.remove("hidden");
  });
});

const setHiddenForAllTags = () => {
  subcontentIds.map((subcontent) => {
    subcontent.classList.add("hidden");
  });
};
