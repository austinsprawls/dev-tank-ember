FactoryGirl.define do
  factory :loan do
    lendee
    amount_requested {Faker::Commerce.price}
    amount_remaining {Faker::Commerce.price}
    rate {Faker::Commerce.price}
    term {36}
    expiration_date {Faker::Date.forward(2000)}
  end

end
