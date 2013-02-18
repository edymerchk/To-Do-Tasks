module ApplicationHelper

	def today(task)
		content_tag(:i, "", :class => "icon-bell") if task.due_date == Date.today		
	end

end

