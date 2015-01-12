class LoanSerializer < ActiveModel::Serializer
  attributes :id, :lendee_id, :amount_requested, :amount_remaining, :amount_funded,
             :funded?, :rate, :term, :expiration_date, :created_at, :updated_at
end
