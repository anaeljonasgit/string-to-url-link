# How to use

## Importing

> const toUrl = require('./toUrl/toUrl');

# toUrl(string, base_url, boolean);

- STRING: Title of your post.
- BASE_URL: THE BASE OF YOUR URL.
- BOOLEAN: Control the last '/' in your BASE_URL. Default is True.

## Examples

### Just the title

#### toUrl('Title of my post');
> 'title-of-my-post'

### Title and base url

#### toUrl('Title of my post', 'http://blog.com');
> 'http://blog.com/title-of-my-post'

#### toUrl('Title of my post', 'http://blog.com/');
> 'http://blog.com/title-of-my-post'

#### toUrl('Title of my post', 'http://blog.com', true);
> 'http://blog.com/title-of-my-post'

### Title with the base url, but without the last '/'

toUrl('Title of my post', 'http://blog.com/', false);
> 'http://blog.comtitle-of-my-post'

#### This is for the case that you have of something like

toUrl('Title of my post', 'http://blog.com?=', false);
> 'http://blog.com?=title-of-my-post'

# CREATE BY ANAEL JONAS | 12 JUN 2020.