class Loan < ActiveRecord::Base
  belongs_to :lendee
  has_many :investments
  has_many :lenders, through: :investments

  validates :lendee_id, :amount_requested, :expiration_date, :rate, :term, presence: true

end
