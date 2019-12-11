function addappter(jsonMicro){

	function table(jsonMicro) {
		var htmlTable = `
			<table>
				<caption></caption>
				<colgroup></colgroup>
				<thead></thead>
				<tbody></tbody>
				<tfoot></tfoot>
			</table>`;
		var arrCell = [], arrRowObj = jsonMicro['micro']['settings']['records'];		
		var html = ''
		for (row in arrRowObj) {
			console.log(row);
		/*html += `
		<tr>
		    <td> ${row.columns.value} </td>
		    <td> ${dc[key]} </td>
		</tr>            
		`*/
		}
	};
	
	table(jsonMicro);            
	document.write('<h1>Coming soon...The Addappter</h1>');
        console.dir(jsonMicro);
}
