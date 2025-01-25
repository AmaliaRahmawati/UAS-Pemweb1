// Fungsi untuk memuat status login
function checkLoginStatus() {
    const loginStatus = localStorage.getItem('isLoggedIn');

    // Ambil elemen tombol berdasarkan ID
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        if (loginStatus === 'true') {
            // Ubah tombol menjadi Logout
            loginButton.textContent = 'Logout';
            loginButton.classList.remove('btn-success');
            loginButton.classList.add('btn-danger');

            // Tambahkan event untuk Logout
            loginButton.addEventListener('click', function (e) {
                e.preventDefault(); // Hindari navigasi ke login.html
                localStorage.removeItem('isLoggedIn'); // Hapus status login
                alert('Anda telah logout.');
                window.location.reload(); // Reload halaman untuk memperbarui UI
            });
        }
    } else {
        console.error('Elemen dengan ID "loginButton" tidak ditemukan.');
    }
}

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', checkLoginStatus);