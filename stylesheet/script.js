
  document.addEventListener('DOMContentLoaded', function () {
    const filterDropdown = document.getElementById('attraction-filter');
    const attractionCards = document.getElementById('attraction-cards');

    filterDropdown.addEventListener('change', function () {
      const selectedAttraction = filterDropdown.value;

      // Show all cards
      const cards = attractionCards.getElementsByClassName('card');
      Array.from(cards).forEach(card => {
        card.style.display = 'block';
      });

      // Hide cards that don't match the selected attraction
      if (selectedAttraction !== 'all') {
        const selectedAttractionCards = attractionCards.getElementsByClassName(selectedAttraction);
        Array.from(selectedAttractionCards).forEach(card => {
          card.style.display = 'block';
        });

        // Hide cards of other attractions
        const otherAttractionCards = attractionCards.querySelectorAll('.card:not(.' + selectedAttraction + ')');
        Array.from(otherAttractionCards).forEach(card => {
          card.style.display = 'none';
        });
      }
    });
  });


