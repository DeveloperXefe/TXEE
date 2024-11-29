   function chatbotResponse(userInput) {
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes("merhaba")) {
        return "Merhaba! Size nasıl yardımcı olabilirim?";
    } else if (lowerInput.includes("nasılsın")) {
        return "Ben bir yapay zekayım, duygularım yok ama yardımcı olmak için buradayım!";
    } else if (lowerInput.includes("adın ne")) {
        return "Benim adım TXE, seninle konuşmak için buradayım!";
    } else if (lowerInput.includes("yardım")) {
        return "Sana nasıl yardımcı olabilirim? Sorularınızı bana sorabilirsiniz.";

    } else if (lowerInput.includes("txe")) {
        return "TXE 2024 yılında iki ortak iki bir birini seven insan yan yana gelip büyük bir şirket hale gelmesi diyebiliriz ;).";
    
    } else if (lowerInput.includes("ürünüm gelmedi")) {
        return "Tamadır şuan bildirim kutusuna mesajınız gitmiştir şimdi ilgileniyoruz bu konu hakkında yardımcı olucagım hemen bekleyiniz.";

    } else if (lowerInput.includes("naber")) {
        return "iyi senden";

    } else if (lowerInput.includes("iyi")) {
        return "iyi güzel";

    } else if (lowerInput.includes("iyi günler")) {
        return "nasıl yardım ederim";

    }
    else if(lowerInput.includes("nasıl alışveriş yapabilirim")){
        return"Öncelikle hesap oluşturunuz sonra ürünler sekmesine tıklayarak alışverişe başlaya bilirsiniz";
    }
    else if (lowerInput.includes("siparişim geçikti")){
        return"hemen ilgileniyoruz başka yardımcı olablicegimiz bir şey varmı";
    }
    else if (lowerInput.includes("kayıt olamıyorum")){
        return"şuan da sisteme bakıyoruz hatayı en kısa sürede çözmeye çalışıyoruz.";
    }
    else if (lowerInput.includes("siteniz çok güzel")){
        return"teşekkür ederiz sevindim buna :)";
    }
     else if (lowerInput.includes("mrb")) {
    return "merb";
}

    
    else {
        return "Üzgünüm, anlayamadım. Lütfen başka bir şey sor.";
    }
}

// Kullanıcının mesajını ekle ve chatbot cevabını göster
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return; // Boş mesaj gönderme

    // Kullanıcı mesajını chat kutusuna ekle
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = "Sen: " + userInput;
    document.getElementById("chat-box").appendChild(userMessage);

    // Chatbot cevabını al ve ekle
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot-message");
    const response = chatbotResponse(userInput);
    botMessage.textContent = "TXE: " + response;
    document.getElementById("chat-box").appendChild(botMessage);

    // Chat kutusunu en alta kaydır
    document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;

    // Kullanıcı inputunu temizle
    document.getElementById("user-input").value = "";
}

// Enter tuşu ile mesaj gönderme
document.getElementById("user-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});