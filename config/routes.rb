Rails.application.routes.draw do
  post 'api/searchopts', to: 'search#indices'
  post 'api/search', to: 'search#search'

  post 'api/products', to: 'products#index'
  post 'api/products/add'
  put 'api/products/edit'
  delete 'api/products/delete'

  put 'users/:id', to: 'user#edit'
  delete 'users/:id', to: 'user#delete'
  post 'users', to: 'user#create'
end
