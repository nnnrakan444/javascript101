const Bookstore = 
[
    ['ID', 'Book Title', ' Author ', ' Price', 'Quantity'],
    [1, 'Start with why', 'Simon Sinek', 80.0, 13],
    [2, 'But how do it know', 'J.Clark Scott', 59.9, 22],
    [3, 'Clean Code', 'Robert Cecil Martin', 50.0, 5],
    [4, 'Zero to one', 'Peter Thiel', 45.0, 12],
    [5, 'You don\'t know JS', 'Kyle Simpson', 39.9, 9]
];
    
 function BookCheck()
{
for(let i = 1; i < Bookstore.length; i++)
    {
        for(let k = 0; k < Bookstore[i].length; k++)
        {
            console.log(Bookstore[i][k] + ' ');
        }
    }
}
    
//BookCheck();
    
let BookQ = Bookstore[1][4];
let BookName = Bookstore[1][1];
let Author = Bookstore[1][2];
if(BookQ > 0)
{
    console.log("There is " + BookQ + " Copy of: " + BookName + " By " + Author);
}
else
{
    console.log("The book has been sold");
}
    
let balance = 500;
let Bookp = Bookstore[1][3];
let Quantity = 3;
let Price = Bookp * Quantity;
let checkout = balance - Price;
if(BookQ > 0 && BookQ > Quantity && checkout >= 0)
{
    console.log("You Sucsessfully bought " + Quantity + " Copies of " + Author);
    BookQ = BookQ - Quantity;
    console.log("There is " + BookQ + " Copy of: " + BookName + " By " + Author);
}