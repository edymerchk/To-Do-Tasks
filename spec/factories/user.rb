FactoryGirl.define do
	factory :user do
		name Faker::Name.first_name
		email Faker::Internet.email 
		password "1234567890"
		password_confirmation "1234567890"		
	end
end