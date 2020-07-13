A Node.JS/JavaScript lib that convertes strings to perfect URL's links for the web. You can pass titles, paragraphs or post names to get an URL link useful in your site/blog.

# News Features

- Word limit.
- Param after principal toUrl base.

# How to use

## Importing

> ### const toUrl = require('./to-url/toUrl');

# toUrl(string, base_url, forward, word_limit, param, param_toUrl);

- STRING: Title of your post.
- BASE_URL: The base of your URL.
- FORWARD: Controls the last '/' in your BASE_URL (Default is True).
- WORD_LIMIT: Controls the amount of words that goes in your final url.
- PARAM: The param that you need after the principal toUrl base.
- PARAM_TOURL: If you want to apply toUrl() again in the param (Default is True).

## Examples

# 1. Just the title
 
> ### toUrl('Title of my post');
> 'title-of-my-post'

# 2. Title with base url

> ### toUrl('Title of my post', 'http://blog.com');
> 'http://blog.com/title-of-my-post'

> ### toUrl('Title of my post', 'http://blog.com/');
> 'http://blog.com/title-of-my-post'

> ### toUrl('Title of my post', 'http://blog.com', true);
> 'http://blog.com/title-of-my-post'

# 3. Title with base url, but without the last '/'

> ### toUrl('Title of my post', 'http://blog.com/', false);
> 'http://blog.comtitle-of-my-post'

 This is for the case that you have of something like:

> ### toUrl('Title of my post', 'http://blog.com?=', false);
> 'http://blog.com?=title-of-my-post'

# 4. Just title with limit of words

> ### toUrl('Title of my post', false, 2);
> 'title-of'

# 5. Title with base url and limit of words

> ### toUrl('Title of my post', 'http://blog.com', 2);
> 'http://blog.com/title-of'

> ### toUrl('Title of my post', 'http://blog.com', true, 2);
> 'http://blog.com/title-of'

# 6. Title with base url, without the last '/' and with limit of words

> ### toUrl('Title of my post', 'http://blog.com', false, 2);
> 'http://blog.comtitle-of'

> ### toUrl('Title of my post', 'http://blog.com?=', false, 2);
> 'http://blog.com?=title-of'

# 7. Title with base url, with the last '/', without limit of words and with a final param

> ### toUrl('Title of my post', 'http://blog.com', true, false, '?search=myparam');
> 'http://blog.com/title-of-my-post?search=myparam'

# 8. Title with base url, with the last '/', without limit of words, with a final param (with toUrl applied)

> ### toUrl('Title of my post', 'http://blog.com', true, false, 'My param', true);
> 'http://blog.com/title-of-my-post/my-param'



#### Created by Anael Jonas (@anaeljonasgit)
#### Colaboration of 'param' idea by Jeferson Mendes (@jeferson-mendes)
