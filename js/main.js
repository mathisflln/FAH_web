document.addEventListener('DOMContentLoaded', () => {
  const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');

  dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();

      const parent = trigger.closest('.nav-item.dropdown');

      // Ferme les autres menus ouverts
      document.querySelectorAll('.nav-item.dropdown.active').forEach(item => {
        if (item !== parent) item.classList.remove('active');
      });

      // Bascule l'état actif de celui-ci
      parent.classList.toggle('active');
    });
  });

  // Optionnel : ferme le menu si on clique en dehors
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item.dropdown')) {
      document.querySelectorAll('.nav-item.dropdown.active').forEach(item => {
        item.classList.remove('active');
      });
    }
  });
});


