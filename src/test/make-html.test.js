import { describe, expect, it } from '@jest/globals';
import { makeTemplate, makeHTML, makeIndex } from '../make-html';

describe('makeTemplate', () => {
	it('Takes content for a website and wraps it with metadata and a title',() => {
		const input = makeTemplate('testTitle', 'testContent');
		const output = `
  <!doctype html>
  <html>
    <head>
      <meta charset='utf-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      <title>testTitle</title>
      <link rel='stylesheet' href='../styles.css' type='text/css'>
    </head>
    <body>
    <div class='wrapper'>
      testContent
    </div>
    </body>
  </html>`;
  		expect(input).toBe(output);
	});
});

describe('makeHTML', () => {
	it('Writes the content for a dataset webpage', () => {
		const input = makeHTML('H1',['688', '904', '607', '299'], `688 \n 904 \n 607 \n 299`);
		const output = `
<h1>H1</h1>
		<p>Frávik:62803</p>
		<p>Hæsta gildi:904</p>
		<p>Meðaltal:624.5</p>
		<p>Miðgildi:647.5</p>
		<p>Minnsta gildi:299</p>
		<p>Staðalfrávik:250.6052673029839</p>
		<p>Summu:2498</p>
		<p>Svið:605</p>
		<h2>Upprunalegu gögnin:</h2>
		<ul><li>688</li><li>904</li><li>607</li><li>299</li></ul>
		`
		expect(input).toBe(output);
	});
	it('Reacts to an empty dataset', () => {
		const input = makeHTML('H1',[''],'')
		const output = `
		<h1>H1</h1>
		<p>Engin nothæf gögn fundust</p>
		<ul><li></li></ul>
		`
	});
});

describe('makeIndex', () => {
	it('Generate content for the apps frontpage', () => {
		const input = makeIndex(['test', 'foo']);
		const output = `
		<ul>
		<li><a href='test.html'>test</a></li>
		<li><a href='foo.html'>foo</a></li>
		</ul>
		`
	});
});