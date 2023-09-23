//on met en route une écoute d'événement sur toute la page
$(document).ready(function(){
    $("form").on('submit',function(event){
        event.preventDefault();
        var pwd = $('#pwd').val();
        var confirmpwd = $('#confirmpwd').val();
        var cp = $('#cp').val();
        var tel = $('#tel').val();
        var pattern="(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}";

       if(cp.length !=5){
            alert("ERREUR. Le code postal n'est pas valide.");
       }else if(pwd!=confirmpwd){
            alert("ERREUR. La confirmation de votre mot de passe est mauvaise.");
       }else if(tel.length != 10){
            alert("ERREUR. Le tel n'est pas valide.");
       }else if(!pwd.match(pattern)){
        
            alert("ERREUR. Le mot de passe doit contenir 12 caractère, au moins 1 majuscule, 1 chiffre et 1 caractère spécial.");
       }
       //touttes les données ont été correctement entrées
        else{
            alert("Vos données sont bien enregistrées.");
            location.reload(true);
       }
    })
})