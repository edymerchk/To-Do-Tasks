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
gem "faker", "~> 1.0.1"

group :production do
	gem 'pg'
end


group :development, :test do
 	gem 'sqlite3'
 	gem "rspec-rails", "~> 2.10.1"
	gem "factory_girl_rails", "~> 3.2.0"
	gem "guard-rspec", "~> 0.7.0"
end


group :test do	
	gem "capybara", "~> 1.1.2"
	gem "database_cleaner", "~> 0.7.2"
	gem "launchy", "~> 2.1.0"
end 


