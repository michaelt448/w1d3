var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var listOfCompanyName = {};
  for(let company in companySalesData) {
    var currentCompanyName = companySalesData[company].name;
    var currentCompanyProvince = companySalesData[company].province;
    var currentCompanySales = sumFold(companySalesData[company].sales);
    //console.log(currentCompanySales);
    var currentCompanyTaxes = salesTaxRates[currentCompanyProvince] * currentCompanySales;
    //console.log(Object.keys(listOfCompanyName).lastIndexOf(currentCompanyName));
    if (Object.keys(listOfCompanyName).lastIndexOf(currentCompanyName) === -1){
        listOfCompanyName[currentCompanyName] = {totalSales: currentCompanySales, totalTaxes: currentCompanyTaxes};
        //console.log("I made it here !!!");
      }
    else {
        //console.log(listOfCompanyName[currentCompanyName]);
        listOfCompanyName[currentCompanyName].totalSales += currentCompanySales;
        listOfCompanyName[currentCompanyName].totalTaxes += currentCompanyTaxes;
    }
  }
  console.log(listOfCompanyName);
}

function sumFold(array) {
  //console.log(array);
  var sum = 0;
  for(int in array) {
    sum += array[int];
  }
  //console.log(sum)
  return sum;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/