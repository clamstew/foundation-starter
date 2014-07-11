# required gem includes
require 'sinatra'
require "sinatra/json"
require "pry"

# require file includes
require_relative 'lib/myapp.rb'

set :bind, '0.0.0.0' # Vagrant fix
set :port, 9494

configure do
  jokesKlass = MyApp::Jokes.new
  @@jokes = jokesKlass.jokes
end

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
  json @@jokes
end

post '/api/jokes' do
  # puts params
  original_jokes_length = @@jokes.count
  if params[:joke]['joke'].empty? || params[:joke]['answer'].empty?
    response = {success: false, message: "you did fill things in"}
  else
    @@jokes.push(params[:joke])
    if @@jokes.count == original_jokes_length + 1
      response = {success: true, message: "You Added joke correctly"}
    else
      response = {success: false, message: "Something went wrong"}
    end
  end
  json response
end

get '/api/jokes/:id' do |id|
  json @@jokes[id.to_i - 1]
end

post '/api/jokes/:id' do |id|
  joke = @@jokes[id.to_i - 1]
  joke[:joke] = params[:joke]
  joke[:answer] = params[:answer]
  json joke
end




















