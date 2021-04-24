var div_ele = document.createElement("div");
div_ele.setAttribute("id", "result");
div_ele.setAttribute("class", "bg-light border rounded w-50 mx-auto mt-5 p-3");
div_ele.style.visibility = "hidden";
document.body.appendChild(div_ele);

function submitURL(){

  let ele = document.getElementById("comments").value.trim();
  let sub_ele_index = ele.indexOf("?");
  let url_regex = /^((http|https):\/\/(www\.))[a-zA-Z0-9-@:]+\.[a-zA-Z0-9\/\_\-]+\.?[a-zA-Z0-9]*/;
  let href_str = ""
  let param_str = ""

  // if no ? or no para after 
  if(sub_ele_index == -1 ){  
    href_str = ele;
  }

  else if(sub_ele_index == ele.length-1){
    href_str = ele.substring(0, sub_ele_index);
  }

  // if ? and param are there
  else{  
    href_str = ele.substring(0, sub_ele_index);
    param_str = ele.substring(sub_ele_index+1, ele.length);
  }

  // if href url did not match regex
  if(!url_regex.test(href_str)){  
    window.alert("Enter valid URL");
  }
  else{// if valid href
    console.log("href = "+ href_str);
    //create div
    createElement(href_str);
  }
  
  if(param_str){     
    console.log("yes param are there");

    const urlParams = new URLSearchParams(param_str);
    entries = urlParams.entries();
    param_arr = []
    p_values = []
    for(let entry of entries) {
      if(entry[1].length == 0){
        param_arr.push(entry[0]);
      }
      p_values.push(`${entry[0]}: ${entry[1]}`);
    }

    // if missing parameter values
    if(param_arr.length != 0)  
      window.alert(`value missing for "${param_arr}". Please enetr complete valid URL.`);
    else{ // every thing ok with param
      createElement_para(p_values);
      for(val in p_values)
        console.log(p_values[val]);
    }
    
  }
  
  return false;
}

function createElement(href_str){
  var div_ele = document.getElementById("result");
  div_ele.innerHTML = "";
  div_ele.style.visibility = "visible";

  var h1_ele = document.createElement("h1");
  h1_ele.setAttribute("class", "mt-2 mb-4");
  h1_ele.textContent = "Results";
  div_ele.appendChild(h1_ele);

  var h5_ele = document.createElement("h5");
  h5_ele.style.fontWeight = "bold";
  h5_ele.textContent = "URL";
  div_ele.appendChild(h5_ele);

  var p_ele = document.createElement("p");
  p_ele.textContent = href_str;
  div_ele.appendChild(p_ele);

}

function createElement_para(p_values){
  var div_ele = document.getElementById("result");

  var h5_eleq = document.createElement("h5");
  h5_eleq.style.fontWeight = "bold";
  h5_eleq.textContent = "Query Parameter";
  div_ele.appendChild(h5_eleq);

  var ul_ele = document.createElement("ul");
  ul_ele.style.listStyle="none";
  ul_ele.style.padding="0";
  div_ele.appendChild(ul_ele);

  for(val in p_values){
    var li_ele = document.createElement('li');
    li_ele.setAttribute("class", "para");
    li_ele.appendChild(document.createTextNode(`${p_values[val]}`));
    ul_ele.appendChild(li_ele);
  }

}


// Test Input #1:
// http://www.example.com

// Test Output
// http://www.example.com

// Test Input #2:
// http://www.example.com?name=r2d2

// Output
// http://www.example.com
// name: r2d2

// Test Input #3:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no
