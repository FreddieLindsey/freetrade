Rails.application.routes.draw do
  post 'searchopts', to: 'search#indices'
  post 'search', to: 'search#search'

  post 'products', to: 'products#index'
  post 'products/add'
  put 'products/edit'
  delete 'products/delete'

  put 'users/:id', to: 'user#edit'
  delete 'users/:id', to: 'user#delete'
  post 'users', to: 'user#create'
end
