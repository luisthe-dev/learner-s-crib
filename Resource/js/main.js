$('document').ready(function () {

    // var main_url = 'http://localhost/learnerscrib/Resource/php';
    var main_url = 'https://platiniumxpwallet.com/learnerscrib';

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
            url: main_url + '/register_new_user',
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
                        location.assign('./login');
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
            url: main_url + '/login_user',
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
            url: main_url + '/forgot_user_password',
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
        url: main_url + '/get_all_materials',
        success: function (data) {
            data = JSON.parse(data)
            if (data.status == 1) {
                for (var material_count = 0; material_count < data.data.length; material_count++) {
                    var main_data = data.data[material_count];
                    var AddMaterial =
                        '<a href="#">' +
                        '<div class="main_list_file">' +
                        '<div class="main_list_file_left">' +
                        '<img src="./img_placeholder/' + main_data.File_Type + '.png" alt="Material Title (pdf file)">' +
                        '<label> ' + main_data.File_Type.toUpperCase() + ' File </label>' +
                        '</div>' +
                        '<div class="main_list_file_center">' +
                        '<h3> ' + main_data.File_Name + ' </h3>' +
                        '<h6> ' + main_data.File_Description + ' </h6>' +
                        '<p> Uploaded By <span> ' + main_data.User + ' </span> On <span> ' + main_data.When_Uploaded + ' </span> </p>' +
                        '</div>' +
                        '<div class="main_list_file_right">' +
                        '<label>' + main_data.Download_Count + ' Downloads </label>' +
                        '<i class="fas fa-star"></i>' +
                        '<i class="fas fa-star"></i>' +
                        '<i class="fas fa-star"></i>' +
                        '<i class="far fa-star"></i>' +
                        '<i class="far fa-star"></i>' +
                        '</div>' +
                        '</div>' +
                        '</a>';
                    $('#main_list_file_container').append(AddMaterial);
                }
                if (data.data.length < 13) {
                    $('#load_more_button').remove()
                }
            } else {
                $('#main_list_file_container').html('<h3> No Materials Are Currently Available </h3>')
                $('#load_more_button').remove()
            }
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
            url: main_url + '/upload_new_material',
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