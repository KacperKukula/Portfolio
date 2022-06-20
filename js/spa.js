function makeRequest(url) {  //request
    http_request = false;

    //Obsługa Ajax IE, from MDN
    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/html');
            // Przeczytaj o tym wierszu poniżej
        }
    } else if (window.ActiveXObject) { // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }
    if (!http_request) {
        //////////////////////////////////////!!!!!!!!!!!!!!!!
        alert('Poddaję się :( Nie mogę stworzyć instancji obiektu XMLHTTP');
        return false;
    }

    http_request.onreadystatechange = function() { 
        console.log(http_request);
    };

    http_request.open('GET', 'content/aboutme.html', true);
    http_request.send(null);
}

//listenersss

makeRequest("NULL")