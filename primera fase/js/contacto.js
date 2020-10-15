function validacion()
{
     nom   = document.getElementById('nombre').value;
     apell = document.getElementById('apellido').value;
     fono  = document.getElementById('telefono').value;
     email = document.getElementById('mail').value;
     asun  = document.getElementById('asunto').selectedIndex;
     mens  = document.getElementById('mensaje').value; 

    if(nom == null || nom.length ==0 || /^\s+$/.test(nom))
    {
        alert('Error... debe ingresar un nombre válido');
        document.datos.nom.focus();
        return false;
    }

    if(apell == null || apell.length == 0 || /^\s+$/.test(apell))
    {
        alert('Error... debe ingresar un apellido válido');
        document.datos.apell.focus();
        return false;
    }

    if(!(/^\d{9}$/.test(fono)))
    {
        alert('Error... debe ingresar un telefono válido');
        document.datos.fono.focus();
        document.getElementById('telefono').value="";
        return false;
    }

    if(email == null || email.length == 0)
    {
        alert('Error... debe ingresar un mail válido');
        document.datos.email.focus();
        return false;
    }

    if(asun == null || asun == 0){
        alert('Error... debe ingresar un tipo de asunto');
        document.datos.asunto.focus();
        return false;
    }
    

    if(mens == null || mens.length == 0)
    {
        alert('Error... debe ingresar un mensaje válido');
        document.datos.mens.focus();
        return false;
    }   
    
    alert('Hola ' + nom +' '+  apell + ' Hemos recibido tu mail, fue enviado desde ' + email + ' Nos contaremos pronto!');

    

    
}




