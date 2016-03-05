Rails.application.routes.draw do
  get 'products/index'

  get 'products/add'

  get 'products/edit'

  get 'products/delete'

  put 'users/:id', to: 'user#edit'
  delete 'users/:id', to: 'user#delete'
  post 'users', to: 'user#create'
end
