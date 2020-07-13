A Node.JS/JavaScript lib that convertes String texts in perfect URL's links for the web. You can pass titles, paragraphs or post names that it will convertes this string in an URL link that you can use in your site/blog.

# News Features

- Word limit.

# How to use

## Importing

> const toUrl = require('./to-url/toUrl');

# toUrl(string, base_url, boolean, word_limit);

- STRING: Title of your post.
- BASE_URL: The base of your URL.
- BOOLEAN: Controls the last '/' in your BASE_URL. Default is True.
- WORD_LIMIT: Controls the amount of words that goes in your final url.

## Examples

## 1. Just the title

#### toUrl('Title of my post');
> 'title-of-my-post'

## 2. Title and base url

#### toUrl('Title of my post', 'http://blog.com');
> 'http://blog.com/title-of-my-post'

#### toUrl('Title of my post', 'http://blog.com/');
> 'http://blog.com/title-of-my-post'

#### toUrl('Title of my post', 'http://blog.com', true);
> 'http://blog.com/title-of-my-post'

## 3. Title with the base url, but without the last '/'

#### toUrl('Title of my post', 'http://blog.com/', false);
> 'http://blog.comtitle-of-my-post'

#### This is for the case that you have of something like

toUrl('Title of my post', 'http://blog.com?=', false);
> 'http://blog.com?=title-of-my-post'

## 4. Title with the base url and limit of words

#### toUrl('Title of my post', 'http://blog.com', 2);
> 'http://blog.com/title-of'

#### toUrl('Title of my post', 'http://blog.com', true, 2);
> 'http://blog.com/title-of'

### "Thanks! It's my first lib!" - Anael Jonas (12 de Julho de 2020)