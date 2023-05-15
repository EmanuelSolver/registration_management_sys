
   //local storage of client information
let clientData = [{
    clientName: 'Peter',
    idNo: '784632',
    country: 'Kenya',
    language: 'Swahili'
},
{
    clientName: 'Tasha',
    idNo: '128020',
    country: 'Portugal',
    language: 'Portugees'
},
{
    clientName: 'Pablo',
    idNo: '976032',
    country: 'Spain',
    language: 'Español'
}
];

//function to display data
const display = ()=>{
    //create a table with 5 columns
    html = '<table>';
     setTimeout(() =>{
        html += '<tr><th colspan="4"> List of Our Clients </th>  <th colspan="2"> Action </th><tr>';
        html += '<th>' + 'Client Name' + '</th>';
        html += '<th>' + 'ID NUmber' + '</th>';
        html += '<th>' + 'Country' + '</th>';
        html += '<th>' + 'Language' + '</th>';

        for(let i=0; i < clientData.length; i++) {
            html += '<tr>';
            html += '<td>' + clientData[i].clientName + '</td>';
            html += '<td>' + clientData[i].idNo + '</td>';
            html += '<td>' + clientData[i].country + '</td>';
            html += '<td>' + clientData[i].language + '</td>';
            html += '<td>' + '<button class="update" style="background-color: rgb(170, 7, 7);">Update</button>'
            + '</td>';
            html += '<td>' + `<button type="button" class="delete" style="background-color: rgb(250, 5, 17);" onclick="removeClient(${clientData[i].idNo})">Delete</button>` + '</td>';

            html += '<tr>';
        }
         html += '</table>';
         document.getElementById('mytable').innerHTML = html;
     }, 200);
};

const seeData = () => {
    display();
};

const  addClient = ()=> {
    let cName = document.getElementById('userName').value;
    let id = document.getElementById('idNo').value;
    let country = document.getElementById('country').value;
    let lang = document.getElementById('lang').value;

    if(cName && id && country && lang){ // if all fields are populated
        //add an object data to the array
         clientData.push({clientName: cName, idNo: id, country: country, language: lang});
         //display(); //call the function display to show the appended data
         clearFields();
    }


};

const clearFields = () => {
    document.getElementById('userName').value = '';
    document.getElementById('idNo').value = ''; 
    document.getElementById('country').value = '';
    document.getElementById('lang').value = '';
};

const removeClient = (rec) => {
    console.log(rec);
    let filt = clientData.filter((a, i) =>{
        if(rec == a.idNo){
            clientData.splice(i, 1);
            display();
        }
    });
};