// bai one
function calculate() {
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);
  let sum = 0;
  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {  
      sum += i;
    }
  }
  document.getElementById("result").innerHTML = `Tổng các số nguyên tố trong khoảng từ ${a} đến ${b} là ${sum}`;
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// bai two
function numberOneTritangle() {
for (let i = 1; i <= 10; i++) {
    let total = '';
    for (let x = 1; x <= i; x++) {
    total += '*'
    }
    console.log(total);
}
}
numberOneTritangle()

