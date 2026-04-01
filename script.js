const form = document.getElementById('assessmentForm');
const result = document.getElementById('result');

if (form && result) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const values = ['q1', 'q2', 'q3', 'q4'].map((id) => Number(document.getElementById(id).value || 0));
    const score = values.reduce((sum, value) => sum + value, 0);
    const name = document.getElementById('name').value.trim();
    const firstName = name ? name.split(' ')[0] : 'Thanks';

    let headline = '';
    let copy = '';

    if (score <= 6) {
      headline = 'There may be untapped opportunity here.';
      copy = `${firstName}, your responses suggest there could be meaningful upside in stronger access, support, and strategic alignment. This is the kind of gap a producer group relationship may help close.`;
    } else if (score <= 9) {
      headline = 'You may already have a solid base, with room to expand.';
      copy = `${firstName}, your responses indicate you are doing some things well already, but there may still be opportunities to strengthen support, uncover new resources, and position your practice more strategically.`;
    } else {
      headline = 'You appear to be thinking strategically already.';
      copy = `${firstName}, your responses suggest a strong foundation. A group like EPG may still add value by helping deepen carrier alignment, support sophisticated opportunities, and sharpen long-term positioning.`;
    }

    result.innerHTML = `<h3>${headline}</h3><p>${copy}</p>`;
    result.classList.remove('hidden');
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
