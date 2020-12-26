const _login = (id, pswd) => {
    /*
        ID는 4 ~ 12자 영어만
        PSWD는 4 ~ 16자 모든 문자 허용
    */
    const reID = /^[a-zA-Z]{4,12}$/;
    if(!reID.test(id)) {
        alert('ID Must Be 6~12 length of alphabet words');
        return;
    }
    else if(pswd.length < 4 || pswd.length > 16) {
        alert('PSWD Must be 8 ~ 16 length of alphabet words');
        return;
    }
    document.getElementById('editor').submit();
}

$(() => {
    $('#login-btn').click(() => {
        // Checking Logins
        var id = document.getElementById('id').value;
        var pswd = document.getElementById('pswd').value;
        _login(id, pswd);
    });
    $('#login-btn').hover(() => {
        $('#login-btn').css("color", "#AECCD1");
        console.log('a');
    }, () => {
        $('#login-btn').css("color", "#277BBA");
    });
});