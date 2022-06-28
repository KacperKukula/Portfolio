// Instruction 
// makeRequest("[Your url]", Object) 
//Task: add callback

function makeRequest(url, _container) {
    http_request = false;

    //Ajax from MDN
    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/html');
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
        alert('HTTP request faulty');
        return false;
    }

    //What happen if request okay
    http_request.onreadystatechange = function() { 
        if (http_request.readyState == 4) {
            if(http_request.status==200) {
                _container.innerHTML = http_request.response
                SwitchAnimation(url)
            } else {
                _container.innerHTML = "something is not right"
            }
        }
    };

    url = encodeURIComponent(url);
    http_request.open('GET', url, true);
    http_request.send(null);
}

function SwitchAnimation(_url) {
    switch(_url) {
        case "content%2FAboutMe.html":
            gsap.to(document.querySelector(".Image"), 0.5, {delay: 1.5, x: 20, y: 20})
            gsap.to(document.querySelector(".frame"), 0.5, {delay: 1.5, x: -20, y: -20})
            break;
        case "":
            break;
        case "":
            break;
        case "":
            break;
        default:
    }
    console.log(_url)
}