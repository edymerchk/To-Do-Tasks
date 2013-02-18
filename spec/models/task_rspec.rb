require 'spec_helper'
describe Task do 
  context "base" do
    it "has a valid factory" do
     create(:task).should be_valid
    end
  end

	context "validations" do 
    before(:each) do
      @task = build(:task)
    end
    [:name, :due_date, :priority].each do |field|
    	 it "should validate #{field} presence" do
        @task.send("#{field}=", nil)
        @task.should_not be_valid
      end
    end
 	end	
end