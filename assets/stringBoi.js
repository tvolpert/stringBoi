//(function(){//immediately-invoked, anonymous function to provide scope
var version = '0.1.0';
console.log('stringBoi v '+version);
    //helper functions to minimize typing (heck jQuery)
    function $qs(selector) {
        return document.querySelector(selector)
    }
     function $qsAll(selector) {
        return document.querySelectorAll(selector)
    }

document.addEventListener('DOMContentLoaded', function() { 
   populatePitches(); 
});

function populatePitches() {
    fetch('data/notes.json')
    .then(function(response){
        return response.json();
    }).then(function(rsp){
       return  console.log(rsp)
    }) 
} 
    
   
//})();  