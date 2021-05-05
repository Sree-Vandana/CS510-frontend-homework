// URL to Game of Thrones API to fetch all characters
let url = 'https://thronesapi.com/api/v2/Characters';

let result = document.getElementById("results");

let addToDom = (element) => {
  result.setAttribute("style", "display: flex;flex-wrap:wrap;")

  let div_ele = document.createElement("div");
  div_ele.setAttribute("class", "card-char");
  div_ele.setAttribute("style", "display:inline-block;padding:10px;")
  

  let img_ele = document.createElement("img");
  img_ele.setAttribute("class", "card-img");
  img_ele.setAttribute("src", element.imageUrl);
  img_ele.setAttribute("style", "height:250px;width:250px;padding:3px;padding-bottom:10px;");
  // img_ele.setAttribute("width", "250px");
  // img_ele.setAttribute("height", "250px");
  // img_ele.setAttribute("class", "img-fluid img-thumbnail");
  div_ele.appendChild(img_ele);

  let div_ele2 = document.createElement("div");
  div_ele2.setAttribute("class", "card-info");
  div_ele.appendChild(div_ele2);
  div_ele2.setAttribute("style", "text-align:center;width:250px")

  let h4_ele = document.createElement("h4");
  h4_ele.textContent = element.fullName;
  div_ele2.appendChild(h4_ele);

  let p_ele = document.createElement("p");
  p_ele.textContent = element.title;
  div_ele2.appendChild(p_ele);

  result.appendChild(div_ele)

}

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    // image; fullname; title
    data.forEach(element => {
      console.log(element);
      addToDom(element);
    });
  })
  .catch((error) => {
      console.log(error);
  });
