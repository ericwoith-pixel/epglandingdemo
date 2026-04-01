document.querySelectorAll('.question-group').forEach((group) => {
  const buttons = group.querySelectorAll('.quiz-option');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('selected-option'));
      btn.classList.add('selected-option');
    });
  });
});
