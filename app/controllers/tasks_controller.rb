class TasksController < ApplicationController
	respond_to :html, :json, :js 
	before_filter :authenticate_user!
	before_filter :get_task, :except => [:index, :create]
	
	def index

		@tasks = current_user.tasks.sort_by{|t| t.due_date}					
		@today_tasks = @tasks.select{|t| t.due_date==Date.today}.size
		@task = Task.new						
	end

	def create		
		@task = Task.create!(params[:task].merge({ :user_id => current_user.id }))		
		render json: @task		
	end		
	

	def destroy
		@task.destroy		
		render json: @task	
	end

	def update
		@task.update_attributes(params[:task])	
		render json: @task		
	end

	def edit
		render json: @task		
	end

	def get_task
		@task = Task.find(params[:id])
	end

end