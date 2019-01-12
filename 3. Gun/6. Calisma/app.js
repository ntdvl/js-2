var x = navigator.plugins;
console.log(x); //Chrome PDF Plugin


function getChromePdfVersion() {
    var pdf = navigator.plugins.namedItem('Chrome PDF Plugin');
    if (typeof pdf != 'object') {
        // flash is not present
        return undefined;
    }
    if(pdf.filename){ 
        console.log(pdf.filename);
    } else {
        //No version property (e.g. in Chrome)
        return pdf.description.replace(/Shockwave Flash /,"");
    }
}
getChromePdfVersion();