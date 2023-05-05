var humanYearsCatYearsDogYears = function(humanYears) {
 
    let catage;
    let dogage;
    
    if(humanYears===1)
      {
        return [humanYears,15,15];
      }
    if(humanYears===2)
      {
        return [humanYears,24,24];
      }
    const exyears=humanYears-2;
    const excatyears=exyears*4;
    const exdogyears=exyears*5;
    
    return [humanYears,24+excatyears,24+exdogyears];
  }