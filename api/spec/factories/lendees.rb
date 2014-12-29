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

    # factory :lendee_with_a_loan do
    #   #loans_count is declared as a transient attribute and available in
    #   #attributes on the factory, as well as the callback via the evaluator
    #   transient do
    #     loans_count 1
    #   end
    #
    #   #the after(:create) yields two values; the lendee instance itself and the
    #   #evaluator, which stores all values from the factory, including transient
    #   #attributes; 'create_list's second argument is the number of records to
    #   #create and we make sure the lendee is associated properly to the loan
    #   after(:create) do |user, evaluator|
    #     create_list(:loan, evaluator.loans_count, lendee: lendee)
    #   end
    # end

  end
end
