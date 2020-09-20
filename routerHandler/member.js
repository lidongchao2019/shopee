exports.register = (req, res) => {
    console.log('/member/register');
    res.send('register');
}

exports.login = (req, res) => {
    console.log('/member/login');
    res.send('login');
}