const fs = require('fs/promises');
const path = require('path');
const pdfParse = require('pdf-parse');

function extractEmail(text) {
  return text.match(/[\w.-]+@[\w.-]+\.[A-Za-z]{2,}/)?.[0] || '';
}

function extractPhone(text) {
  return text.match(/(\+27|0)\d{9}/)?.[0] || '';
}

function extractName(text) {
  return text.split('\n').map((line) => line.trim()).find((line) => /^[A-Za-z]+\s+[A-Za-z]+/.test(line)) || '';
}

async function extractText(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const file = await fs.readFile(filePath);
  if (ext === '.pdf') {
    const parsed = await pdfParse(file);
    return parsed.text;
  }
  return file.toString('utf8');
}

async function parseResume(filePath) {
  const text = await extractText(filePath);
  return {
    name: extractName(text),
    email: extractEmail(text),
    phone: extractPhone(text),
    education: text.match(/education[\s\S]{0,500}/i)?.[0] || '',
    skills: text.match(/skills?[\s\S]{0,500}/i)?.[0] || '',
    experience: text.match(/experience[\s\S]{0,800}/i)?.[0] || '',
    rawText: text
  };
}

module.exports = { parseResume };
