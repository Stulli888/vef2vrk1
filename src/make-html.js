import { variance, max, mean, median, min, std, sum} from 'mathjs';

export function makeHTML(file, content, RAW_DATA) {
  const head = `<h1>${file ?? ''}</h1>`;
  let body = '';
  if (content != '') {
    body += `
		<p>Frávik:${variance(content)}</p>
		<p>Hæsta gildi:${max(content)}</p>
		<p>Meðaltal:${mean(content)}</p>
		<p>Miðgildi:${median(content)}</p>
		<p>Minnsta gildi:${min(content)}</p>
		<p>Staðalfrávik:${std(content)}</p>
		<p>Summu:${sum(content)}</p>
		<p>Svið:${max(content) - min(content)}</p>
		`;
  } else {
    body = '<p>Engin nothæf gögn fundust</p>';
  }

  let foot = '';
  const data = RAW_DATA.split('\n');
  for (let i = 0; i < data.length; i++) {
    const ele = `<li>${data[i]}</li>`;
    foot += ele;
  }

  const html =
    head +
    body +
    `<h2>Upprunalegu gögnin:</h2>
								<ul>${foot}</ul>`;
  return html;
}

export function makeIndex(files) {
  let list = '';
  files.forEach((element) => {
    const link = `<li><a href='${element}.html'>${element}</a></li>`;
    list += link;
  });
  return `<ul>${list}</ul>`;
}
export function makeTemplate(title, body) {
  return `
  <!doctype html>
  <html>
    <head>
      <meta charset='utf-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      <title>${title ?? ''}</title>
      <link rel='stylesheet' href='../styles.css' type='text/css'>
    </head>
    <body>
    <div class='wrapper'>
      ${body ?? ''}
    </div>
    </body>
  </html>`;
}
