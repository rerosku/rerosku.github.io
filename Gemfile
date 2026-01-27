source "https://rubygems.org"

# Jekyll version used by GitHub Pages
gem "jekyll", "~> 3.9.3"

# GitHub Pages compatible plugins
gem "jekyll-feed", "~> 0.15"
gem "jekyll-sitemap", "~> 1.4"
gem "jekyll-paginate", "~> 1.1"

group :jekyll_plugins do
  gem "jekyll-admin"
end

# GitHub Pages gem (optional, for local testing)
# gem "github-pages", group: :jekyll_plugins

# Windows and JRuby does not include zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
