function getCount(str) {
    const arr=str.split("");
    let count=0;
    for(let i=0;i<arr.length;i++)
      {
       switch(arr[i])
         {
             case 'a':
             count++;
             break;
             case 'e':
             count++;
             break;
             case 'i':
             count++;
             break;
             case 'o':
             count++;
             break;
             case 'u':
             count++;
             break;
         }
      }
    return count;
  }