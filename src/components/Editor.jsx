import React, { useState } from 'react';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import Code from './Code'

const Editor = () => {
    const [htmlCode, typehtmlCode] = useState("");
    const htmlEvent = (event) => {
        typehtmlCode(event.target.value);
    }

    const [cssCode, typecssCode] = useState("")
    const cssEvent = (eventTwo) => {
        typecssCode(eventTwo.target.value);
    }

    const [jsCode, typejsCode] = useState("")
    const jsEvent = (eventThree) => {
        typejsCode(eventThree.target.value);
    }

    const srcDoc = `<html>
                        <body>${htmlCode}</body>
                        <style>${cssCode}</style>
                        <script>${jsCode}</script>
    </html>`
    const logo = `<codeGlow />`;
    return (
        <>
            <h2 className="logo">{logo}</h2>
            <div className="code_main">
                <div className="singletype">
                    <Code logo="fab fa-html5" lang="HTML" >  </Code>
                    <textarea name="textarea" id="codearea" className="htmlarea" rows="30" colums="30" onChange={htmlEvent} spellCheck="false"></textarea>
                </div>
                <div className="singletype">
                    <Code logo="fab fa-css3-alt" lang="CSS" > </Code>
                    <textarea name="textarea" id="codearea" className="cssarea" rows="30" colums="30" onChange={cssEvent} spellCheck="false"></textarea>
                </div>
                <div className="singletype">
                    <Code logo="fab fa-js" lang="JS" > </Code>
                    <textarea name="textarea" id="codearea" className="jsarea" rows="30" colums="30" onChange={jsEvent} spellCheck="false"></textarea>
                </div>
            </div>
            
            <iframe srcDoc={srcDoc} title="my_frame" title="myWeb" id="myFrame"></iframe>
        </>
    )
}

export default Editor;