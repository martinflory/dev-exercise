"use strict"

function parseParts(urlFormat, urlInstanceParts){
  let res={};
  let urlInstanceArr = urlInstanceParts.split('/'); // splits with slashes
  let urlFormatArr = urlFormat.split('/');  // splits on slashes

  urlFormatArr.forEach( (x, i) => {
    if (x[0]== ':'){
      res[x.slice(1)]=urlInstanceArr[i]; 
    }
  });

  return res;
}


function parseParams(urlInstanceParams){
  let res={};

  let urlInstanceArr = urlInstanceParams.split('&'); // splits with ampersands

  urlInstanceArr.map( x => {
    let xArr=x.split('=');
    res[xArr[0]]= xArr[1];
  });

  return res;  
}


function parse(urlFormat, urlInstance){
    let res={};
    let url=urlInstance.split('?');
    let parts = parseParts(urlFormat, url[0]);
    let params = parseParams(url[1]);

    res=Object.assign({},parts,params);

    return res;
}    

module.exports = {
    parse
};
