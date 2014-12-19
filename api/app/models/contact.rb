class Contact < ActiveRecord::Base
  validates_uniqueness_of :email
  validates_presence_of :first_name, :last_name, :email, :title
end
