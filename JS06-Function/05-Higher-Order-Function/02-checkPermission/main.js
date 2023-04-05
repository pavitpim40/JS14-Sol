// function adminFN() {
//     alert('Admin');
// }

// const adminFN = function () {
//     alert('Admin');
// };

// const adminFN = () => alert('Admin');

function guestFN() {
    alert('Guest');
}

function checkPermission(username, admin, guest) {
    if (username == 'admin') admin();
    else guest();
}

checkPermission('admin', () => alert('Admin'), guestFN);
