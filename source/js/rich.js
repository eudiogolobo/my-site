var hexColorInput = document.getElementsByClassName('focus'),
colorSelector = document.getElementById('input-color');

var updateHex ;

(updateHex = function () {
  
    var fi = $(hexColorInput).children()
    fi.css('color',colorSelector.value);
})();

colorSelector.addEventListener('input', updateHex);

function updateSelector() {
var val = hexColorInput.value;
// adiciona o '#'
if (val.charAt(0) !== '#') val = '#' + val;

// expande uma cor desse tamanho: fff
if (val.length === 4) {
    var red = val.charAt(1);
    red += red;
    var green = val.charAt(2);
    green += green;
    var blue = val.charAt(3);
    blue += blue;

    val = '#' + red + green + blue;
}

colorSelector.value = val;
}


['cut', 'keyup', 'paste'].forEach(function(evt) {
hexColorInput.addEventListener(evt, updateSelector);
});

