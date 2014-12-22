FactoryGirl.define do
  factory :lender do
    email {Faker::Internet.email}
    password {"password"}
    password_confirmation {"password"}
    state_of_residence {Faker::Address.state}
  end

end
