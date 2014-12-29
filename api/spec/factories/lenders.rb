FactoryGirl.define do
  factory :lender do
    email {Faker::Internet.email}
    password {"password"}
    password_confirmation {"password"}
    state_of_residence {Faker::Address.state}

    factory :lender_with_investments do

      transient do
        investments_count 5
      end

      after(:create) do |user, evaluator|
        create_list(:investment, evaluator.investments_count, lender: lender)
      end
    end
  end

end
