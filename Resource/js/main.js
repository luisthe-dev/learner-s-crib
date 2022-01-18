$('document').ready(function () {

    $('#Register_Form').on('submit', function () {

        $('#Register_Form button').html('<i class="fa fa-chevron-right"></i> Processing <i class="fa fa-chevron-left"></i>');
        $('#Register_From button').attr('disabled', true);

        var Full_Name = $('#Full_Name').val();
        var User_Name = $('#User_Name').val();
        var Email = $('#Email').val();
        var Password = $('#Password').val();

        $.ajax({
            url: './php/register_new_user.php',
            data: {
                Full_Name,
                User_Name,
                Email,
                Password
            },
            method: 'POST',
            success: function (data) {
                console.log(data)
            },
            error: function (data) {
                console.log(data)
            },
            fail: function (data) {
                console.log(data)
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
            url: './php/login_user.php',
            data: {
                Email,
                Password
            },
            method: 'POST',
            success: function (data) {
                console.log(data)
            },
            error: function (data) {
                console.log(data)
            },
            fail: function (data) {
                console.log(data)
            }
        })

        return false;

    })

    $('#Forgot_Password_Form').on('submit', function () {

        $('#Forgot_Password_Form button').html('<i class="fa fa-chevron-right"></i> Processing <i class="fa fa-chevron-left"></i>');
        $('#Forgot_Password_Form button').attr('disabled', true);

        var Email = $('#Email').val();

        $.ajax({
            url: './php/forgot_user_password.php',
            data: {
                Email
            },
            method: 'POST',
            success: function (data) {
                console.log(data)
            },
            error: function (data) {
                console.log(data)
            },
            fail: function (data) {
                console.log(data)
            }
        })

        return false;

    })

})