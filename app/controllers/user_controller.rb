class UserController < ApplicationController
  def create
    u = User.find_or_create_by(facebook_id: params[:facebook_id])
    render  json: u,
            status: :ok,
            content_type: 'text/json'
  end

  def edit
  end

  def delete
  end
end
