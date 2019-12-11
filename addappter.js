function addappter(jsonMicro){

	function table(jsonMicro) {
		var arrCell = [], arrRowObj = jsonMicro['micro']['settings']['records'];		
		var html = ''
		var tblRow = ``;
		
		for (index in arrRowObj) {
			var tblCell = ``;
			var objRecord = (arrRowObj[index]);
			console.log(objRecord);
			for (cursor in objRecord) {
				console.log('index:' + index + ' -- cursor' + cursor);
				console.log(cursor);
				tblCell += `<td>${objRecord[cursor]['value']}</td>`;
			}
			tblRow += `<tr>${tblCell}</tr>`;			
		}

		var htmlTable = `
			<table class="table table-striped table-bordered table-hover ">
				<caption></caption>
				<colgroup></colgroup>
				<thead></thead>
				<tbody>${tblRow}</tbody>
				<tfoot></tfoot>
			</table>`;

		var content = document.getElementsByTagName("body").item(0);
		content.insertAdjacentHTML("beforeend", htmlTable);
		
	};

	document.write('<h1>The Addappter (v0.1)</h1>');
        console.dir(jsonMicro);
	table(jsonMicro);            
}
