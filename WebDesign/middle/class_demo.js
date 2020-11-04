function change_iframe_display(val) {
  const p = document.getElementById("inner_html");
  console.log(p, "inner_html");

  switch (val) {
    case 1:
      document.getElementById("inner_html").innerHTML = '<iframe src="./w1/index.html"></iframe>';
      break;
    case 2:
      document.getElementById("inner_html").innerHTML = '<iframe src="./w1/pokemon.html"></iframe>';
      break;
    case 3:
      document.getElementById("inner_html").innerHTML = '<iframe src="./w2/w02-blog/blog.html"></iframe>';
      break;
    case 4:
      document.getElementById("inner_html").innerHTML = '<iframe src="./w2/w02-imgGallery/imgGallery.html"></iframe>';
      break;
    case 5:
      document.getElementById("inner_html").innerHTML = '<iframe src="./w3/task1/div.html"></iframe>';
      break;
    case 6:
      document.getElementById("inner_html").innerHTML = '<iframe src="./w3/task2/div_tku60.html"></iframe>';
      break;
    case 7:
      document.getElementById("inner_html").innerHTML = '<iframe src="./w3/task3/div2.html"></iframe>';
      break;
    case 8:
      document.getElementById("inner_html").innerHTML = '<iframe src="./w4/index.html"></iframe>';
      break;
    case 9:
      document.getElementById("inner_html").innerHTML = '<iframe src="./w5/nav.html"></iframe>';
      break;
    case 10:
      document.getElementById("inner_html").innerHTML = '<iframe src="./w6/index.html"></iframe>';
      break;
    case 11:
      document.getElementById("inner_html").innerHTML = '<iframe src="./w7/nav.html"></iframe>';
      break;
    case 12:
      document.getElementById("inner_html").innerHTML = '<iframe src="./w8/index.html"></iframe>';
      break;
  }
}
