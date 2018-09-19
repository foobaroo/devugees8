$(document).ready(function() {
    console.log('ready');

    // let loggedIn = localStorage.getItem('loggedIn');
    // if(loggedIn && loggedIn == 1) {
        buildApp();
    // }
    // else {
    //     buildLogin();
    // }
});


function buildApp() {
    $('body').empty();
    $('body').append(`
        <div id="content" class="container">
        <nav class="nav">
            <a id="link-newlaty" class="nav-link active" href="#">Add Laty</a>
            <a id="link-history" class="nav-link" href="#">Show all Laties</a>
            <a id="link-logout" class="nav-link" href="#">Logout</a>
        </nav>
        </div>

        <div id="content" class="container">
        </div>
    `);

    $('#link-newlaty').on('click', () => {
        // show the add laty form
        $('#form-add').show();
        $('#table-history').hide();
    });

    $('#link-history').on('click', () => {
        // show the history
        $('#form-add').hide();
        $('#table-history').show();        
    });
    
    $('#link-logout').on('click', () => {
        // ajax request ... 
    });
    
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    
    let yyyy = now.getFullYear();
    if(dd < 10) {
        dd='0'+dd;
    }
    if(mm < 10) {
        mm='0'+mm;
    }

    let strNow = dd + '/' + mm + '/' + yyyy;
    let strTime = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes(); 

    $('#content').append(`
        <form id="form-add">
            <div class="row" style="margin-top: 150px">
                <div class="col-3">
                <input type="text" class="form-control" id="input-name" placeholder="Firstname">
                </div>

                <div class="col-3">
                <input type="text" class="form-control" id="input-date" value="${strNow}">
                </div>            

                <div class="col-3">
                <input type="text" class="form-control" id="input-time" value="${strTime}">
                </div>
            </div>

            <button type="submit" class="btn btn-primary" style="margin-top: 15px">Add New Laty</button>

            <div class="alert alert-success" style="display: none; margin-top: 10px"><strong>Success</strong> New Laty was added</div>
        </form>     
    `);


    $('#content').append(`
        <table id="table-history" class="table" style="display: none; margin-top: 100px">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    `);

    $.ajax({
        url: '/laties',
        method: 'GET',
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            for(let i=0; i<data.length; i++) {
                let start = moment.duration('09:15', 'HH:mm');
                let end = moment.duration(data[i].time, 'HH:mm');
                let diff = end.subtract(start);

                let tooLate = diff.hours() + ':' + diff.minutes();

                $('.table tbody').append(`
                    <tr data-id="${data[i].id}">
                        <td>${data[i].name}</td>
                        <td>${data[i].date}</td>
                        <td>${data[i].time} (${tooLate})</td>
                        <td><button type="button" class="btn btn-primary btn-delete-laty">Delete</button></td>
                    </tr>
                `)
            }
        },
        error: function(err) {
            console.log('error getting the toolate comers: ' + err);
        }
    });


}

function buildLogin() {

}