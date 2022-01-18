$('document').ready(function () {

    $('#select_a_file').on('click', function () {
        $('#Material_File').click();
    })

    $('#Register_Form').on('submit', function () {

        $('#Register_Form button').html('<i class="fa fa-chevron-right"></i> Processing <i class="fa fa-chevron-left"></i>');
        $('#Register_From button').attr('disabled', true);

        var Full_Name = $('#Full_Name').val();
        var User_Name = $('#User_Name').val();
        var Email = $('#Email').val();
        var Password = $('#Password').val();

        $.ajax({
            url: 'https://localhost/learnerscrib/Resource/php/register_new_user.php',
            data: {
                Full_Name,
                User_Name,
                Email,
                Password
            },
            method: 'POST',
            success: function (data) {
                console.log(data)
                data = JSON.parse(data)
                if (data.status == 1) {
                    swal("Good News!", data.message, "success", {
                        button: "Thank You!",
                    }).then(function () {
                        location.assign('./login.html');
                    });
                } else {
                    swal("Oops!", data.message, "error", {
                        button: "Oh, Okay.",
                    });
                    $('#Login_Form button').html('Try Again!');
                    $('#Login_Form button').removeAttr('disabled')
                }
            },
            error: function (data) {
                console.log(data)
                swal("Oops!", 'Error Connecting To Server', "error", {
                    button: "Oh, Okay.",
                });
                $('#Register_Form button').html('Try Again!');
                $('#Register_Form button').removeAttr('disabled')
            },
            fail: function (data) {
                console.log(data)
                swal("Oops!", 'Error Connecting To Server', "error", {
                    button: "Oh, Okay.",
                });
                $('#Register_Form button').html('Try Again!');
                $('#Register_Form button').removeAttr('disabled')
            }
        })

        return false;

    })

    $('#Login_Form').on('submit', function () {

        $('#Login_Form button').html('<i class="fa fa-chevron-right"></i> Processing <i class="fa fa-chevron-left"></i>');
        $('#Login_Form button').attr('disabled', true);

        var Email = $('#Email').val();
        var Password = $('#Password').val();

        $.ajax({
            url: 'https://localhost/learnerscrib/Resource/php/login_user.php',
            data: {
                Email,
                Password
            },
            method: 'POST',
            success: function (data) {
                console.log(data)
                data = JSON.parse(data)
                if (data.status == 1) {
                    swal("Good News!", data.message, "success", {
                        button: "Thank You!",
                    }).then(function () {
                        localStorage.setItem('resource_centre_user_logged_in', true)
                        localStorage.setItem('resource_centre_user_name', data.Username)
                        location.assign('./');
                    });
                } else {
                    swal("Oops!", data.message, "error", {
                        button: "Oh, Okay.",
                    });
                    $('#Login_Form button').html('Try Again!');
                    $('#Login_Form button').removeAttr('disabled')
                }
            },
            error: function (data) {
                console.log(data)
                swal("Oops!", 'Error Connecting To Server', "error", {
                    button: "Oh, Okay.",
                });
                $('#Login_Form button').html('Try Again!');
                $('#Login_Form button').removeAttr('disabled')
            },
            fail: function (data) {
                console.log(data)
                swal("Oops!", 'Error Connecting To Server', "error", {
                    button: "Oh, Okay.",
                });
                $('#Login_Form button').html('Try Again!');
                $('#Login_Form button').removeAttr('disabled')
            }
        })

        return false;

    })

    $('#Forgot_Password_Form').on('submit', function () {

        $('#Forgot_Password_Form button').html('<i class="fa fa-chevron-right"></i> Processing <i class="fa fa-chevron-left"></i>');
        $('#Forgot_Password_Form button').attr('disabled', true);

        var Email = $('#Email').val();

        $.ajax({
            url: 'https://localhost/learnerscrib/Resource/php/forgot_user_password.php',
            data: {
                Email
            },
            method: 'POST',
            success: function (data) {
                console.log(data)
                data = JSON.parse(data)
                if (data.status == 1) {
                    swal("Good News!", data.message, "success", {
                        button: "Thank You!",
                    });
                } else {
                    swal("Oops!", data.message, "error", {
                        button: "Oh, Okay.",
                    });
                    $('#Forgot_Password_Form button').html('Try Again!');
                    $('#Forgot_Password_Form button').removeAttr('disabled')
                }
            },
            error: function (data) {
                console.log(data)
                swal("Oops!", 'Error Connecting To Server', "error", {
                    button: "Oh, Okay.",
                });
                $('#Forgot_Password_Form button').html('Try Again!');
                $('#Forgot_Password_Form button').removeAttr('disabled')
            },
            fail: function (data) {
                console.log(data)
                swal("Oops!", 'Error Connecting To Server', "error", {
                    button: "Oh, Okay.",
                });
                $('#Forgot_Password_Form button').html('Try Again!');
                $('#Forgot_Password_Form button').removeAttr('disabled')
            }
        })

        return false;

    })

})