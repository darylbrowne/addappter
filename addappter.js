function addappter(jsonMicro){

	function table(jsonMicro) {
		var arrCell = [], arrRowObj = jsonMicro['micro']['settings']['records'];		
		var html = ''
		
		for (index in arrRowObj) {
			var tblRow = ``;
			var tblCell = ``;
			var objRecord = (arrRowObj[index]);
			console.log(objRecord);
			for (cursor in objRecord) {
				console.log(record);
				tblCell += `<td>${objRecord[cursor]['value']}</td>`;
			}
			tblRow += `<tr>${tblCell}</tr>`;			
		}

		var htmlTable = `
			<table>
				<caption></caption>
				<colgroup></colgroup>
				<thead></thead>
				<tbody>${tblRow}</tbody>
				<tfoot></tfoot>
			</table>`;

		var content = document.getElementsByTagName("body").item(0);
		content.insertAdjacentHTML("beforeend", htmlTable);
		
	};
	
	table(jsonMicro);            
	document.write('<h1>Coming soon...The Addappter</h1>');
        console.dir(jsonMicro);
}
