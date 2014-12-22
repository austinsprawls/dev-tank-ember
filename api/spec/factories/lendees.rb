FactoryGirl.define do
  factory :lendee do
    first_name {Faker::Name.first_name}
    last_name {Faker::Name.last_name}
    email {Faker::Internet.email}
    password {"password"}
    password_confirmation {"password"}
    street_address {Faker::Address.street_address}
    city {Faker::Address.city}
    state {Faker::Address.state}
    zip_code {Faker::Address.zip}
    date_of_birth {Faker::Date.backward(1000)}
    yearly_individual_income {Faker::Commerce.price}
    yearly_additional_income {Faker::Commerce.price}
    credit_range {"660-720"}
  end
end
