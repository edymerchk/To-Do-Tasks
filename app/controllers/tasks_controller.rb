class TasksController < ApplicationController
	respond_to :html, :json, :js 
	before_filter :authenticate_user!
	before_filter :get_tasks
	
	def index			
		@task = Task.new						
	end

	def create
		
		@task = Task.create!(params[:task])
		current_user.tasks << @task
		render json: @task		

	end		
	
	def get_tasks
		@tasks = current_user.tasks.sort_by{|t| t.due_date}		
	end

	def destroy
		@task = Task.find(params[:id])
		@task.destroy
		render json: @tasks    	
	end

	def update
		
		@task = Task.find(params[:id])	
		@task.update_attributes(params[:task])	
		render json: @task
		
	end

	def edit
		@task = Task.find(params[:id])
		render json: @task		
	end


end