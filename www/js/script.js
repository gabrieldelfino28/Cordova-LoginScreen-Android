
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


function buttonLogin(){ //Método de Login
  var done=0;
  var username=document.login.username.value;
  username=username.toLowerCase();
  var password=document.login.password.value;
  password=password.toLowerCase();

  if(username=="joao" && password=="123"){
    alert('Logado com sucesso!');
    console.log('Logado com sucesso!');
    done=1;
  }
	else if(username=="lucas" && password=="123"){
    alert('Logado com sucesso!');
    console.log('Logado com sucesso!');
    done=1;
  }

  else if(username=="daniel" && password=="123"){
    alert('Logado com sucesso!');
    console.log('Logado com sucesso!');
    done=1;
  }
  if (done==0) {alert("Usuario e/ou senha incorretos")}
  
}