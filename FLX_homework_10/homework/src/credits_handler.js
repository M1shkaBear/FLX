function userCard(key) {
  let balance = 100;
  let limit = 100;
  let historyLog = [];
  let taxes = 0.005;

  let getCardOptions = function getCardOption() {
    return { key, balance, limit, historyLog };
  };

  let putCredits = function putCredit(put) {
    balance += put;
    historyLog.push({
      operationType: "Recieved Credits",
      credits: put,
      operationTime: new Date().toLocaleString()
    });
  };

  let setTransactionLimit = function setTransactionLim(lim) {
    limit = lim;
    historyLog.push({
      operationType: "Transaction limit change",
      credits: lim,
      operationTime: new Date().toLocaleString()
    });
  };

  let takeCredits = function takeCredit(take) {
    if (take >= limit && take > balance) {
      console.log("error");
    } else {
      balance = balance - take;
    }
    historyLog.push({
      operationType: "Withdrawal of Credits",
      credits: take,
      operationTime: new Date().toLocaleString()
    });
  };

  let transferCredits = function transferCredit(trans, card) {
    if (balance >= trans + trans * taxes) {
      if (limit >= trans) {
        takeCredits(trans + trans * taxes);
        card.putCredits(trans);
      } else {
        console.log("error");
      }
    } else {
      console.log("error", balance, "<", trans);
    }
  };

  return {
    getCardOptions: getCardOptions,
    putCredits: putCredits,
    takeCredits: takeCredits,
    setTransactionLimit: setTransactionLimit,
    transferCredits: transferCredits
  };
}

class UserAccount {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.maxcards = 3;
  }
  addCard() {
    if (this.cards.length >= this.maxcards) {
      console.log("error", this.cards.length);
    } else {
      this.cards.push(userCard(this.cards.length + 1));
    }
  }
  getCardByKey(index) {
    return this.cards[index - 1];
  }
}
