FactoryGirl.define do
  factory :investment do
    lender
    loan
    amount {Faker::Commerce.price}
    expected_return {Faker::Commerce.price}
  end

end
