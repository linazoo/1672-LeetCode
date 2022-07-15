var maximumWealth = function (accounts) {
  let highestAmount = 0;

  for (let i = 0; i < accounts.length; i++) {
    const amounts = accounts[i];
    let total = 0;

    for (let j = 0; j < amounts.length; j++) {
      total += amounts[j];
    }
    if (total > highestAmount) {
      highestAmount = total;
    }
  }
  return highestAmount;
};

const accounts = [
  [1, 5],
  [7, 3],
  [3, 5]
];

console.log(maximumWealth(accounts));
