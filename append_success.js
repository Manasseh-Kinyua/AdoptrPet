var data = new formData();
data.append('fname', 'fname');
data.append('email', 'email');
data.append('number', 'number');
data.append('address', 'address');
data.append('profilePicture', $('#profilePicture')[0].files[0]);
for (var i = 0; i < $('#document')[0].files.length; i++) {
    data.append('document[]', $('#document')[0].files[i]);
}
