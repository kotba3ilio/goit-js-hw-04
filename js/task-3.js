function getElementWidth(content, padding, border) {
  var contentNumber = Number.parseFloat(content.replace('px', ''));
  var paddingNumber = Number.parseFloat(padding.replace('px', ''));
  var borderNumber = Number.parseFloat(border.replace('px', ''));
  return (paddingNumber * 2) + (borderNumber * 2) + contentNumber;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));