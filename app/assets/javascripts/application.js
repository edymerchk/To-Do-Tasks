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
	* Initializer for datepicker for due_date and modal for the task form
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

	$(document).on( "click", ".delete", function(e){
		e.preventDefault();		
		var answer = confirm("Are you sure?")
		if (!answer)             
			return;
		$.post(this.href, { _method: 'delete' });
		$(this).parent().parent().fadeOut(function(){
			$(this).remove();	
		});
	});




	/**
	* Edit action
	* Load the data and show the modal form
	*/



	$(document).on( "click", ".edit", function(e){
		e.preventDefault();		

		$.get(this.href, function(data){
			
			$("#task_name").val(data.name);
			$("#task_priority").val(data.priority);
			$("#task_due_date").val(data.due_date);
			$(".save").val("Update");			
			$('#new_update').text("Update")
			$(".save").attr("id", data.id);			

		});

		$('#myModal').modal('show') // show modal form to edit Task

	});

	$('#new_task_btn').click(function(e){		
		$('#new_task')[0].reset(); // clean the form to enter a new Task
		$(".save").val("Create"); //  return to original name
		$('#new_update').text("Create")
		$(".save").removeAttr("id") // remove id of last edit if any
		
		
	});

	$("#new_task").submit(function(e){
		e.preventDefault();
		save();
	});

});

function save () {

	type="POST"
	var form =$("#new_task");
	url = $(form).attr( 'action' );

	if($('#new_update').text()!="Create"){
		type="PUT"
		id = $(".save").attr("id")
		url = url +"/"+ id
	}		

	my_task = {
		name : $("#task_name").val(), 
		priority: $("#task_priority").val(), 
		due_date: $("#task_due_date").val()
	}


	$.ajax({type: type,
		url: url,
		data: {task: my_task},
		success: function(data) {			
			if(type=="POST")
				addRecord (data);
			else				
				updateRecord (data);
			

		}});
	$('#myModal').modal('hide');
	
}
/**
* Add new Record
*/
function addRecord (data){	
	$('#results').append(CreateTR(data));
}

/**
* Update a Record
*/
function updateRecord (data) {
	$('tr[data-id='+data.id+']').fadeOut(function(){
		$(this).replaceWith(CreateTR(data));
	});	
}

/**
* Create a TR element to update a existing record or append new record
*/
function CreateTR (data) {
	name = "<td>"+data.name+"</td>";
	priority = "<td>"+data.priority+"</td>";
	due_date = "<td>"+data.due_date+"</td>";
	edit = "<td><a href='/users/"+data.user_id+"/tasks/"+data.id+"/edit' class='edit'><img alt='Edit' height='20' src='/assets/edit.png' width='20'></a> ";
	destroy = "<a href='/users/"+data.user_id+"/tasks/"+data.id+"' class='delete'><img alt='Destroy' height='20' src='/assets/destroy.png' width='20'></a></td>";
	tr = "<tr data-id="+data.id+">"+name+priority+due_date+edit+destroy+"</tr>"
	return tr;	
}