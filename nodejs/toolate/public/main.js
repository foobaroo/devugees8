$(document).ready(function() {
    console.log('ready');
    
    let urlParts = window.location.href.split('?');
    if(urlParts.length > 1) {
        let lastPart = urlParts[1];
        if(lastPart.split('=')[0] === 'activate') {
            let activationCode = lastPart.split('=')[1];
            $.ajax({
                url: '/activate/' + activationCode,
                method: 'GET',
                contentType: 'application/json',
                dataType: 'json',
                success: function(data) {
                    if(data.error == 0) {
                        alert('Your account has been activated');
                    }
                    else {
                        alert('Invalid activation code');
                    }
                },
                error: function(error) {
                    console.log('error ' + error);
                }
            })
        }
    }
    
    let loggedIn = localStorage.getItem('loggedIn');
    if(loggedIn && loggedIn == 1) {
        buildApp();
    }
    else {
        buildAuth();
    }
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

        loadHistory();
    });
    
    $('#link-logout').on('click', () => {
        $.ajax({
            url: '/logout',
            method: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            success: function(data) {
                console.log('success');
                localStorage.setItem('loggedIn', 0);
                buildAuth();
            },
            error: function(err) {
                console.log('error ' + err);
            }
        });
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

    $('#form-add').submit((e) => {
        e.preventDefault();

        let newLaty = {
            name: $('#input-name').val(),
            date: $('#input-date').val(),
            time: $('#input-time').val()
        };

        $.ajax({
            url: '/laties',
            method: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(newLaty),
            success: function(data) {
                console.log('success: ' + data);

                $('.alert-success').show().delay(2000).fadeOut('slow');
                $('#input-name').val('');
                $('#input-date').val('');
                $('#input-time').val('');
            },
            error: function(err) {
                console.log('error ' + err);
            }
        })
    });

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

    loadHistory();

    $('tbody').on('click', '.btn-delete-laty', (e) => {
        let row = $(e.target).parent().parent();
        let dataId = row.attr('data-id');

        $.ajax({
            url: '/laties/' + dataId,
            method: 'DELETE',
            contentType: 'application/json',
            dataType: 'json',
            success: function(data) {
                row.remove();
                console.log(data);
            },
            error: function(err) {
                console.log(err);
            }
        });
    });
}

function loadHistory() {
    $.ajax({
        url: '/laties',
        method: 'GET',
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {

            $('.table tbody').empty();
            for(let i=0; i<data.length; i++) {
                let start = moment.duration('09:15', 'HH:mm');
                let end = moment.duration(data[i].time, 'HH:mm');
                let diff = end.subtract(start);
    
                let tooLate = diff.hours() + ':' + diff.minutes();
    
                $('.table tbody').append(`
                    <tr data-id="${data[i]._id}">
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

function buildAuth() {
    $('body').empty();
    $('body').append(`
        <div id="content" class="container">
        <h2 style="margin-top: 20px;"><b>Laty App</b></h2>
        <div class="row">
        <div class="col-md-6">
        <div style="margin-top: 50px">
                        <form id="form-login">
                            <div class="form-group">
                            <label for="email">Email:</label>
                            <input style="max-width: 350px" class="form-control" id="email" placeholder="Enter Email">
                            </div>
                            <div class="form-group">
                            <label for="password">Password</label>
                            <input style="max-width: 350px" type="password"  class="form-control" id="password" placeholder="Password">                        
                            </div>               
                            <button type="submit" class="btn btn-primary">Login</button>     
                        </form>
                    </div>
            </div>
            <div class="col-md-6">
                    <div style="margin-top: 50px">
                            <form id="form-signup">
                            <div class="form-group">
                            <label for="email">Email:</label>
                            <input style="max-width: 350px" class="form-control" id="signup-email" placeholder="Enter Email">
                            </div>
                            <div class="form-group">
                            <label for="password">Password</label>
                            <input style="max-width: 350px" type="password"  class="form-control" id="signup-password" placeholder="Password">                        
                            </div>
                            <div class="form-group">
                            <label for="repeat-password">Repeat Password</label>
                            <input style="max-width: 350px" type="password"  class="form-control" id="signup-repeat-password" placeholder="Repeat Password">                        
                            </div>                            
                            <button type="submit" class="btn btn-primary">Sign Up</button>     
                        </form>
                    </div>
            </div>        
        </div>            
        </div>    
    `);

    $('#form-login').submit((e) => {
        e.preventDefault();

        let userData = {
            email: $('#email').val(),
            password: $('#password').val()
        };

        $.ajax({
            url: '/login',
            method: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(userData),
            success: function(data) {
                console.log('success ' + data);

                if(data.error === 0) {
                    localStorage.setItem('loggedIn', 1);
                    buildApp();
                }
                else {
                    alert('Email not found');
                    $('#email').val('');
                    $('#password').val('') ;                   
                }
            },
            error: function(err) {
                console.log('error ' + err);
            }
        });
    });

    $('#form-signup').submit((e) => {
        e.preventDefault();

        let userData = {
            email: $('#signup-email').val(),
            password: $('#signup-password').val(),
            repeatPassword: $('#signup-repeat-password').val()
        };

        $.ajax({
            url: '/signup',
            method: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(userData),
            success: function(data) {
                console.log('success ' + data);

                if(data.error == 0) {
                    alert(`An registration mail has been sent to ${userData.email}, please verify your account!`);

                    $('#signup-email').val('');
                    $('#signup-password').val('')
                    $('#signup-repeat-password').val('');
                }
                else {
                    alert('Error during registratin process');
                }
            },
            error: function(err) {
                console.log('error ' + err);
            }
        });
    });    
}