$(() => {
    $('#apply').click(() => {

        var new_id = document.getElementById('new_id').value;
        var new_pswd = document.getElementById('new_pswd').value;
        var re_pswd = document.getElementById('re_pswd').value;

        if(!check_id(new_id)) {
            alert('ID Must Be 4~12 length of alphabet words');
            return;
        } else if(!check_pswd(new_pswd)) {
            alert('PSWD Must be 8 ~ 16 length of alphabet word');
            return;
        }

        if(new_pswd !== re_pswd) {
            alert('passwords are not corrected');
            return;
        }
        document.getElementById('form-adduser').submit();
    });
});