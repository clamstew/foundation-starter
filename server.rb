# required gem includes
require 'sinatra'
# require 'json'

# require file includes
require_relative 'lib/github'

set :bind, '0.0.0.0' # Vagrant fix
set :port, 9494

get '/' do
  # This goes in your <%= yield %> statement 
  # seen in your main layout.erb file
  "Hey, this is a web app"
end

get '/witherb' do
  # This goes in your <%= yield %> statement 
  # seen in your main layout.erb file
  @im_a_instance_variable = "Hey, this is a web app"
  # even though we specify a sample erb file here
  # it is still injected into the erb file
  erb :sample_erb
end