# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

lendee = Lendee.create([
  {first_name: 'Dolly',
    last_name: 'Rodriguez',
    email: 'daphney_ersner@effertz.org',
    password: 'password',
    street_address: '159 Earnest Plains',
    city: 'Turcottesdad',
    state: 'Pennsylvania',
    zip_code: '30247-2376',
    date_of_birth: Date.parse('1991-10-17'),
    yearly_individual_income: 60000,
    credit_range: '660-720',
  }
])
