class SessionsController < Devise::SessionsController
  def create
    respond_to do |format|
      format.html { super }
      format.json do
        self.resource = warden.authenticate!(auth_options)
        sign_in(resource_name, resource)
        data = {
          lendee_token: self.resource.authentication_token,
          lendee_email: self.resource.email
        }
        render json: data, status: 201
      end
    end
  end
end
