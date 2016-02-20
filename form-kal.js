var http_request=false;function makePOSTRequest(url,parameters){http_request=false;if(window.XMLHttpRequest){http_request=new XMLHttpRequest();if(http_request.overrideMimeType){http_request.overrideMimeType('text/html');}}else if(window.ActiveXObject){try{http_request=new ActiveXObject("Msxml2.XMLHTTP");}catch(e){try{http_request=new ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}}
if(!http_request){alert('Cannot create XMLHTTP instance');return false;}
http_request.onreadystatechange=alertContents;http_request.open('POST',url,true);http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");http_request.setRequestHeader("Content-length",parameters.length);http_request.setRequestHeader("Connection","close");http_request.send(parameters);}
function isNumberKey(evt)
{var charCode=(evt.which)?evt.which:event.keyCode
if(charCode>31&&(charCode<48||charCode>57))
return false;return true;}
function alertContents(){if(http_request.readyState==4){if(http_request.status==200){result=http_request.responseText;document.getElementById('myspan').innerHTML=result;}else{alert('There was a problem with the request.');}}}
function get(obj){if(document.getElementById("kalender").value=="")
{alert("Pastikan anda mengisi hari pertama anda mendapatkan menstruasi sebelumnya.");return false;}
var poststr="lama="+ encodeURI(document.getElementById("lama").value)+"&siklus="+ encodeURI(document.getElementById("siklus").value)+"&kalender="+ encodeURI(document.getElementById("kalender").value);makePOSTRequest('kesuburancalculator.php',poststr);}
