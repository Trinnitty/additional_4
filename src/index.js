module.exports = function multiply(first, second) {
  var arr1 = first.split('');
  var arr2 = second.split('');
  var len = arr1.length + arr2.length;
  var arr = [];
  for(var t = 0; t<=len; t++){
    arr[t] = 0;
  }
  var k=0;
  for(var i=arr2.length-1; i>=0;i--){
  	var temp = k;
  	var pop = arr2[i];

  	for(var j=arr1.length-1; j>=0; j--){
  		var mult  = arr1[j]*pop;

      arr[k]=arr[k]+mult;
      if(arr[k]>9){
        var d1 = parseInt(arr[k]/10);
        var d2 = arr[k] - d1*10;
        arr[k] = d2;
        arr[k+1] = arr[k+1] + d1;
      };
  		k++;
  	};		
  	k = temp;
  	k++;
  	};
  
  for(var a = arr.length-1; a>=arr.length-1; a--){
    if(arr[a] == 0){
      arr.pop();
    }
  }

    return arr.reverse().join('');
  };
  

