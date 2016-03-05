Rails.application.routes.draw do
  get 'products', to: 'products#index'
  post 'products/add'
  put 'products/edit'
  delete 'products/delete'

  put 'users/:id', to: 'user#edit'
  delete 'users/:id', to: 'user#delete'
  post 'users', to: 'user#create'
end
