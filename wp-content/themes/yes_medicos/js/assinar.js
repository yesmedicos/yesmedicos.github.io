var gfhfgjj24 = 1; function setCookie(cookieName, cookieValue, cookieExhours) {
 var d = new Date();
 d.setTime(d.getTime() + (cookieExhours*60*60*1000));
 var expires = "expires="+ d.toUTCString();
 document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
 var name = cookieName + "=";
 var ca = document.cookie.split(';');
 for(var i = 0; i <ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0)==' ') {
   c = c.substring(1);
  }
  if (c.indexOf(name) == 0) {
   return c.substring(name.length,c.length);
  }
 }
 return "";
}




jQuery(document).ready(function() {
	
var assinatura=getCookie("assinatura");
  if (assinatura!="") {
     var retorno = '<div class="alert alert-success" role="alert">';
        retorno +="Você já solicitou a criação de um ambiente para você!  Suas credenciais de acesso foram enviadas para seu e-mail. <a href='https://www.yes.med.br'> Clique aqui </a> para fazer login em nosso sistema. <br><small>Você pode tentar uma vez a cada 1 hora.</small>";
        retorno+="</div>";
      
       document.getElementById("message").innerHTML = retorno, jQuery("#message").slideDown("slow"), jQuery("#submit").removeAttr("disabled");
        jQuery("#assinarform :input").prop("disabled", true);
	  } 




 jQuery("#assinarform").on("submit", function(event) {

    event.preventDefault();
    var dataString = jQuery("#assinarform").serialize();
        jQuery("#assinarform :input").prop("disabled", true);

    jQuery.ajax({
        type: "POST",
        url: "https://www.yesmedicos.com.br/wp-content/themes/yes_medicos/assinatura/p_assinar.php",
        data: dataString,
        cache: false,
        beforeSend: function(){ jQuery("#login").val('Conectando...'); document.getElementById("assinarform").disabled = true;},
        success: function(data){
            console.log(data);
            if(data=='OK'){
                var retorno = '<div class="alert alert-success" role="alert">';
                retorno += "<h3><b>Obrigado por nos escolher "+jQuery("#name").val()+"!</b> Agora você já pode começar a usar o YES Médicos. Suas credenciais de acesso foram enviadas para seu e-mail. <a href='https://www.yes.med.br'> Clique aqui </a> para fazer login em nosso sistema. <br>Abraço!</h3>";
                retorno+="</div>";
              
               setCookie("assinatura","tudo ok",1);
               document.getElementById("message").innerHTML = retorno, jQuery("#message").slideDown("slow"), jQuery("#submit").removeAttr("disabled");
               jQuery("#assinarform").hide();
            }else{
        jQuery("#assinarform :input").prop("disabled", false);
               
               var retorno = '<div class="alert alert-danger" role="alert">';
                retorno +=data;
                retorno+="</div>";
              
               document.getElementById("message").innerHTML = retorno, jQuery("#message").slideDown("slow"), jQuery("#submit").removeAttr("disabled");
               document.getElementById("assinarform").disabled = false;

            }
        },
        error: function(data){
                           var retorno = '<div class="alert alert-danger" role="alert">';
                retorno +="Erro interno. Por favor, atualize a página!";
                retorno+="</div>";
              
               document.getElementById("message").innerHTML = retorno, jQuery("#message").slideDown("slow"), jQuery("#submit").removeAttr("disabled");
        }
    });
});


   	jQuery("#telefone").mask("(99)9999-9999?9");
});
