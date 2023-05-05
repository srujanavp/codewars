class SmallestIntegerFinder {
    findSmallestInt(arr) {
      let sn=arr[0];
      for(let i=1;i<arr.length;i++)
        {
          if(arr[i]<sn)
            sn=arr[i];
        }
      return sn;
    }
  }