const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");
const output = document.getElementById("output");

function updateOutput() {
    const html = htmlCode.value;
    const css = `<style>${cssCode.value}</style>`;
    const js = `<script>${jsCode.value}<\/script>`;
    
    output.contentDocument.body.innerHTML = html + css + js;
}

htmlCode.addEventListener("input", updateOutput);
cssCode.addEventListener("input", updateOutput);
jsCode.addEventListener("input", updateOutput);

// Initialize with some default content (optional)
htmlCode.value = "<h1>Hello World</h1>";
cssCode.value = "h1 { color: red; }";
jsCode.value = "console.log('Hello, world!');";
updateOutput();
