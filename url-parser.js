"use strict"

function parseParts(urlFormat, urlInstanceParts){
  let res={};
  // splits urlFormat and urlInstance on '/'
  let urlInstanceArr = urlInstanceParts.split('/'); 
  let urlFormatArr = urlFormat.split('/');  

  // For each part to extract, add the key and the value to the response.
  // Same format = same index for the parts to extract
  urlFormatArr.forEach( (x, i) => {
    if (x[0]== ':'){
      res[x.slice(1)]=urlInstanceArr[i]; 
    }
  });

  return res;
}


function parseParams(urlInstanceParams){
  let res={};

  // Split param string
  let urlInstanceArr = urlInstanceParams.split('&'); 

  // For each param, add the key and the value to the response.
  urlInstanceArr.map( x => {
    let xArr=x.split('=');
    res[xArr[0]]= xArr[1];
  });

  return res;  
}


function parse(urlFormat, urlInstance){

    let url=urlInstance.split('?');

    //if there are parts, parse parts.
    let parts =  url[0] ? parseParts(urlFormat,url[0]) : {};

    //if there are params, parse parts.
    let params = url[1] ? parseParams(url[1]) : {};

    //create the response copying parts and params.
    let res=Object.assign({},parts,params);

    return res;
}    

module.exports = {
    parse
};
