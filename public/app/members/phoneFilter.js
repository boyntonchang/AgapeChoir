angular.module('phoneFilter', []).filter('telephone', function(){
	return function (tel){
		if(!tel){
			return '';
		}
		var value = tel.toString().trim().replace(/^\+/, ' ');
		if(value.match(/[^0-9]/)){
			return tel;
		}
		var area, city, number;
		
		area = value.slice(0,3);
		city = value.slice(3,6);
		number = value.slice(6);
		
		return (area+'-'+city+'-'+number).trim();
		
	}
});