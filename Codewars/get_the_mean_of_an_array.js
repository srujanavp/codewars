function getAverage(marks){
    
    const count=marks.length;
    let sum=0;
    for(let i=0;i<count;i++){
      sum=sum+marks[i];
    }
    const avg = sum/count;
    return Math.floor(avg);
  }