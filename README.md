# Oinam Digital Garden

Visit the [Oinam Digital Garden](https://oinam.fyi/) for details. The [Source](https://github.com/oinam/oinam.fyi) is hosted on Github.

[![Netlify Status](https://api.netlify.com/api/v1/badges/21c27b58-d94c-419d-ad04-bcaea2f5465d/deploy-status)](https://app.netlify.com/sites/oinam-fyi/deploys)

## Development

Currently powered by Jekyll. When something simpler, comes along, it will likely be swapped. Any tooling should be easily swappable while the content remains intact. May need a bit of parsing of the Markdown/Text files but they should be simple and should not contain any markups that is akin to any processor.

```
$ bundler
$ bundle exec jekyll serve
```

Of course, of you're lazy like me, you will want to auto-reload your pages while you write. But at the same time, I don't want to add anything additional to the existing codebase, so I usually run BrowserSync on the `_site` folder.

Install [BrowserSync](https://www.browsersync.io) globally and then run it on the same folder on a different terminal/command-line tab/instance (assuming your Jekyll install is running on all defaults).

`browser-sync start --proxy "localhost:4000" --files "_site/*.*"`
