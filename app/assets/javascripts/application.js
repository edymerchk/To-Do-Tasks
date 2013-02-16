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
//= require bootstrap
//= require_tree .


$(function(){
	$('#myModal').modal({
  		keyboard: true,
  		show: false  		
	});

	$('.delete').click(function(e){
		e.preventDefault();		
		$.post(this.href, { _method: 'delete' });
		$(this).parent().parent().remove();
	});

	$("#new_task").submit(function(e) {
		e.preventDefault();
		task = {
			name : $("#task_name").val(), 
			priority: $("#task_priority").val(), 
			due_date: $("#task_due_date").val()
		}

		$.post(this.href,{ task: task }, function(data) {
			
			edit = "<a href='tasks/"+data.id+"/edit' class='edit'>Edit</a>"	
			destroy = "<a href='tasks/"+data.id+"' class='delete'>Destroy</a>"
			$('#results').append("<tr><td>"+data.name+"</td><td>"+data.priority+"</td><td>"+data.due_date+"</td><td>"+edit+"</td><td>"+destroy+"</td></tr>");
 		});
		$('#myModal').modal('hide');

	});

	$('.edit').click(function(e){
		e.preventDefault();		

		$.get(this.href, function(data){
			console.log(data.name);
			$("#task_name").val(data.name);
			$("#task_priority").val(data.priority);
			$("#task_due_date").val(data.due_date);

		});

		$('#myModal').modal('show')
	
	});

});