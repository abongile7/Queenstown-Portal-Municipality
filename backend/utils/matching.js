const tokenize = (text) => (text || '').toLowerCase().split(/\W+/).filter(Boolean);

function cosineSimilarity(a, b) {
  const terms = new Set([...Object.keys(a), ...Object.keys(b)]);
  let dot = 0;
  let magA = 0;
  let magB = 0;

  for (const term of terms) {
    const av = a[term] || 0;
    const bv = b[term] || 0;
    dot += av * bv;
    magA += av * av;
    magB += bv * bv;
  }

  if (!magA || !magB) return 0;
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

function vectorize(text) {
  const freq = {};
  for (const token of tokenize(text)) freq[token] = (freq[token] || 0) + 1;
  return freq;
}

function calculateMatchScore(resumeText, jobText) {
  const score = cosineSimilarity(vectorize(resumeText), vectorize(jobText));
  return Number(score.toFixed(4));
}

module.exports = { calculateMatchScore };
