import { readFileSync, writeFileSync } from 'node:fs'

const data = JSON.parse(
  readFileSync(new URL('./kaomoji.json', import.meta.url), 'utf8'),
)

// validate before write:
// hole in data renders as blank cell in
// every generated table, easy to miss in review.
const rows = Object.entries(data)
for (const [key, entry] of rows) {
  if (!entry.value || !entry.category || !entry.description) {
    throw new Error(`kaomoji.json: "${key}" need value, category, description`)
  }
}

// camelCase key -> Title Case label:
// split at each lower/digit -> upper
// boundary, then capitalize first char.
const title = (key) =>
  key
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/^./, (c) => c.toUpperCase())

// spread counts code points; .length counts UTF-16 units and skew astral
// chars, display width itself is pin by the no-fullwidth data rule.
const width = (cells) => Math.max(...cells.map((c) => [...c].length))
const pad = (cell, w) => cell + ' '.repeat(w - [...cell].length)

// first-appearance order of the category,
// no re-sorting: generated doc
// mirrors source layout.
const groups = []
for (const [key, entry] of rows) {
  const group = groups.find((g) => g.name === entry.category)
  const row = {
    name: `**${title(key)}**`,
    kaomoji: `\`${entry.value}\``,
    description: entry.description,
  }
  if (group) group.rows.push(row)
  else groups.push({ name: entry.category, rows: [row] })
}

const table = (group) => {
  const w = [0, 1, 2].map((i) =>
    width(group.rows.map((r) => [r.name, r.kaomoji, r.description][i])),
  )
  const line = (cells) =>
    `| ${cells.map((c, i) => pad(c, w[i])).join(' | ')} |`
  return [
    `## ${group.name}`,
    '',
    line(['Name', 'Kaomoji', 'Description']),
    // ':' is one cell of separator, hence width - 1 dashes
    line(w.map((n) => ':' + '-'.repeat(n - 1))),
    ...group.rows.map((r) => line([r.name, r.kaomoji, r.description])),
  ].join('\n')
}

const doc = [
  '# Kaomoji Reference',
  '',
  'Complete kaomoji reference for Nanoo Labs documentation',
  '',
  ...groups.flatMap((g) => [table(g), '']),
].join('\n')

writeFileSync(new URL('./KAOMOJI.md', import.meta.url), doc.trimEnd() + '\n')
console.log(`KAOMOJI.md: ${rows.length} entry, ${groups.length} kategori`)
