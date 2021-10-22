window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','UA-66372868-3');jQuery(document).ready(function($){let url=new URL(window.location.href)
let params=new URLSearchParams(url.search);let sourceid=params.get('i')
if(params.get('i')){$("#i").val(sourceid);$("#i").disabled=true;}
$(function(){$("#form_id").on("submit",function(event){event.preventDefault();var dataString=$("#form_id").serialize();$.ajax({type:"GET",url:"https://consulta.yes.med.br/includes/consulta.php",data:dataString,cache:false,beforeSend:function(){$("#msg").val('Verificando...');},success:function(data){if(data=='E')
{$("#msg").html("Identificador InvÃ¡lido");}
else
{$("#msg").html("");$('#resp_c').html(data);$('#resp').modal('show');}
grecaptcha.reset();}});});});function printElement(elem){var domClone=elem.cloneNode(true);var $printSection=document.getElementById("printSection");if(!$printSection){var $printSection=document.createElement("div");$printSection.id="printSection";document.body.appendChild($printSection);}
$printSection.innerHTML="";$printSection.appendChild(domClone);window.print();}});