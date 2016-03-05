class UserController < ApplicationController
  def create
    u = User.find_or_create_by(facebook_id: params[:facebook_id])
    render  json: { user: u },
            status: :ok,
            content_type: 'text/json'
  end

  def edit
    u = User.find_or_create_by(facebook_id: params[:facebook_id])
    u['name'] = params[:name] if params[:name]
    u.save if u.valid?
    render  json: { user: u },
            status: :ok,
            content_type: 'text/json'
  end

  def delete
    u = User.find_by(facebook_id: params[:facebook_id])
    destroyed = u.destroy unless u.nil?
    render  json: { user: destroyed },
            status: :ok,
            content_type: 'text/json'
  end
end
