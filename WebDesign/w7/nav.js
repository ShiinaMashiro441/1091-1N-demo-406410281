function load_html(index) {

    const p = document.getElementById('show');
    console.log(p)

    switch(index) {
        case 1:
            p.innerHTML = "<iframe width=100% height=100% src='./w1/index.html' />";
            break;
        case 2:
            p.innerHTML = "<iframe width=100% height=100% src='./w1/pokemon.html' />";
            break;
        case 3:
            p.innerHTML = "<iframe width=100% height=100% src='./w2/blog.html' />";
            break;
        case 4:
            p.innerHTML = "<iframe width=100% height=100% src='./w4/index.html' />";
            break;
        case 5:
            p.innerHTML = "<iframe width=100% height=100% src='./w5/nav.html' />";
            break;
        case 6:
            p.innerHTML = "<iframe width=100% height=100% src='./w6/index.html' />";
            break;
    }
}