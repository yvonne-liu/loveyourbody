var quotes = ['You are imperfect, permanently and inevitably flawed. And you are beautiful.― Amy Bloom',
              
'The human body is the best work of art. ― Jess C. Scott',
              
'You are not a mistake. You are not a problem to be solved. But you won\'t discover this until you are willing to stop banging your head against the wall of shaming and caging and fearing yourself. ― Geneen Roth',
              
'To lose confidence in one\'s body is to lose confidence in oneself. ― Simone de Beauvoir'
]

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quotehere').innerHTML = quotes[randomNumber];
}