class Task < ActiveRecord::Base
  attr_accessible :due_date, :name, :priority
  belongs_to :user
end
