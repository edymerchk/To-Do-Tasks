class TasksController < ApplicationController
	respond_to :html, :json, :js 
	before_filter :authenticate_user!
	before_filter :get_tasks
	
	def index			
		@task = Task.new						
	end

	def create
		puts "******#{params}"

		@task = Task.create!(params[:task])
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
		puts "ENTRO POR EL UPDATE"
		@task = Task.find(params[:id])		
		# here update
	end

	def edit
		@task = Task.find(params[:id])
		render json: @task		
	end


end