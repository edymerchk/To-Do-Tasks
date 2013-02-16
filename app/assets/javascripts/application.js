// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.all
//= require bootstrap
//= require_tree .


$(function(){

	/**
	* Initializer for datepicker for due_date and modal for the form
	**/

	$('#task_due_date').datepicker(
		{ dateFormat: 'yy-mm-dd' }
		);  

	$('#myModal').modal({
		keyboard: true,
		show: false  		
	});

	/**
	* Delete Action
	*/

	$('.delete').click(function(e){
		e.preventDefault();		
		var answer = confirm("Are you sure?")
		if (!answer)             
			return;
		$.post(this.href, { _method: 'delete' });
		$(this).parent().parent().remove();
	});

	/**
	* New Task action
	*/

	$("#new_task").submit(function(e) {
		
		e.preventDefault();
		task = {
			name : $("#task_name").val(), 
			priority: $("#task_priority").val(), 
			due_date: $("#task_due_date").val()
		}
		url = $(this).attr( 'action' );

		$.post(url,{ task: task }, function(data) {			
				
			edit = "<a href='/users/"+data.user_id+"/tasks/"+data.id+"/edit' class='edit'><img alt='Edit' height='20' src='/assets/edit.png' width='20'></a>"	
			destroy = "<a href='/users/"+data.user_id+"/tasks/"+data.id+"' class='delete'><img alt='Destroy' height='20' src='/assets/destroy.png' width='20'></a>"
			$('#results').append("<tr><td>"+data.name+"</td><td>"+data.priority+"</td><td>"+data.due_date+"</td><td>"+edit+"  "+destroy+"</td></tr>");
		});
		$('#myModal').modal('hide');

	});


	/**
	* Edit action
	* Load the data and show the modal form
	*/

	$('.edit').click(function(e){
		e.preventDefault();		

		$.get(this.href, function(data){
			console.log(data.name);
			$("#task_name").val(data.name);
			$("#task_priority").val(data.priority);
			$("#task_due_date").val(data.due_date);
			$(".save").val("Update");			
			$('#new_update').text("Update")
			

		});

		$('#myModal').modal('show')

	});

	$('#new_task_btn').click(function(e){		
		$('#new_task')[0].reset(); // clean the form to enter a new TASK
		$(".save").val("Create"); //  return to original name
		$('#new_update').text("Create")
	});

});