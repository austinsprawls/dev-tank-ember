class AddAuthenticationTokenToLendee < ActiveRecord::Migration
  def change
    add_column :lendees, :authentication_token, :string
  end
end
