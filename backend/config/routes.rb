Rails.application.routes.draw do
  resources :items
  resources :users
  post '/login', to: 'auth#create'
  get '/closet', to: 'users#profile'
end
