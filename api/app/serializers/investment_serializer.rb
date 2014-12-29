class InvestmentSerializer < ActiveModel::Serializer
  attributes :id, :lender_id, :loan_id, :amount, :expected_return,
             :created_at, :updated_at
end
