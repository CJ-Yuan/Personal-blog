var chess=document.getElementById('chess');
var b=document.getElementById('b');
var context=chess.getContext('2d');
var chessBoard=[];
var over=false;
for(var i=0;i<15;i++){
    chessBoard[i]=[];
    for(var j=0;j<15;j++){
    	chessBoard[i][j]=0;
    }
}
var wins=[];
for(var i=0;i<15;i++){
    wins[i]=[];
    for(var j=0;j<15;j++){
      wins[i][j]=[];
    }
}
var count=0;
//水平
for(var i=0;i<15;i++){
	for(var j=0;j<11;j++){
		for(var k=0;k<5;k++){
			wins[i][j+k][count]=true;
		}
		count++;
	}
}
//垂直
for(var i=0;i<15;i++){
	for(var j=0;j<11;j++){
		for(var k=0;k<5;k++){
			wins[j+k][i][count]=true;
		}
		count++;
	}
}
//斜线
for(var i=0;i<11;i++){
	for(var j=0;j<11;j++){
		for(var k=0;k<5;k++){
			wins[i+k][j+k][count]=true;
		}
		count++;
	}
}
//反斜线
for(var i=0;i<11;i++){
	for(var j=14;j>3;j--){
		for(var k=0;k<5;k++){
			wins[i+k][j-k][count]=true;
		}
		count++;
	}
}

//赢法统计
var  comWin=[];
var  myWin=[];
for(var k=0;k<count;k++){
    comWin[k]=0;
    myWin[k]=0;
}



context.strokeStyle='white';
var logo=new Image();
var me=true;
logo.src='images/p3.jpg';
logo.onload=function(){
	context.drawImage(logo,0,0,500,500);
	chessBox();
	
}



var chessBox=function(){
for(var i=0;i<15;i++){
	context.moveTo(15+i*30,15);
	context.lineTo(15+i*30,435);
	context.stroke();
	context.moveTo(15,15+i*30);
	context.lineTo(435,15+i*30);
	context.stroke();
 }
 }




 var onStep=function(i,j,me){
    context.beginPath();	
	context.arc(15+i*30,15+j*30,13,0,2*Math.PI);
	var greident=context.createRadialGradient(15+i*30+2,15+j*30-2,8,15+i*30,15+j*30,0);
	if(me){
		greident.addColorStop(0,'#0A0A0A');
	    greident.addColorStop(1,'#636766');
	}else{
		greident.addColorStop(0,'#FFFFCC');
	    greident.addColorStop(1,'#eeeeee');
	}
	
	context.fillStyle=greident
	context.fill();
	context.closePath();
 }



chess.onclick=function(e){
	if(over){
		return;
	}
	if(!me){
		return;
	}
   var x=e.offsetX;
   var y=e.offsetY;
   var i=Math.floor(x/30);
   var j=Math.floor(y/30);
   if(chessBoard[i][j]==0){
   	onStep(i,j,me);
    chessBoard[i][j]=1;
    for(var k=0;k<count;k++){
    	if(wins[i][j][k]){
    		myWin[k]++;
    		comWin[k]=6;
    		if(myWin[k] == 5){
    			alert('你赢了');
    			over=true;
    		}
    	}
    }
    if(!over){
    	computerAi();
    	 me= !me;
    }
   }
  
}
//电脑智能
var computerAi=function(){
	var myScore=[];
	var comScore=[];
    var max=0;
    var u=0,v=0;
    for(var i=0;i<15.;i++){
      myScore[i]=[];
      comScore[i]=[];
       for(var j=0;j<15;j++){
      	myScore[i][j]=0;
      	comScore[i][j]=0;
       }
    }

   for(var i=0;i<15;i++){
   		for(var j=0;j<15;j++){
   			if(chessBoard[i][j] == 0){
				for(var k=0;k<count;k++){
					if(wins[i][j][k]){
						if(myWin[k] == 1){
							myScore[i][j]+=200;
						}else if(myWin[k] == 2){
							myScore[i][j]+=400;
						}else if(myWin[k] == 3){
							myScore[i][j]+=2000;
						}else if(myWin[k] == 4){
							myScore[i][j]+=10000;
						}
						if(comWin[k] == 1){
							comScore[i][j]+=220;
						}else if(comWin[k] == 2){
							comScore[i][j]+=420;
						}else if(comWin[k] == 3){
							comScore[i][j]+=2100;
						}else if(comWin[k] == 4){
							comScore[i][j]+=20000;
						}
					}
				}

		   				if(myScore[i][j] >max){
		   					max=myScore[i][j];
		   					u=i;
		   					v=j;
		   				}else if(myScore[i][j] == max){
		   					if(comScore[i][j] > comScore[u][v]){
		   						u=i;
		   						v=j;
		   					}
				              }
				            if(comScore[i][j] >max){
		   					max=comScore[i][j];
		   					u=i;
		   					v=j;
		   				}else if(comScore[i][j] == max){
		   					if(myScore[i][j] > myScore[u][v]){
		   						u=i;
		   						v=j;
		   					}
				        }
   			}
   		}
   }


						 onStep(u,v,false);
						 chessBoard[u][v]=2;
						 for(var k=0;k<count;k++){
						    	if(wins[u][v][k]){
						    		comWin[k]++;
						    		myWin[k]=6;
						    		if(comWin[k] == 5){
						    			alert("计算机赢了");
						    			over=true;
						    		}
						    	}
						    }
						    if(!over){
						    	 me= !me;
						    }

}







