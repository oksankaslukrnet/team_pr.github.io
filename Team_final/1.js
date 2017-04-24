


function Redirect() {
               window.location = "main.html";
            }



function prov_adress(obj) {
  var name = obj.name.value;
  var surname = obj.surname.value;
  var fathers_name = obj.fathers_name.value;
  var mail = obj.mail.value;
  var phon_number = obj.phon_number.value;
  
  var name_pattern = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
  var surname_pattern = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
  var fathers_name_pattern= /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
  var mail_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phon_number_pattern= /\d{3}-\d{3}-\d{4}/;

  var prov = name_pattern.test(name);
  var prov1 = surname_pattern.test(surname);
  var prov2 = fathers_name_pattern.test(fathers_name);
  var prov3 =  mail_pattern.test(mail);
  var prov4 = phon_number_pattern.test(phon_number)
   
  var name_f = document.getElementById("name").value;
  var length1 = name_f.length;
  var surname_f = document.getElementById("surname").value;
  var length2 = surname_f.length;
  var fathers_name_f = document.getElementById("fathers_name").value;
  var length3 = fathers_name_f.length;
  
  
    if (prov == true &&  prov1 == true &&  prov2 == true  &&  prov3 == true && prov4 == true &&
      length1 >= 3 == true &&  length1 <= 15 == true &&  length2 >= 3 == true &&  length2 <= 15 == true &&  length3 >= 3 == true &&  length3 <= 15 == true)
     {
      if( document.getElementById("checkbox").checked ==true){
        alert("Дякуєм, що обрали нас, неодмінно звяжемося з Вами найблищим часом");
        Redirect();
      }
        else{ alert("Ви не прийняли умови і правила нашої компанії")}
  }
  else {
        alert("Введені дані є некоректними");
  }

}
 
