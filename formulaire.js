//on met en route une écoute d'événement sur toute la page
$(document).ready(function(){
    $("form").on('submit',function(event){
        event.preventDefault();
        var pwd = $('#pwd').val();
        var confirmpwd = $('#confirmpwd').val();
       if(pwd==confirmpwd){
            alert("Vos données sont bien enregistrées.");
            location.reload(true);
       }else{
            alert("ERREUR. La confirmation de votre mot de passe est mauvaise.");
       }
        
    })
})