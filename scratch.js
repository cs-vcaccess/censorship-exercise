const x = [
  {re: /zoom/gmi, rc: 'z---'},
  {re: /galvanize/gmi, rc: 'g--------'},
  {re: /mcsp/gmi, rc: 'm---'},
  {re: /garrett/gmi, rc: 'g------'},
  {re: /ross/gmi, rc: 'r---'},
  {re: /incompetent/gmi, rc: 'i----------'},
  {re: /unfunny/gmi, rc: 'u------'}
]
let text = "zoom to the primary channel which, within lies the galvanize corrupted mcsp has garrett ross in ruins. Maybe he is redacted incompetent some of them are unfunny"

x.forEach(y => text = text.replace(y.re, y.rc))

