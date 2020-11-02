var x = [];
var o = [];
var current = 0;
var done = false;
var click3 = (event) => {
  var id = event.target.id;
  var box = document.getElementById(id);
  if (box.value || done) {
    return; 
  }
  box.value = true;
  if (current === 0) {
    current = 1;
    box.className = 'box x';
    x.push(id);
    if ((x.includes(id[0] + '1') &&
      x.includes(id[0] + '2') &&
      x.includes(id[0] + '3')) ||
      
      x.includes('x' + id[1]) &&
      x.includes('y' + id[1]) &&
      x.includes('z' + id[1]) ||

      x.includes('x1') &&
      x.includes('y2') &&
      x.includes('z3')
    ) {
      // x wins!
      console.log('x wins!');
      done = true;
    }
  } else {
    current = 0;
    box.className = 'box o';
    o.push(id);
    if ((o.includes(id[0] + '1') &&
      o.includes(id[0] + '2') &&
      o.includes(id[0] + '3')) ||
      
      o.includes('x' + id[1]) &&
      o.includes('y' + id[1]) &&
      o.includes('z' + id[1]) ||

      o.includes('x1') &&
      o.includes('y2') &&
      o.includes('z3')
    ) {
      // o wins!
      console.log('o wins!');
      done = true;
    }
  }
  
};