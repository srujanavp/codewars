function noSpace(str){
    const arr=str.split(" ");
    
    let newarr=[];
    for(let i=0;i<arr.length;i++)
      {
        const trimstr=arr[i].trim();
        newarr.push(trimstr);
      }
    const finalstr=newarr.join("");
    return finalstr;
  }