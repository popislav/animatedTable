//make two same height divs
$(window).resize( function(){
	$('#buttons').height($('#table').height());
}).resize();


$(function(){
	$(sortBy);
});

function sortBy(){
	var order = 1;
	$('.links').click(function(){
		var links = $(this).attr('id');
		var link = $('.' + links);
		var table = $('#myTable');
		var rows = table.find('.sort').toArray().sort(compare(link.index()));
		order *= -1;
		if(order==1){
			rows = rows.reverse();
		}
		
		 table.find('.sort').remove();
		 addRows(rows, table);		
	})
}

function addRows(arrayOfRows, table){
	var i=0;
	var inter = setInterval(function(){
			 if(i<arrayOfRows.length){
				 table.append(arrayOfRows[i]);
				 table.find('tr.sort:last-child').hide();
				 table.find('tr.sort:last-child').fadeIn("normal");
				 i++;
			 }else{
				 clearInterval(inter);
			 }	
			 }, 300);
	
}


function compare(i){
	var cmpRes = function (a, b){
		var A = cellValue(a, i);
		var B = cellValue(b, i);
		var res = $.isNumeric(A) && $.isNumeric(B)? (A - B) : (A.localeCompare(B));
		return res;
	};
	
	return cmpRes;
}

function cellValue(row, i){
	var value = $(row).children('td').eq(i).html();
	return value;
};
