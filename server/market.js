const moment = require('moment');

const marketPositions = [
  {"date": "10-02-2019", "close": 68.55, "open": 74.55,"company":"Honeywell"},
  {"date": "09-02-2019", "close": 74.55, "open": 69.55,"company":"Qualcom"},
  {"date": "08-02-2019", "close": 69.55, "open": 62.55,"company":"Yahoo"},
  {"date": "07-02-2019", "close": 62.55, "open": 56.55,"company":"Intel"},
  {"date": "06-02-2019", "close": 56.55, "open": 59.55,"company":"google"},
  {"date": "05-02-2019", "close": 59.86, "open": 65.86,"company":"microsoft"},
  {"date": "04-02-2019", "close": 62.62, "open": 65.62,"company":"facebook"},
  {"date": "03-02-2019", "close": 64.48, "open": 60.48,"company":"gap"},
  {"date": "02-02-2019", "close": 60.98, "open": 55.98,"company":"at&t"},
  {"date": "01-02-2019", "close": 58.13, "open": 53.13,"company":"ca"},
  {"date": "30-01-2019", "close": 68.55, "open": 74.55,"company":"hcl tech"},
  {"date": "29-01-2019", "close": 74.55, "open": 69.55,"company":"Honeywell"},
  {"date": "28-01-2019", "close": 69.55, "open": 62.55,"company":"Qualcom"},
  {"date": "27-01-2019", "close": 62.55, "open": 56.55,"company":"Yahoo"},
  {"date": "26-01-2019", "close": 56.55, "open": 59.55,"company":"Intel"},
  {"date": "25-01-2019", "close": 59.86, "open": 65.86,"company":"google"},
  {"date": "24-01-2019", "close": 62.62, "open": 65.62,"company":"microsoft"},
  {"date": "23-01-2019", "close": 64.48, "open": 60.48,"company":"facebook"},
  {"date": "22-01-2019", "close": 60.98, "open": 55.98,"company":"gap"},
  {"date": "21-01-2019", "close": 58.13, "open": 53.13,"company":"at&t"}
];

let counter = 0;

function updateMarket() {
  const diff = Math.floor(Math.random() * 1000) / 100;
  const lastDay = moment(marketPositions[0].date, 'DD-MM-YYYY').add(1, 'days');
  let open;
  let close;

  if (counter % 2 === 0) {
    open = marketPositions[0].open + diff;
    close = marketPositions[0].close + diff;
  } else {
    open = Math.abs(marketPositions[0].open - diff);
    close = Math.abs(marketPositions[0].close - diff);
  }

  marketPositions.unshift({
    date: lastDay.format('DD-MM-YYYY'),
    open,
    close
  });
  counter++;
}

module.exports = {
  marketPositions,
  updateMarket,
};
