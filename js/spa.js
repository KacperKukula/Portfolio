// Instruction 
// makeRequest("[Your url]", Object) 
//Task: add callback

function makeRequest(_url, _container) {
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
                /*//////////////////////////////////////*/
                if(IsMainEject) {
                    tl = gsap.timeline()
                    tl.to(AJAX, 0.4, {opacity: 0, x: -20, onComplete: InnerHTML})
                        .set(AJAX, {x: 20})
                        .to(AJAX, 0.4, {opacity: 1, x: 0, onComplete: SwitchAnimation, onCompleteParams: [_url]})
                }
                else {
                    IsMainEject = true
                    InnerHTML()
                }

                function InnerHTML() { //callback
                    _container.innerHTML = http_request.response
                }
                /*//////////////////////////////////////*/
            } else {
                _container.innerHTML = "something is not right"
            }
        }
    };

    _url = encodeURIComponent(_url);
    http_request.open('GET', _url, true);
    http_request.send(null);
}

function SwitchAnimation(_url) {
    switch(_url) {
        case "content/aboutme.html":
            gsap.to(document.querySelector(".Image"), 0.5, {delay: 1.5, x: 20, y: 20})
            gsap.to(document.querySelector(".frame"), 0.5, {delay: 1.5, x: -20, y: -20})
        case "content/performance.html":
            break;
        case "content/none.html":
            break;
        case "content/none.html":
            break;
        default:
    }
    console.log(_url)
    gsap.to(AJAX, 0.5,{opacity: 1})
}