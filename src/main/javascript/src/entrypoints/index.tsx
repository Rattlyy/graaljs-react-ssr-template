import {ReactNode} from "react";
import src from '@/index.css?inline'

export function Index({children}: { children: ReactNode }) {
    return <html lang={"en"} className={"dark"}>
    <head>
        <meta charSet="UTF-8"/>
        <link rel="icon" type="image/svg+xml" href="/vite.svg"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Vite + React + TS</title>
        {/* Inline the CSS as a base64-encoded string to prevent FOUCs */}
        <link rel="stylesheet" type="text/css" href={"data:text/css;base64," + btoa(src)}></link>
    </head>
    <body>
    <div id="root">
        {children}
    </div>
    </body>
    </html>
}