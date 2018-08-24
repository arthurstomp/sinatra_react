require 'sinatra'
configure { set :server, :puma }

get '/' do
  render :html, :index
end
