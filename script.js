document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const popup = document.getElementById("popup");

    sendBtn.addEventListener("click", function() {
        let message = userInput.value.trim();
        if (message === "") return;

        addMessage("user", message);
        userInput.value = "";

        setTimeout(() => {
            addMessage("bot", "已收到您的請求，即將根據請求繪製Chat RC限定圖片...");
            showLoading();
        }, 500);
    });

    function addMessage(sender, text) {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.innerHTML = text;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function showLoading() {
        let loadingDiv = document.createElement("div");
        loadingDiv.classList.add("loading");
        chatBox.appendChild(loadingDiv);
        chatBox.scrollTop = chatBox.scrollHeight;

        setTimeout(() => {
            loadingDiv.remove();
            showImage();
        }, 2000);
    }

    function showImage() {
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        let img = document.createElement("img");
        img.src = "IMG_7203.jpeg";
        img.alt = "愚人節圖片";

        let mask = document.createElement("div");
        mask.classList.add("image-mask");

        imageContainer.appendChild(img);
        imageContainer.appendChild(mask);
        chatBox.appendChild(imageContainer);
        chatBox.scrollTop = chatBox.scrollHeight;

        setTimeout(() => {
            mask.classList.add("reveal");
        }, 500);

        setTimeout(() => {
            showPopup();
        }, 5500);
    }

    function showPopup() {
        popup.classList.add("show");
        setTimeout(() => {
            popup.classList.remove("show");
        }, 2000);
    }
});
