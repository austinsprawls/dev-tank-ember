class LenderSerializer < ActiveModel::Serializer
  attributes :id, :email, :encrypted_password, :state_of_residence, :funds,
             :total_invested, :created_at, :updated_at
end
