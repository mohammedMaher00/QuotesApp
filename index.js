var arrayOfQuotes = [
    {'author': 'Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken.'
    },
    {'author': 'Albert Einstein', 
     'quote': "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe"
    },
    {'author': 'Frank Zappa', 
     'quote': 'So many books, so little time.'
    },
    {'author': ' Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul.'
    },
    {'author': 'Mae West', 
     'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {'author': 'Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world.'
    },
    {'author': ' Mark Twain', 
     'quote': "If you tell the truth, you don't have to remember anything."
    },
]


var x;


function Quotegenerateor(){
    
  
do {
    var random =Number.parseInt(Math.random()*arrayOfQuotes.length);
} while (x==random);
x=random;




document.getElementById("quote").innerHTML=`"${arrayOfQuotes[random].quote}"`;
document.getElementById("author").innerHTML=`--${arrayOfQuotes[random].author}`;

}





