/*

Bus seat = 50
Micro Bus = 15
Rikshwa cost = 20 taka

Passenger = 234

Bus = 200
Micro bus = 30
Rikshawa = 4 * 20 = 80 taka

*/

function countRikshwaCost(passenger) {
  const bus = 50;
  const micro = 30;
  const rikshwaCost = 20;

  const remainingAfterBus = passenger % bus;
  const remainingAfterMicro = remainingAfterBus % micro;

  return remainingAfterMicro * rikshwaCost;
}

// console.log(countRikshwaCost(238));
console.log(countRikshwaCost(234));
