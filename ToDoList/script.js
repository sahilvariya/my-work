function getandupdate(){
	console.log('task added');
	title = document.getElementById('title').value;
	desc = document.getElementById('description').value;

if (title == "" && desc == "" ) {
		alert('Please enter Title or Description ');
	}
	if (title != "" && desc != "" || title != "" && desc == "" || title == "" && desc != "" ) {

	if (localStorage.getItem('itemsJson')== null) {
		// alert('feifj')
		itemJsonArray = [];
		itemJsonArray.push([title,desc]);
		localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));

	}
	else{
		itemJsonArrayStr = localStorage.getItem('itemsJson');
		itemJsonArray = JSON.parse(itemJsonArrayStr);
		itemJsonArray.push([title,desc]);
		localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
		title.value ="";
		desc.value= "";
	}
	
	update()	
}
}

function update(){
if (localStorage.getItem('itemsJson')== null) {
		itemJsonArray = [];
		localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
	}
	else{
		itemJsonArrayStr = localStorage.getItem('itemsJson');
		itemJsonArray = JSON.parse(itemJsonArrayStr);
		
	}
    document.getElementById('title').value = "";
    document.getElementById('description').value = "";
	let tablebody = document.getElementById('table-body');
	let str = "";
	itemJsonArray.forEach((element, index) => {
                    str += `
                    <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td> 
                    <td>
                    <button type="button" class="btn btn-sm btn-primary" onclick="updatetask(${index})">Update</button>
                    <button type="button" class="btn btn-sm btn-danger" onclick="deleted(${index})">Delete</button></td>
                    </tr>`; 
                });
	// 
	tablebody.innerHTML = str
};

add = document.getElementById('add-task')
add.addEventListener('click', getandupdate);
update(); 
function deleted(itemindex){
	console.log("delete", itemindex)
	itemJsonArrayStr = localStorage.getItem('itemsJson');
		itemJsonArray = JSON.parse(itemJsonArrayStr);
		//delete item from list
		itemJsonArray.splice(itemindex,1)
		localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
		update();
}
function updatetask(taskindex ){
console.log('update data', taskindex);
}

function clearStr(){
	if (confirm("Do you really want to clear list??")) {
	console.log('all task are clear')
	localStorage.clear();
	update();
};
};
function isEmpty() {
	if (document.getElementById('title') == "") {
        alert("empty");
      }
      return;
    
}




