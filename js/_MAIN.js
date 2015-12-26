

//-------------------------------------------------------------------------------------------
//  INITIALISE
//-------------------------------------------------------------------------------------------

// LOAD PALETTE //
function loadPalette(paletteURL) {
    var pixelPalette = new PixelPalette(paletteURL);
    pixelPalette.Load(function (palette)  {

        for (var i=0; i<palette.length; i++) {
            setCSSColor(palette[i],i);
        }
    });
}


// SET CSS COLOR //
function setCSSColor(col,n) {

    var h;
    var name = "col" + n + "";
    var cols = document.getElementsByClassName(name);
    console.log(cols);
    for (h=0; h<cols.length; h++) {
        cols[h].style.color = "rgba("+col.R+","+col.G+","+col.B+",1)";
    }

    name = "bg" + n + "";
    var bgs = document.getElementsByClassName(name);
    console.log(bgs);
    for (h=0; h<bgs.length; h++) {
        bgs[h].style.backgroundColor = "rgba("+col.R+","+col.G+","+col.B+",1)";
    }

}

// INIT //
function init() {

    loadPalette("img/palette6.gif");

} // END INIT










