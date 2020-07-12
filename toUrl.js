function toUrl(string, base_url, boolean){
	string = string.toLowerCase().split(' '); New_string = [];
	string.filter(word => { New_string.push(
		word.normalize("NFD").replace(/[^a-zA-Zs]/g, '')
	) });
	if (base_url){
		last = base_url[base_url.length-1];
		if (typeof(boolean) == 'boolean' && !boolean && last == '/'){
			base_url = base_url.slice(0, -1)
			return base_url+New_string.join('-');
		}; if (typeof(boolean) == 'boolean' && !boolean){
			return base_url+New_string.join('-');
		}; if (last == '/'){ base_url = base_url.slice(0, -1) };
		return base_url+'/'+New_string.join('-');
	}; return New_string.join('-');
}