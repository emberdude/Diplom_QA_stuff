function CreateRequest()
{
    var Request = false;

    if (window.XMLHttpRequest)
    {
        
        Request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {
        //Internet explorer
        try
        {
             Request = new ActiveXObject("Microsoft.XMLHTTP");
        }    
        catch (CatchException)
        {
             Request = new ActiveXObject("Msxml2.XMLHTTP");
        }
    }
 
    if (!Request)
    {
        alert("	error create XMLHttpRequest");
    }
    
    return Request;
} 
///////////////////////////////////////////////////////////
function SendRequest(r_method, r_path, r_args, r_handler)
{
    
    var Request = CreateRequest();
    
   
    if (!Request)
    {
        return;
    }
    
    
    Request.onreadystatechange = function()
    {
      	    r_handler(Request);
    }
    
    
    if (r_method.toLowerCase() == "get" && r_args.length > 0)
    r_path += "?" + r_args;
    
   
    Request.open(r_method, r_path, true);
    
    if (r_method.toLowerCase() == "post")
    {
        
        Request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		
		//Request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
		
		//Request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=windows-1251");
		
        //Request.setRequestHeader("Content-Type", 'text/plain; charset=windows-1251');
        
		
        Request.send(r_args);
    }
    else
    {
        
        Request.send(null);
    }
} 

function ReadFile(filename, container)
{
    
    var Handler = function(Request)
    {
        document.getElementById(container).innerHTML = Request.responseText;
    }
    
    
    SendRequest("GET",filename,"",Handler);
    
} 

function ReadString(container, src)
{
	s = src + '=' + encodeURIComponent(document.getElementById(src).value);
    
    var Handler = function(Request)
    {
        document.getElementById(container).innerHTML = Request.responseText;
    }
    
    SendRequest("POST","hi.jsp",s,Handler);
    
} 


function my_mark(container, c, t)
{
	f = container.name+'.result';
    container.style.backgroundColor = c;
	if( !document.getElementById(f)) 
	    container.alt = t;
	else
		document.getElementById(f).innerHTML = t;
}


function SendUpdate(container, form, param)
{
	var old_color = String(container.style.backgroundColor);
    
    var watchman = function(Request)
    {
        container.style.backgroundColor = 'green';
    	if (Request.readyState != 4)
		{
//	        old_color = container.style.backgroundColor;
	        container.style.backgroundColor = 'yellow';
		}
	    else if (Request.status != 200)
        {
			//error server
			alert('server error:'+Request.status);
			my_mark(container, 'red', 'server error:'+Request.status);
		}
		else if (!Request.responseText.match('(\n|\r|\s)*(Ok)'))
		{
			alert(Request.responseText);
			my_mark(container, 'red', Request.responseText);
	    }
		else if (Request.responseText.match('(\n|\r|\s)*(Ok)'))
	    {
			my_mark(container, old_color, 'Ok');
	    }
    	else
	    {
			my_mark(container, 'black', '???');
			//        container.style.backgroundColor = 'green';
	    }
    }
    
    // так НЕ работает
	SendRequest("POST", form, param, watchman);
	
	// так работает
	//SendRequest("GET", form, param, watchman);
    
} 

function store(p, t, key_field, key_value)
{
//    SendUpdate(p, 'ajax_update.jsp', 't='+t+'&k='+key_field+'&kv='+key_value+'&f='+p.name+'&v='+encodeURIComponent(p.value))

var pvalue="";
pvalue= p.value;
if (pvalue==null)pvalue="null";
pvalue = urlEncode(pvalue) ;
pvalue=pvalue.replace(/\&#/g,"!AMP#;"); 
pvalue=pvalue.replace(/\&/g,"!AMP;"); 


    SendUpdate(p, 'ajax_update4.jsp', 't='+t+'&k='+key_field+'&kv='+key_value+'&f='+p.name+'&v='+ pvalue)
}


function store2(p, t, key_field, key_value, key_field2, key_value2)
{
  var pvalue="";
pvalue= p.value;
pvalue = urlEncode(pvalue) ;
pvalue=pvalue.replace(/\&#/g,"!AMP#;"); 
pvalue=pvalue.replace(/\&/g,"!AMP;"); 

    SendUpdate(p, 'ajax_update4.jsp', 't='+t+'&k='+key_field+'&kv='+key_value+'&f='+p.name+'&v='+ pvalue+'&k2='+key_field2+'&kv2='+key_value2)
}

function store3(p, t, key_field, key_value, key_field2, key_value2, key_field3, key_value3)
{
var pvalue="";
pvalue= p.value;
pvalue = urlEncode(pvalue) ;
pvalue=pvalue.replace(/\&#/g,"!AMP#;"); 
pvalue=pvalue.replace(/\&/g,"!AMP;"); 


    SendUpdate(p, 'ajax_update4.jsp', 't='+t+'&k='+key_field+'&kv='+key_value+'&f='+p.name+'&v='+ pvalue+'&k2='+key_field2+'&kv2='+key_value2+'&k3='+key_field3+'&kv3='+key_value3)
}
function store4(p, t, key_field, key_value, key_field2, key_value2, key_field3, key_value3, key_field4, key_value4)
{
var pvalue="";
pvalue= p.value;
pvalue = urlEncode(pvalue) ;
pvalue=pvalue.replace(/\&#/g,"!AMP#;"); 
pvalue=pvalue.replace(/\&/g,"!AMP;"); 


    SendUpdate(p, 'ajax_update4.jsp', 't='+t+'&k='+key_field+'&kv='+key_value+'&f='+p.name+'&v='+ pvalue+'&k2='+key_field2+'&kv2='+key_value2+'&k3='+key_field3+'&kv3='+key_value3 +'&k4='+key_field4+'&kv4='+key_value4)
}

function store44(p, t, key_field, key_value, key_field2, key_value2, key_field3, key_value3, key_field4, key_value4)
{
var pvalue="";
pvalue= p.value;
pvalue = urlEncode(pvalue) ;
pvalue=pvalue.replace(/\&#/g,"!AMP#;"); 
pvalue=pvalue.replace(/\&/g,"!AMP;"); 


    SendUpdate(p, 'ajax_update44.jsp', 't='+t+'&k='+key_field+'&kv='+key_value+'&f='+p.name+'&v='+ pvalue+'&k2='+key_field2+'&kv2='+key_value2+'&k3='+key_field3+'&kv3='+key_value3 +'&k4='+key_field4+'&kv4='+key_value4)
}


function store_tus(p, t, key_field, key_value)
{
//    SendUpdate(p, 'ajax_update.jsp', 't='+t+'&k='+key_field+'&kv='+key_value+'&f='+p.name+'&v='+encodeURIComponent(p.value))

var pvalue="";
pvalue= p.value;
pvalue = urlEncode(pvalue) ;
pvalue=pvalue.replace(/\&#/g,"!AMP#;"); 
pvalue=pvalue.replace(/\&/g,"!AMP;"); 


    SendUpdate(p, 'ajax_update_tus.jsp', 't='+t+'&k='+key_field+'&kv='+key_value+'&f='+p.name+'&v='+ pvalue)
}

function store2_tus(p, t, key_field, key_value, key_field2, key_value2)
{
//    SendUpdate(p, 'ajax_update.jsp', 't='+t+'&k='+key_field+'&kv='+key_value+'&f='+p.name+'&v='+encodeURIComponent(p.value))

var pvalue="";
pvalue= p.value;
pvalue = urlEncode(pvalue) ;
pvalue=pvalue.replace(/\&#/g,"!AMP#;"); 
pvalue=pvalue.replace(/\&/g,"!AMP;"); 


    SendUpdate(p, 'ajax_update_tus.jsp', 't='+t+'&k='+key_field+'&kv='+key_value+'&f='+p.name+'&v='+ pvalue+'&k2='+key_field2+'&kv2='+key_value2)
}



function ins_store4(p, t, key_field, key_value, key_field2, key_value2, key_field3, key_value3, key_field4, key_value4)
{
var pvalue="";
pvalue= p.value;
pvalue = urlEncode(pvalue) ;
pvalue=pvalue.replace(/\&#/g,"!AMP#;"); 
pvalue=pvalue.replace(/\&/g,"!AMP;"); 


    SendUpdate(p, 'ajax_insert_update4.jsp', 't='+t+'&k='+key_field+'&kv='+key_value+'&f='+p.name+'&v='+ pvalue+'&k2='+key_field2+'&kv2='+key_value2+'&k3='+key_field3+'&kv3='+key_value3 +'&k4='+key_field4+'&kv4='+key_value4)
}

function ins_store_tus(p, t, key_field, key_value, key_field2, key_value2, key_field3, key_value3, key_field4, key_value4)
{
var pvalue="";
pvalue= p.value;
pvalue = urlEncode(pvalue) ;
pvalue=pvalue.replace(/\&#/g,"!AMP#;"); 
pvalue=pvalue.replace(/\&/g,"!AMP;"); 


    SendUpdate(p, 'ajax_insert_update_tus.jsp', 't='+t+'&k='+key_field+'&kv='+key_value+'&f='+p.name+'&v='+ pvalue+'&k2='+key_field2+'&kv2='+key_value2+'&k3='+key_field3+'&kv3='+key_value3 +'&k4='+key_field4+'&kv4='+key_value4)
	
}


function store_direct_tus(p, t, key_field, key_value)
{
var pvalue="";
pvalue= p.value;
pvalue = urlEncode(pvalue) ;
pvalue=pvalue.replace(/\&#/g,"!AMP#;"); 
pvalue=pvalue.replace(/\&/g,"!AMP;"); 
    SendUpdate(p, 'ajax_update_direct_tus.jsp', 't='+t+'&k='+key_field+'&kv='+key_value+'&f='+p.name+'&v='+ pvalue)
}

function store4_direct_tus(p, t, key_field, key_value, key_field2, key_value2, key_field3, key_value3, key_field4, key_value4)
{
var pvalue="";
pvalue= p.value;
pvalue = urlEncode(pvalue) ;
pvalue=pvalue.replace(/\&#/g,"!AMP#;"); 
pvalue=pvalue.replace(/\&/g,"!AMP;"); 
    SendUpdate(p, 'ajax_update4_direct_tus.jsp',  't='+t+'&k='+key_field+'&kv='+key_value+'&f='+p.name+'&v='+ pvalue+'&k2='+key_field2+'&kv2='+key_value2+'&k3='+key_field3+'&kv3='+key_value3 +'&k4='+key_field4+'&kv4='+key_value4)
}

function store4_time_direct_tus(p, t, key_field, key_value, key_field2, key_value2, key_field3, key_value3, key_field4, key_value4)
{
var pvalue="";
pvalue= p.value;
pvalue = urlEncode(pvalue) ;
pvalue=pvalue.replace(/\&#/g,"!AMP#;"); 
pvalue=pvalue.replace(/\&/g,"!AMP;"); 
    SendUpdate(p, 'ajax_update4_time_direct_tus.jsp',  't='+t+'&k='+key_field+'&kv='+key_value+'&f='+p.name+'&v='+ pvalue+'&k2='+key_field2+'&kv2='+key_value2+'&k3='+key_field3+'&kv3='+key_value3 +'&k4='+key_field4+'&kv4='+key_value4)
}


function delete4(p, t, key_field, key_value, key_field2, key_value2, key_field3, key_value3, key_field4, key_value4)
{
    SendUpdate(p, 'ajax_delete4.jsp', 't=' + t +'&k='+ key_field+'&kv='+key_value + '&k2='+ key_field2 +'&kv2='+key_value2+'&k3='+key_field3+'&kv3='+key_value3 +'&k4='+key_field4+'&kv4='+key_value4);
	
}

function delete4_tus(p, t, key_field, key_value, key_field2, key_value2, key_field3, key_value3, key_field4, key_value4)
{
    SendUpdate(p, 'ajax_delete4_tus.jsp', 't=' + t +'&k='+ key_field+'&kv='+key_value + '&k2='+ key_field2 +'&kv2='+key_value2+'&k3='+key_field3+'&kv3='+key_value3 +'&k4='+key_field4+'&kv4='+key_value4);
	
}




function testmen(p,  key_value)
{
var pvalue="";
pvalue= p.value;
pvalue = urlEncode(pvalue) ;
pvalue=pvalue.replace(/\&#/g,"!AMP#;"); 
pvalue=pvalue.replace(/\&/g,"!AMP;"); 


    SendUpdate(p, 'ajax_testmen.jsp', 'kv='+key_value+'&v='+ pvalue)
}





// Перекодируем строку из Win-1251 в шестнадцатеричеый эквивалент UTF

 function urlEncode(str) {  

     // Простая проверка  

     if (!str || typeof(str) == "undefined") return;  

     // Создаем хеш для хранения символов, где ключ - сам символ,  

     // а значение - его шестнадцатеричеый эквивалент  

     var utf8Array = {};  

     // Сначала добавляем стандартные 255 символов  

     var i = j = j2 = 0;  

     for (i = 0; i <= 255; i++) {  

         j = parseInt(i/16); var j2 = parseInt(i%16);  

         utf8Array[String.fromCharCode(i)] = ('%' + j.toString(16) + j2.toString(16)).toUpperCase();  

     }  

     // И отдельно проработаем кириллицу  

     var rusAdditional = {
      '_' : '%5F', 'А' : '%C0', 'Б' : '%C1', 'В' : '%C2', 'Г' : '%C3', 'Д' : '%C4', 'Е' : '%C5',

      'Ж' : '%C6', 'З' : '%C7', 'И' : '%C8', 'Й' : '%C9', 'К' : '%CA', 'Л' : '%CB', 'М' : '%CC',

      'Н' : '%CD', 'О' : '%CE', 'П' : '%CF', 'Р' : '%D0', 'С' : '%D1', 'Т' : '%D2', 'У' : '%D3',

      'Ф' : '%D4', 'Х' : '%D5', 'Ц' : '%D6', 'Ч' : '%D7', 'Ш' : '%D8', 'Щ' : '%D9', 'Ъ' : '%DA',

      'Ы' : '%DB', 'Ь' : '%DC', 'Э' : '%DD', 'Ю' : '%DE', 'Я' : '%DF', 'а' : '%E0', 'б' : '%E1',

      'в' : '%E2', 'г' : '%E3', 'д' : '%E4', 'е' : '%E5', 'ж' : '%E6', 'з' : '%E7', 'и' : '%E8',

      'й' : '%E9', 'к' : '%EA', 'л' : '%EB', 'м' : '%EC', 'н' : '%ED', 'о' : '%EE', 'п' : '%EF',

      'р' : '%F0', 'с' : '%F1', 'т' : '%F2', 'у' : '%F3', 'ф' : '%F4', 'х' : '%F5', 'ц' : '%F6',

      'ч' : '%F7', 'ш' : '%F8', 'щ' : '%F9', 'ъ' : '%FA', 'ы' : '%FB', 'ь' : '%FC', 'э' : '%FD',

      'ю' : '%FE', 'я' : '%FF', 'ё' : '%B8', 'Ё' : '%A8'

    }

 

     for (i in rusAdditional) utf8Array[i] = rusAdditional[i];  

     // Посимвольно заменяем символы на их шестнадцатиречные эквиваленты  

     var res = "";  

     for(i = 0; i < str.length; i++) {  

         var simbol = str.substr(i,1);  

         res += typeof utf8Array[simbol] != "undefined" ? utf8Array[simbol]:simbol;  

     }  

     // Пробелы заменяем на плюсы   

     res = res.replace(/\s/g, "+");  

     return res;  

 }  
