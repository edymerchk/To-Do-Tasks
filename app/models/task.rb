class Task < ActiveRecord::Base
  attr_accessible :due_date, :name, :priority, :user_id
  belongs_to :user

  validates_presence_of :due_date, :name, :priority
end
