class TasksController < ApplicationController
	respond_to :html, :json, :js 
	before_filter :get_tasks
	
	def index			
		@task = Task.new						
	end

	def create


		if params[:id].nil?
			puts "Nuevo"
			#@task = Task.new				
		else
			puts "actualizcion"
			#@task = Task.find(params[:id])
		end	

		@task = Task.new(params[:task])
		current_user.tasks << @task
		render json: @task
		
	end

	def get_tasks
		@tasks = current_user.tasks		
	end

	def destroy
		@task = Task.find(params[:id])
		@task.destroy
		render json: @tasks    	
	end

	def update
		@task = Task.find(params[:id])		
	end

	def edit
		@task = Task.find(params[:id])
		render json: @task		
	end


end