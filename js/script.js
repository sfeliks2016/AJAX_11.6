$(document).ready(function(){
    
// zmienne

var url = 'https://restcountries.eu/rest/v1/name/';

var countriesList = $('#countries');

// funkcja searchCountries();

searchCountries();

function searchCountries() {
    var countryName = $('#country-name').val(); // pobranie wartosci wpisanej przez usera i dodanie jej do zmiennej za pomoca funkcji val();
    
    //warunek sprawdzajacy czy pole formularza jest puste
    
    if(!countryName.length) countryName = 'Poland';
    
    
    //dodanie logiki wyszukiwania
    //metoda $.ajax
    
    $.ajax({
     dataType: "json",
     url: url + countryName,
     method: 'GET',
     success: showCountriesList
    
    })
    //pobieranie wyników
    //parametr resp - obiekt JSON
    
    function showCountriesList(resp){ 
        
    countriesList.empty();
        
    //wyswietlanie wyników
    // metoda forEach();
    
        resp.forEach(function(item) {
            // kod za pomoca ktorego tworzymy nowy element listy krajów
            $('#country').text(item.name).appendTo(countriesList);
            
            $('#capital').text(item.capital).appendTo(countriesList);
            
            $('#code').text('+' + item.callingCodes).appendTo(countriesList);
            
             $('#language').text(item.languages).appendTo(countriesList);
            
            $('#region').text(item.subregion).appendTo(countriesList);
        })
    }
    
    

}


// podpiecie ządania pod przycisk

$('#search').click(searchCountries);

    
        
});



