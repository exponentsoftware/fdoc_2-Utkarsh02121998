const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]

 const arrayOfArrays=[];
 for(i=0;i<countries.length;i++){

     const name= countries[i][0].toUpperCase() + countries[i].substring(1).toLowerCase(0)
     const firstThreeLetters=countries[i].slice(0,3)
     const noOfLetters=countries[i].length
    
    arrayOfArrays.push([name,firstThreeLetters,noOfLetters])
 }

 
 console.log(arrayOfArrays)
 
  