class LendeeSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :encrypted_password,
             :street_address, :city, :state, :zip_code, :date_of_birth,
             :yearly_individual_income, :yearly_additional_income, :credit_range,
             :created_at, :updated_at
end
