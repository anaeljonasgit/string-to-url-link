function toUrl(string, base_url, boolean, word_limit, param, param_toUrl){
	if (param && param_toUrl){ param = '/'+toUrl(param) }
	string = string.toLowerCase().split(' '); New_string = [];
	string.filter(word => { if (!isNaN(word)){ New_string.push(word);
		} else{ New_string.push(word.normalize("NFD").replace(/[^a-zA-Zs]/g, '')) }
}); if (word_limit || typeof(boolean) == 'number'){
		New_string.splice(word_limit || boolean, New_string.length-1)
	}; if (base_url){
		last = base_url[base_url.length-1];
		if (typeof(boolean) == 'boolean' && !boolean && last == '/'){
			base_url = base_url.slice(0, -1)
			return base_url+New_string.join('-');
		}; if (typeof(boolean) == 'boolean' && !boolean){
			return base_url+New_string.join('-');
		}; if (last == '/'){ base_url = base_url.slice(0, -1) };
		if (param){ return base_url+'/'+New_string.join('-') + param }
		return base_url+'/'+New_string.join('-');
	}; if (param){ return New_string.join('-') + param }
	return New_string.join('-');
}; module.exports = toUrl;