!function(V){V(document).ready(function(){V("#submit").on("click",function(){var n=V("#day1").val(),t=V("#day2").val(),r=V("#month1").val(),a=V("#month2").val(),e=V("#year1").val(),s=V("#year2").val(),o=V("#year3").val(),h=V("#year4").val(),l=V("#fullname").val(),p=S(parseInt(n)+parseInt(t)+parseInt(r)+parseInt(a)+parseInt(e)+parseInt(s)+parseInt(o)+parseInt(h));V("#sochudao").text("Con số chủ đạo: "+p);var c=0,f="";f+=n,f+=t,ns1=parseInt(f);var g=parseInt(n)+parseInt(t),c=22==ns1?22:O(g);V("#dayb").text("Con số ngày sinh: "+c);var u=N(parseInt((new Date).getFullYear())),v=N(u+parseInt(n)+parseInt(t)+parseInt(r)+parseInt(a));V("#yp").text("Con số năm cá nhân: "+v);l.charAt(0);var I,y,d=l.toString(),m=[],b=[];for(obj={u:3,e:5,o:6,a:1,i:9,y:7},obj2={j:1,s:1,b:2,k:2,t:2,c:3,l:3,d:4,m:4,v:4,n:5,w:5,f:6,x:6,g:7,p:7,h:8,q:8,z:8,r:9},i=0,len=d.length;i<len;i+=1){Object.keys(obj).some(function(n){return~n.indexOf(l.charAt(i))})?(I=l.charAt(i),m.push(+obj[I])):Object.keys(obj2).some(function(n){return~n.indexOf(l.charAt(i))})?(y=l.charAt(i),b.push(+obj2[y])):(m=[],b=[])}for(var j=0,_=0;j<m.length;_+=m[j++]);for(var A=O(_),x=0,C=0;x<b.length;C+=b[x++]);var k=S(C);function O(n){if(parseInt(n)<=11&&0<parseInt(n))var t=n;else if(11<parseInt(n)){for(;11<parseInt(n);){var r=[];a_string=n.toString();for(var a=0,e=a_string.length;a<e;a+=1)r.push(+a_string.charAt(a));for(var a=0,s=0;a<r.length;s+=r[a++]);n=Number(s)}t=n}else t="Vui lòng nhập đầy đủ ngày sinh hoặc tên";return t}function S(n){if(parseInt(n)<=11&&0<parseInt(n))var t=n;else if(22==parseInt(n))t=22;else if(11<parseInt(n)){for(;11<parseInt(n);){var r=[];a_string=n.toString();for(var a=0,e=a_string.length;a<e;a+=1)r.push(+a_string.charAt(a));for(var a=0,s=0;a<r.length;s+=r[a++]);n=Number(s)}t=n}else t="Vui lòng nhập đầy đủ ngày sinh";return t}function N(n){if(parseInt(n)<=9&&0<parseInt(n))var t=n;else if(9<parseInt(n)){for(;9<parseInt(n);){var r=[];a_string=n.toString();for(var a=0,e=a_string.length;a<e;a+=1)r.push(+a_string.charAt(a));for(var a=0,s=0;a<r.length;s+=r[a++]);n=Number(s)}t=n}else t="Vui lòng nhập đầy đủ ngày sinh";return t}V("#fname").html("Chỉ số tâm hồn của tên: "+A+". Chỉ số thể hiện của tên: "+k+". Con số tổng của tên: "+O(A+k)),V(".hide").css({display:"initial"}),V.getJSON("data/lg_scd.json",function(n){V("#tl_sochudao").html(n[p].split("\n").join("<br />"))})}),V("#reset").on("click",function(){V(".hide").css({display:"none"})})})}(jQuery);