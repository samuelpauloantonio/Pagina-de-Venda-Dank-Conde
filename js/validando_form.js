$(function(){
  
    $("form").submit(function(e){
        e.preventDefault();
        
        var nome = $("input[type=text]").val();
        var email = $("input[type=email]").val();
        var textarea = $("textarea").val();
        
        
      
        // CAMPO NOME 
        var amount = nome.split(' ').length;
        var splitStr = nome.split(' ');
        if(amount >= 2){
            for(var i = 0; i  < amount ; i++){
                if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                    
                }else{
                    styles($("input[type=text]"));
                    return false;
                }
            }
        }else{
            styles($("input[type=text]"));
            return false;

        }if($("input[type=email]") == ""){
            styles($("input[type=email]"));
            return false;

        }
        
        

        // email 
        if(email.match(/^([a-zA-Z0-9-_.]{1,})+@+([a-z.]{1,}$)/) == null){
           styles($("input[type=email]"));
            return false;

        }

        //textarea

        if(textarea.length < 90){
           var word =  $("form textarea").val("Digite mais Textos ");
           word.css("color", "black").css("fontWeight", "bold");
           
           return false;
        }

        alert("Formulario Enviado com sucesso!")
       
    })//formsubmit

    //estilos do compo

    function styles(e){
    e.css("border", "1px solid red");
    e.val("campo Invalido!");
    }
    
    function resetarCampos(e){
        e.css("border", "2px solid cornflowerblue");
        e.val("");
        }
        
        $("input[type=text],input[type=email],textarea").focus(function(){
            resetarCampos($(this));
            $(this).mouseout(function(){
                $(this).css("border","1px solid #ccc");
            })
        })
        
        
       

   
        
        
})//functionJquery