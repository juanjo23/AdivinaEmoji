function get_random_nums() {
	var nums = [1,2,3,4,5,6,7,8,9],
	ranNums = [],
	i = nums.length,
	j = 0;

	while (i--) {
	    j = Math.floor(Math.random() * (i+1));
	    ranNums.push(nums[j]);
	    nums.splice(j,1);
	}
	return ranNums;		
}

function show_emoji(num) {
	document.getElementById('emojis').style.display = 'none';				
	document.getElementById('result').style.display = 'block';	
	document.getElementById('img-result').src = "images/" + num + ".png";			
}

function show_second() {
	$('#second_link').trigger('click');
}
/*
$(document).on("pagecreate",function(event){
	$( "#firstPopup" ).popup( "show" );
});
*/


$(document).bind("pageinit", function(){
    $('#first_link').trigger('click');
    
    $('#pop1').on('popupafterclose', function(){
    	setTimeout(function(){
    		$('#second_link').trigger('click');    
    	}, 100);
    });    

	$('#pop2').on('popupafterclose', function(){
    	setTimeout(function(){
    		$('#third_link').trigger('click');    
    	}, 100);
    });    
});

/*
$("#closeFirst" ).click(function() {
  alert( "Handler for .click() called." );
});
*/

/*

$( document ).ready(function() {
	alert("adios Javier");
  // Handler for .ready() called.

});

*/