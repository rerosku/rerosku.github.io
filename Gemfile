source "https://rubygems.org"

# Jekyll version - flexible for both environments
gem "jekyll", "~> 3.9"

# Core plugins
gem "jekyll-feed", "~> 0.15"
gem "jekyll-sitemap", "~> 1.4"
gem "jekyll-paginate", "~> 1.1"

# Ruby 3.1+ compatibility (needed for JekyllEx Ruby 3.3)
# These are built-in gems that became external in newer Ruby
gem "csv"
gem "base64"
gem "bigdecimal"

# Jekyll 3.9+ requirements
gem "webrick"
gem "kramdown-parser-gfm"

group :jekyll_plugins do
  gem "jekyll-admin"
end

# Platform-specific gems (only install where needed)
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
