
const link = document.querySelector('a');
// value ek get kara
console.log(link.getAttribute('href'));

// value eka set kara
link.setAttribute('href','https://www.facebook.com');


const tab = document.querySelector('a');
tab.setAttribute('target','_blank');

// attibute eka remove kara
tab.removeAttribute('target');

