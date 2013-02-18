TodoLinden::Application.routes.draw do


  devise_for :users, :path => 'accounts'

  resources :users do
    resources :tasks
  end

  root :to => "tasks#index"

end
