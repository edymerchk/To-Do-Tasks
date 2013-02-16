class TasksController < ApplicationController
	respond_to :html, :json, :js 
	
	def index
		@tasks = current_user.tasks
		
	end

end