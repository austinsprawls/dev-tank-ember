FactoryGirl.define do

  factory :investment do
    lender
    loan
    amount {Faker::Commerce.price}
    expected_return {Faker::Commerce.price}
  end

  factory :lender do
    email {Faker::Internet.email}
    password {"password"}
    password_confirmation {"password"}
    state_of_residence {Faker::Address.state}

    factory :lender_with_investments do

      transient do
        investments_count 5
      end

      after(:create) do |lender, evaluator|
        create_list(:investment, evaluator.investments_count, lender: lender)
      end
    end
  end

end
