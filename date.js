// const daty = new Date().toISOString().split('T')[0];
// document.getElementById('demo').innerHTML = daty;
const date = new Date(2020, 0, 18);  // 2009-11-10
const month = date.toLocaleString('default', { month: 'long' });
document.getElementById('demo').innerHTML = month;

