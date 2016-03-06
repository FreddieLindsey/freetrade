Rails.application.routes.draw do
  post 'api/searchopts', to: 'search#indices'
  post 'api/search', to: 'search#search'
  post 'api/search/images', to: 'search#images'

  post 'api/wishlist', to: 'products#index'
  post 'api/wishlist/add', to: 'products#add'
  post 'api/wishlist/edit/:id', to: 'products#edit'

  put 'users/:id', to: 'user#edit'
  delete 'users/:id', to: 'user#delete'
  post 'users', to: 'user#create'

  root 'static#index'
end
