Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :todos, only: [:index, :show, :create, :update, :destroy] do
      resources :steps, only: [:create, :update, :destroy]
    end

    resources :steps, only: [:index]
  end
end
