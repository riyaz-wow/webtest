console.log("script running....");
// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

let moviesData = [
  {
    title: "Cococ",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content",
    imgUrl:
      "https://images.unsplash.com/photo-1587931338382-aecda7e43025?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8YU5jYVMwTWlkREl8fGVufDB8fHx8&auto=format&fit=crop&w=500",
  },
  {
    title: "Cococ",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content",
    imgUrl:
      "https://images.unsplash.com/photo-1592151450113-bdf5982da169?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fGFOY2FTME1pZERJfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500",
  },
  {
    title: "Cococ",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content",
    imgUrl:
      "https://images.unsplash.com/photo-1621891336630-b48679cb379a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8YU5jYVMwTWlkREl8fGVufDB8fHx8&auto=format&fit=crop&w=500",
  },
  {
    title: "Cococ",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content",
    imgUrl:
      "https://images.unsplash.com/photo-1555421689-43cad7100750?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGFOY2FTME1pZERJfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500",
  },
  
];

document.addEventListener("DOMContentLoaded", function () {
  const loaderIcon = `<div class="spinner-grow text-primary" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
<span class="visually-hidden">Loading...</span>
</div>`;
  let demo = document.getElementById("demo");

  console.log(demo);
  demo.innerHTML = moviesData.map(
    (item) => `<div class="card col">
<img src=${item.imgUrl} class='imgCon'>
<div class="card-body"  >

  <h5 class="card-title">${item.title}</h5>
  <p class="card-text">${item.desc}</p>
  <a href="#" id="laodBtn" class="btn btn-primary">Go Link</a>
  <div id="cardBody"></div>
</div>
</div>`
  );

  
});
