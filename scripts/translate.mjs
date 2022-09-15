import translate from '@vitalets/google-translate-api';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mapLang = (lang) =>
  ({
    'en-gb': 'en',
    zh: 'zh-CN',
  }[lang] || lang);

console.log(`Adding translations for other languages sourcing from en.json...`);

const folder = path.join(__dirname, '../src/i18n/custom');

const translations = fs.readdirSync(folder).map((x) => ({
  file: x,
  lang: mapLang(x.split('.')[0]),
  changed: false,
  json: JSON.parse(fs.readFileSync(path.join(folder, x), 'utf-8')),
}));

const translationEn = translations.find((x) => x.file === 'en.json');

const files = translations.filter((x) => x !== translationEn);

for (const [k, v] of Object.entries(translationEn.json)) {
  const tasks = files.map(async (f) => {
    if (f.json[k]) return;
    console.log(`Translating "${k}" to ${f.lang}`);
    f.json[k] = (await translate(v, { to: f.lang })).text;
    f.changed = true;
  });
  await Promise.all(tasks);
}

const toSave = files.filter((x) => x.changed);
toSave.forEach((x) => fs.writeFileSync(path.join(folder, x.file), JSON.stringify(x.json, null, 2)));

console.log(`${toSave.length} files updated.`);
