FactoryGirl.define do	
	factory :task do
		name Faker::Company.name
		due_date Date.today
		priority ['Alta','Media','Baja'].sample
		factory :invalid_task do
			name nil		
		end

	end
end