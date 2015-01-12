class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :authenticate_lendee_from_token!

  private

  def authenticate_lendee_from_token!
    authenticate_with_http_token do |token, options|
      lendee_email = options[:lendee_email].presence
      lendee       = lendee_email && Lendee.find_by_email(lendee_email)

      if lendee && Devise.secure_compare(lendee.authentication_token, token)
        sign_in lendee, store: false
      end
    end
  end
end
