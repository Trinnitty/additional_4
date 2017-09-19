module.exports = function multiply(first, second) {
  var arr1 = first.split('');
  var arr2 = second.split('');
  var k=0;
  var array = [];
  var arr = [];
  var t = 0;
  for(var i=arr2.length-1; i>=0;i--){
  	var temp = k;
  	var pop = arr2[i];
   
  	for(var j=arr1.length-1; j>=0; j--){
  		var mult  = arr1[j]*pop;
      arr[k]=mult;
  		k++;
  	};	
    k=temp;
    k++;
  	};
   
	return arr.reverse().join(''); 
  };
  

