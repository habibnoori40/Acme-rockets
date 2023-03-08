const app = () => {
  const hamBurgerBtn = document.getElementById("hamburger-button");
  const mobileMenue = document.getElementById("mobile-menu");
  const icon = document.querySelector("#hamburger-button > div");
  console.log(icon);
  const toggleMenu = () => {
    let tokenPresent = hamBurgerBtn.classList.toggle("toggle-btn");
    mobileMenue.classList.toggle("flex");
    mobileMenue.classList.toggle("hidden");

    if (tokenPresent) {
      icon.classList.add("before:translate-y-0", "before:rotate-45", "after:translate-y-0", "after:-rotate-45", "bg-transparent", "rotate-[720deg]");
    } else {
      icon.classList.remove("before:translate-y-0", "before:rotate-45", "after:translate-y-0", "after:-rotate-45", "bg-transparent", "rotate-[720deg]");
    }
  };

  hamBurgerBtn.addEventListener("click", toggleMenu);
  mobileMenue.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", app);