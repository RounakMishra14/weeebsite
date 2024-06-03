document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            document.getElementById('ip').value = ip;

            fetch(`https://ipinfo.io/${ip}/geo`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById('location').value = data.loc;
                    document.getElementById('infoForm').submit();
                });
        });
});
