// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	if(obj === null || obj === undefined) {
		return 'null';
	}
	switch(typeof obj){
		
		case 'number':
			return obj.toString(); 
			break; 
		
		case 'boolean':
			return obj ? 'true' : 'false';
			break;

		case 'function':
			return false;
			break;

		case 'string':
			return '"' + obj + '"';
			break;

		case 'object':
			if(_.isArray(obj)){
				if(obj.length === 0){
					return '[]';
				}
				else{
					var result = [];
					for(var i = 0; i < obj.length; i++){
						if(typeof obj[i] !== 'function' && obj[i] !== undefined){
							result.push(stringifyJSON(obj[i]));
						}
					}
					return '[' + result.join(',') + ']';
				}
			}
			else{
				if(_.isEmpty(obj)){
					return '{}';
				}
				else{
					var result = []; 
					for(var k in obj){
						if(typeof obj[k] !== 'function' && obj[k] !== undefined){
							result.push(stringifyJSON(k) + ":" + stringifyJSON(obj[k]));
						}
					}
					return '{' + result.join(',') + '}';
				}
			}
			break;

		default: 
			return obj;
			break;
	}

};
