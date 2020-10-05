/*
    JS basic method 

    Begin with "function"

    sytax: function method_name([args...]) {...}

    Call one method by an event on html code.

    Ex: onclick="changeVideo(1)"

        onclick is an Event
        called funciton name is chanegeVideo()
        (1) is an Argument for this funciton
 */

function changeVideo(index) {
    const p = document.getElementById('player');
    console.log(p, "player");

    switch (index) {
        case 1:
            document.getElementById('player').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            break;
        case 2:
            document.getElementById('player').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            break;
        case 3:
            document.getElementById('player').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            break;
        case 4:
            document.getElementById('player').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            break;
        case 5:
            document.getElementById('player').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            break;
    }
}