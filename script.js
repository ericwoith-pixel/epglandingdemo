document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('assessmentForm');
  const resultsCard = document.getElementById('resultsCard');
  const resetButton = document.getElementById('resetButton');

  if (!form || !resultsCard || !resetButton) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedNeeds = form.querySelectorAll('input[name="needs"]:checked');
    if (selectedNeeds.length === 0) {
      alert('Please select at least one area where additional support would help.');
      return;
    }

    resultsCard.classList.remove('hidden');
    resultsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  resetButton.addEventListener('click', () => {
    form.reset();
    resultsCard.classList.add('hidden');
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
