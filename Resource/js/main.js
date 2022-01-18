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
            url: 'http://localhost/learnerscrib/Resource/php/register_new_user.php',
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
            url: 'http://localhost/learnerscrib/Resource/php/login_user.php',
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
            url: 'http://localhost/learnerscrib/Resource/php/forgot_user_password.php',
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

    $.ajax({
        url: 'http://localhost/learnerscrib/Resource/php/get_all_materials.php',
        success: function (data) {
            data = JSON.parse(data)
            console.log(data)
        },
        error: function (data) {
            console.log(data)
        },
        fail: function (data) {
            console.log(data)
        }
    })


    $('#material_form').on('submit', function () {

        $('#material_form button[type="submit"]').html('<i class="fa fa-chevron-right"></i> Processing <i class="fa fa-chevron-left"></i>');
        $('#material_form button[type="submit"]').attr('disabled', true);

        var Material_Form_Data = new FormData();

        Material_Form_Data.append('Material_File', $('#Material_File')[0].files[0]);
        Material_Form_Data.append('Material_Name', $('#Material_Name').val());
        Material_Form_Data.append('Course_Title', $('#Course_Title').val());
        Material_Form_Data.append('Course_Code', $('#Course_Code').val());
        Material_Form_Data.append('Material_Description', $('#Material_Description').val());
        Material_Form_Data.append('Course_Level', $('#Course_Level').val());

        $.ajax({
            url: 'http://localhost/learnerscrib/Resource/php/upload_new_material.php',
            data: Material_Form_Data,
            method: 'POST',
            contentType: false,
            processData: false,
            success: function (data) {
                console.log(data)
                data = JSON.parse(data)
                if (data.status == 1) {
                    swal("Good News!", data.message, "success", {
                        button: "Thank You!",
                    }).then(function () {
                        location.assign('./');
                    });
                } else {
                    swal("Oops!", data.message, "error", {
                        button: "Oh, Okay.",
                    });
                    $('#material_form button[type="submit"]').html('Try Again!');
                    $('#material_form button[type="submit"]').removeAttr('disabled')
                }
            },
            error: function (data) {
                console.log(data)
                swal("Oops!", 'Error Connecting To Server', "error", {
                    button: "Oh, Okay.",
                });
                $('#material_form button[type="submit"]').html('Try Again!');
                $('#material_form button[type="submit"]').removeAttr('disabled')
            },
            fail: function (data) {
                console.log(data)
                swal("Oops!", 'Error Connecting To Server', "error", {
                    button: "Oh, Okay.",
                });
                $('#material_form button[type="submit"]').html('Try Again!');
                $('#material_form button[type="submit"]').removeAttr('disabled')
            }
        })

        return false;

    })

})