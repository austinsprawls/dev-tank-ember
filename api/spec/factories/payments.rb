FactoryGirl.define do
  factory :payment do
    lender
    lendee
    amount {Faker::Commerce.price}
  end

end
