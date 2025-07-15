export const scrollToSection = (id) => {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 100); // slight delay ensures DOM is rendered
};
