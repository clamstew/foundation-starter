# required gem includes
require 'sinatra'
require "sinatra/json"

# require file includes
require_relative 'lib/myapp.rb'

set :bind, '0.0.0.0' # Vagrant fix
set :port, 9494

get '/' do
  # This goes in your <%= yield %> statement 
  # seen in your main layout.erb file
  @im_some_ruby_var = "Hey, this is a web app"
  erb :test # layout implied
end

get '/js-specs' do
  erb :specs, :layout => :spec
end

get '/jokes-js-ui' do
  erb :jokes
end


#-------- JSON API routes -----------

# more info sinatra json: http://www.sinatrarb.com/contrib/json.html
get '/api/jokes' do
  jokesKlass = MyApp::Jokes.new
  @jokes = jokesKlass.jokes
  json @jokes
end