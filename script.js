function get_random_nums() {
	var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
	ranNums = [],
	i = nums.length,
	j = 0,
	cant = 9;

	while (cant--) {
	    i--;
	    j = Math.floor(Math.random() * (i+1));
	    ranNums.push(nums[j]);
	    nums.splice(j,1);
	}
	return ranNums;		
}

function show_emoji(num) {
  $('#emojis').hide();
  $('#result').show();
  $('#img-result').attr('src', "images/" + num + ".png"); 
  $("html, body").animate({ scrollTop: 0 }, "fast");	
}


$( document ).ready(function() {
  swal({
    title: "Piensa un número de 2 dígitos",
    imageUrl: "images/businessman.png",
    confirmButtonText: "Listo",
    closeOnConfirm: false
  },
	function(){
    swal({
      title: "Al número que pensaste, réstale la suma de sus digitos",
      imageUrl: "images/calculating.png",
      confirmButtonText: "Listo",
      closeOnConfirm: false
    },
    function(){
      swal({
        title: "Ubica tu emoji y toca cualquier parte de la pantalla",
        imageUrl: "images/decree.png",
        confirmButtonText: "Listo",
      });
    });      
	});  
});

$('#emojis').imagesLoaded( function() {
  console.log("Images have loaded");
});
