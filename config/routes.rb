Rails.application.routes.draw do
  get 'data_information/popular_products'

  get 'api/products', to: 'product_admin#index'
  get 'api/products/create', to: 'product_admin#create'
  get 'api/products/edit/:id', to: 'product_admin#edit'
  get 'api/products/delete/:id', to: 'product_admin#destroy'

  get 'api/discounts', to: 'discounts#index'
  post 'api/discounts/create', to: 'discounts#create'
  put 'api/discounts/edit/:id', to: 'discounts#edit'
  delete 'api/discounts/delete/:id', to: 'discounts#delete'

  post 'api/searchopts', to: 'search#indices'
  post 'api/search', to: 'search#search'
  post 'api/search/images', to: 'search#images'

  post 'api/wishlist', to: 'products#index'
  post 'api/wishlist/add', to: 'products#add'
  post 'api/wishlist/edit/:id', to: 'products#edit'
  post 'api/wishlist/destroy/:id', to: 'products#destroy'

  put 'users/:id', to: 'user#edit'
  delete 'users/:id', to: 'user#delete'
  post 'users', to: 'user#create'

  get '*path', to: 'static#application', via: :all
  root 'static#application'
end
