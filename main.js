const api_url ="https://friends-quotes-api.herokuapp.com/quotes/random ";
const Quote = document.getElementById('quote');
const char = document.getElementById('char');
const friends = document.getElementById('friends');
const emoji=document.getElementById('emoji');
    function getquotes(url){
        fetch(url).then(res => res.json()).then(data => {
         Quote.innerHTML=data.quote;
         char.innerHTML=data.character;
         emoji.innerHTML='';
         
            console.log(data);
        })
    };
    
  document.getElementById('generate').onclick=function generate(params) {
      getquotes(api_url);
  }
    