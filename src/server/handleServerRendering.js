import React from 'react';
import ReactDOMServer from 'react-dom/server';

const scripts = [];
const config = require('../../webpack/dev.config');
scripts.push(`${config.output.publicPath}${config.output.filename}`);

function renderHTML() {
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
                <title>React DnD Touch Backend Example</title>
            </head>

            <body>
                <div id="app" className="app" />
                { scripts.map((src, i) => <script src={ src } key={`script-${i}`} />) }
            </body>
        </html>
    );
}

export default function handleServerRendering(req, res, next) {
    const html = renderHTML();

    const doctype = '<!DOCTYPE html>';
    res.send(doctype + ReactDOMServer.renderToString(html));
}
