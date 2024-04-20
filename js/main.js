const boxes = document.querySelector('.boxes');




//ciclo for per stampare
for (let i = 1; i <= 100; i++) {

//creazione div
  const box = document.createElement('div');
  box.classList.add('box');
  
//collegamento tra boxes e box
  boxes.append(box);
  
  //i numeri sia multipli di 3 che di 5  “FizzBuzz”
  if (i % 15 === 0) {
    
    box.classList.add('Fizzbuzz');
    box.append('FizzBuzz');

    //numeri multimpli di 3 Fizz
  } else if (i % 3 === 0) {
    
    box.classList.add('Fizz');
    box.append('Fizz');
    
    //numeri multipli di 5 Buzz
  } else if (i % 5 === 0 ) {
   
    box.classList.add('Buzz');
    box.append('Buzz');

//altri numeri
} else {
    box.append(i);
   
  }

  
}