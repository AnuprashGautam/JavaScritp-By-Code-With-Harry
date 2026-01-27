// Quotes collection

const quotes = [
  {
    text: "Consistency beats talent when talent isn’t consistent.",
    author: "Unknown"
  },
  {
    text: "Code is read more than it is written.",
    author: "Robert C. Martin"
  },
  {
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman"
  },
  {
    text: "Every expert was once a beginner.",
    author: "Helen Hayes"
  },
  {
    text: "Debugging is twice as hard as writing the code in the first place.",
    author: "Brian Kernighan"
  },
  {
    text: "Focus on progress, not perfection.",
    author: "Unknown"
  },
  {
    text: "Good design is invisible.",
    author: "Dieter Rams"
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    text: "Make it work, make it right, make it fast.",
    author: "Kent Beck"
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson"
  },
  {
    text: "Small progress every day adds up to big results.",
    author: "Unknown"
  },
  {
    text: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs"
  },
  {
    text: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci"
  },
  {
    text: "Discipline is choosing what you want most over what you want now.",
    author: "Abraham Lincoln"
  },
  {
    text: "Build things. Break things. Learn things.",
    author: "Unknown"
  }
];


const quoteBox=document.querySelector('.quote');
const authorBox=document.querySelector('.author');

let randomQuote=quotes[Number.parseInt((Math.random()*100)%quotes.length)];

quoteBox.innerText=`${randomQuote.text}`;
authorBox.innerText=`-${randomQuote.author}`;

function changeQuote(){
    randomQuote=quotes[Number.parseInt((Math.random()*100)%quotes.length)];
    quoteBox.innerText=`${randomQuote.text}`;
    authorBox.innerText=`-${randomQuote.author}`;
}