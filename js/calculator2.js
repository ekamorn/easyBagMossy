const productPrice = `#productprice`;
const downPercent = `#downPercent`;
const downPrice = `#downPrice`;
const total = `#total`;
const times = `#times`;
const rates = `#rates`;
const firstTime = `#firstTime`;
const nextTime = `#nextTime`;
const calBtn = `#cal-btn`;

const leastPrice = 5000;
const maxPrice = 500000;


// First orders
firstOrder();



$(calBtn).on('click', function(e) {

  let priceValue = $(productPrice).val();
  let downValue = $(downPercent).val();
  let period = $(times).val();
  let rate = $(rates).val();


  if (priceValue < leastPrice || priceValue > maxPrice)
  {
    alert(`โปรดกรอกราคาสินค้าในช่วงราคาที่เรากำหนด`);
  }
  else if (downValue < 10 || downValue > 50)
  {
    alert(`โปรดกรอกจำนวนเงินดาว์นให้อยู่ในช่วงที่เรากำหนด`);
  }
  else if (period <= 0 || period > 12)
  {
    alert(`โปรดกรอกจำนวนงวดผ่อนชำระให้อยู่ในช่วงที่เรากำหนด`);
  }
  else
  {
    const datas = calculate(priceValue, downValue, period, rate);
    console.log(datas);
    const down = datas[0];
    const totalData = datas[1];
    const eachPeriod = datas[2];
    const firstPeriod = datas[3];

    $(downPrice).html(down);
    $(total).html(totalData);
    $(nextTime).html(eachPeriod);
    $(firstTime).html(firstPeriod);
  }

  e.preventDefault();
});


export function checkLeastPrice (price)
{
  if (price < 5000)
  {
      price = leastPrice;
  }
  else if (price >= maxPrice)
  {
    price = maxPrice;
  }

  return price;
}



export function calculate(price, downValue, periods, rate)
{

  const downPrice = Math.floor(price / downValue);
  const total = (price - downPrice) * rate;
  const normalPeriod = Math.floor(total / periods);
  const firstPeriod = normalPeriod + downPrice;

  const data = [
    downPrice,
    total,
    normalPeriod,
    firstPeriod
  ];
  return data;
}




// First order
function firstOrder()
{
  let priceValue = $(productPrice).val();
  let downValue = $(downPercent).val();
  let period = $(times).val();
  let rate = $(rates).val();

  const datas = calculate(priceValue, downValue, period, rate);
  console.log(datas);
  const down = datas[0];
  const totalData = datas[1];
  const eachPeriod = datas[2];
  const firstPeriod = datas[3];

  $(downPrice).html(down);
  $(total).html(totalData);
  $(nextTime).html(eachPeriod);
  $(firstTime).html(firstPeriod);
}
