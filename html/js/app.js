var cl=console.log;

var infoDiv=document.getElementById('info');

result="";
countries.forEach(function(flag){
    result+=
    `<div class="col-lg-3">
    <div class="card">
        <figure class="movieCard p-4">
            <img class="img-fluid" alt="" src=${flag.flag}>
            <figcaption>
                <div class="row text-center">
                    <h2 class="text-warning text-center p-4">${flag.name}</h2> 
                </div>
                <div class="data-info">
                <div class="data text-left">
                <strong>Capital:</strong>${flag.capital}
                </div>
                <div class="data text-left">
                <strong>Language:</strong>${flag.languages}
                </div>
                <div class=" data text-left">
                <strong>Population:</strong>${flag.population}
                </div> 
                </div>
            
                          
            </figcaption>
        </figure>
     </div>
</div>`
    
})

infoDiv.innerHTML=result;

 // <div class=data>
                // ${flag.languages}
                // </div>
                // <div class=data>
                // ${flag.population}
                // </div>     