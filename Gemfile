source 'https://rubygems.org'

gem 'rails', '3.2.11'



# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'
  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby
  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'
gem 'thin' #server
gem 'quiet_assets' #fix assets msgs
gem 'bootstrap-sass', '~> 2.3.0.0'
gem 'devise' # authentication solution
gem 'simple_form' # forms made easy
gem 'jquery-ui-rails'
gem 'colorize' #colors for debug!!

group :production do
	gem 'pg'
end
group :development, :test do
 	gem 'sqlite3'
end

