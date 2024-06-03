document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userAgent = navigator.userAgent;
    document.getElementById('userAgent').value = userAgent;

    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const availWidth = screen.availWidth;
    const availHeight = screen.availHeight;
    const colorDepth = screen.colorDepth;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    document.getElementById('screenWidth').value = screenWidth;
    document.getElementById('screenHeight').value = screenHeight;
    document.getElementById('availWidth').value = availWidth;
    document.getElementById('availHeight').value = availHeight;
    document.getElementById('colorDepth').value = colorDepth;
    document.getElementById('timezone').value = timezone;

    // Collect battery status
    navigator.getBattery().then(function(battery) {
        const batteryLevel = battery.level * 100;
        const isCharging = battery.charging;
        document.getElementById('batteryLevel').value = batteryLevel;
        document.getElementById('isCharging').value = isCharging;

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
});
