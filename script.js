const questions = [
  { q: "Premium placed last 12 months?", a: ["Under $250k","$250k-$1M","$1M-$3M","$3M+"] },
  { q: "Need advanced underwriting?", a: ["Rarely","Sometimes","Often","Very often"] },
  { q: "Carrier access?", a: ["Limited","Adequate","Strong","Best"] },
  { q: "Platform support?", a: ["Low","Medium","Strong","Exceptional"] },
  { q: "Marketing support?", a: ["Limited","Some","Strong","Full"] },
  { q: "Primary goal?", a: ["Revenue","Support","Expand","All"] }
];

let current = 0;

function render() {
  if(current >= questions.length){
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("result").classList.remove("hidden");
    return;
  }

  const q = questions[current];
  document.getElementById("quiz").innerHTML = `
    <div class="mb-6">
      <p class="mb-3">${q.q}</p>
      <div class="grid grid-cols-2 gap-3">
        ${q.a.map(a=>`<button onclick="next()" class="p-3 bg-slate-800 rounded hover:bg-blue-600">${a}</button>`).join("")}
      </div>
    </div>
  `;
}

function next(){
  current++;
  render();
}

render();
