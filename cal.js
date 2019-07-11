const calculator = document.querySelector('.calculator');

const results = document.querySelector('.results');

function calcNum(n) {
  results.innerHTML += n;

  if (n === 'C') {
    results.innerHTML = '0';
  }
}
function doubleIcon() {
  if (results.innerHTML === '0') {
    results.innerHTML = '';
  } else if (
    results.innerHTML[0] === '*' ||
    results.innerHTML[0] === '+' ||
    results.innerHTML[0] === '-' ||
    results.innerHTML[0] === '/'
  ) {
    results.innerHTML = '';
  } else if (results.innerHTML.length > 13) {
    results.innerHTML = '';
  }
}

calculator.addEventListener('click', e => {
  doubleIcon();
  if (e.target.closest('.one')) {
    calcNum(1);
  } else if (e.target.closest('.two')) {
    calcNum(2);
  } else if (e.target.closest('.three')) {
    calcNum(3);
  } else if (e.target.closest('.four')) {
    calcNum(4);
  } else if (e.target.closest('.five')) {
    calcNum(5);
  } else if (e.target.closest('.six')) {
    calcNum(6);
  } else if (e.target.closest('.seven')) {
    calcNum(7);
  } else if (e.target.closest('.eight')) {
    calcNum(8);
  } else if (e.target.closest('.nine')) {
    calcNum(9);
  } else if (e.target.closest('.zero')) {
    calcNum(0);
  } else if (e.target.closest('.plus')) {
    calcNum('+');
  } else if (e.target.closest('.minus')) {
    calcNum('-');
  } else if (e.target.closest('.multiply')) {
    calcNum('*');
  } else if (e.target.closest('.divide')) {
    calcNum('/');
  } else if (e.target.closest('.reset')) {
    calcNum('C');
  } else if (e.target.closest('.equal')) {
    if (results.innerHTML.length > 0) {
      results.innerHTML = eval(results.innerHTML);
    } else {
      results.innerHTML = 0;
    }
  }
});
