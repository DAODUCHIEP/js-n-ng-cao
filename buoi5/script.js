//map: => new []
const number = [1, 2, 3, 4];
const newnumber = number.map((number) =>{
    return number * 2;
});

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
  ];

const companyinfo = companies.map((company, index) =>{
    return {
        name: company.name,
        category: company.category,
        timer: `Start: ${company.start}, End: ${company.end}`,

    };
});

console.log(companyinfo);

const newcompanies = companies.filter((company)=>{
    (company) => company.start >= 1980 && company.end <= 2005
});


///shoping cart example (object)
const cart = [
    {id: 1, name: 'Product1',price: 130},
    {id: 2, name: 'Product1',price: 140},
    {id: 3, name: 'Product1',price: 160},
];

const total = cart.reduce(function (acc, product) {
    return acc + product.price;
  }, 0);
  
  console.log(total);