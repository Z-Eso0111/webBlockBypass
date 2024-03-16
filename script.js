$(document).ready(function() {
  $("#ara_butonu").click(function() {
    var url = $("#url_giris").val();
    if (url === "") {
      alert("Lütfen bir URL girin!");
      return;
    }
    
    // Proxy listesini al
    var proxyListesi = $.get("Free_Proxy_List.txt", function(data) {
      return data.split("\n");
    });
    
    // Rastgele bir proxy seç
    var proxy = proxyListesi[Math.floor(Math.random() * proxyListesi.length)];
    
    // VPN ile siteyi aç
    $.ajax({
      url: url,
      proxy: proxy,
      success: function(data) {
        $("#sonuc_alani").html(data);
      },
      error: function(error) {
        alert("Hata: " + error.message);
      }
    });
  });
});
