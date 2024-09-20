// App Upload
document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const appName = document.getElementById("appName").value;
    const appFile = document.getElementById("appFile").files[0];

    if (appName && appFile) {
        const formData = new FormData();
        formData.append("appName", appName);
        formData.append("appFile", appFile);

        // Simulate backend upload (this part will depend on your backend server)
        // Here we're just showing a mock success message
        document.getElementById("uploadStatus").innerText = "App uploaded successfully!";

        // Add the uploaded app to the list (mockup)
        const appList = document.getElementById("appList");
        const listItem = document.createElement("li");
        listItem.textContent = appName;
        appList.appendChild(listItem);
    } else {
        alert("Please provide both app name and file.");
    }
});

// Login Form Handling
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulate a login (In real life, this would send data to a backend server)
    if (username === "admin" && password === "password") {
        document.getElementById("loginStatus").innerText = "Login successful!";
        document.getElementById("loginStatus").style.color = "green";
    } else {
        document.getElementById("loginStatus").innerText = "Invalid username or password.";
        document.getElementById("loginStatus").style.color = "red";
    }
});
