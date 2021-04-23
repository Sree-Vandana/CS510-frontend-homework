// Enter your code here
function submitURL(){

  let ele = document.getElementById("comments").value.trim();
  let sub_ele_index = ele.indexOf("?");
  let url_regex = /^((http|https):\/\/(www\.))[a-zA-Z0-9-@:]+\.[a-zA-Z0-9\/\_\-]+\.?[a-zA-Z0-9]*/;
  // /((http|https):\/\/)(www\.)[a-zA-Z0-9-@:]+\.[a-zA-Z0-9\/\_\-]+\.?[a-zA-Z0-9]*/;
  let href_str = ""
  let param_str = ""

  if(sub_ele_index == -1){  // if no ?
    href_str = ele;
  }
  else if(sub_ele_index != -1){  // if ? is there
    href_str = ele.substring(0, sub_ele_index);
    param_str = ele.substring(sub_ele_index+1, ele.length);
  }

  if(!url_regex.test(href_str)){  // if href url did not match regex
    window.alert("Enter valid URL");
  }
  else{     // if valid href
    console.log("href = "+ href_str);
    // console.log("param str = "+ param_str);
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
  // console.log(param_arr);
  // console.log(param_arr.length);
  if(param_arr.length != 0)   // if missing parameter values
    window.alert(`value missing for "${param_arr}". Please enetr complete valid URL.`);
  else{ // every thing ok with param
    for(val in p_values)
      console.log(p_values[val]);
  }
  }
  

  // let param = param_str.split("&")
  // for(let i=0; i<param.length; i++){
  //   console.log(param[i].replace("=", ": "));
  // }
  // console.log(typeof param);

  
 


  // console.log("test yrl format = "+url_regex.test(ele));
  
  // console.log("? "+sub_ele_in);
  // console.log("--> "+ele.substring(sub_ele_in+1, ele.length));

  // const url = new URL('htpp://example.com/path/index.html?name=sree');
  // console.log("href = "+url.href);
  // console.log("search = "+url.search);

  return false;
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
