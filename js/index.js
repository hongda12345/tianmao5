/*
* @Author: 宏达
* @Date:   2017-09-18 17:16:08
* @Last Modified by:   宏达
* @Last Modified time: 2017-09-21 13:33:06
*/
window.onload=function(){
	/*侧导航*/
	let nav=document.getElementsByClassName('zhuti-nav')[0];
	let lis=nav.getElementsByTagName('li');
	let item=document.getElementsByClassName('item');
	for(let i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
        	item[i].style.display='block';
        }
        lis[i].onmouseout=function(){
        	item[i].style.display='none';
        }
	}
	/*banner图*/
	let yuankuang=document.getElementsByClassName('yuankuang')[0];
	let yuan=yuankuang.getElementsByTagName('li');
	let kuang=document.getElementsByClassName('banner-zhuti')[0];
	let zhuti=document.getElementsByClassName('zhuti-right')[0];
	let left=zhuti.getElementsByClassName('left')[0];
	let right=zhuti.getElementsByClassName('right')[0];
	let abanner=document.getElementsByClassName('zhuti-right')[0];
	let bannertu=abanner.getElementsByClassName('bannertu');
	let bannertuw=parseInt(getComputedStyle(abanner,null).width);
	// console.log(bannertuw);
	let now=0;
	let next=0;
	let flag=true;
	let t=setInterval(move, 2000);
	// for(let i=0;i<yuan.length;i++){
	// 	yuan[i].onmouseover=function(){
	// 		yuan[i].style.background='#fff';
 //            yuan[i].style.border='2px solid #a2a2a2';
			
 //             // bannertu[i].style.display='block';
	// 	}
	// 	yuan[i].onmouseout=function(){
	// 		yuan[i].style.background='#a2a2a2';
			
	// 		 // bannertu[i].style.display='none';
	// 	}
	// }
	// 	// yuan[i].onclick=function(){
	// 	// 	for(j=0;j<yuan.length;j++){
	// 	//      bannertu[j].style.display='none';
	// 	// 	}
	// 	//     bannertu[i].style.display='block';
	// 	// }
	// }
	// for(let i=0;i<yuan.length;i++){
	// // 	// yuan[i].index=i;   /*let换成var时*/
	// 	yuan[i].onclick=function(){
	// 		for(let j=0;j<yuan.length;j++){
	// 			// animate(bannertu[j],{opacity:0});
				
	//             yuan[num].style.background='#a2a2a2';
	// 		}
	// 	   // animate(bannertu[i],{opacity:1});
		   
	// 	   yuan[i].style.background='#fff';
	// 	   yuan[i].style.border='2px solid #a2a2a2';
	//     // bannertu[this.index].style.display='block';
	//        num=i;
	//    }
	// }
	  for(let i=0;i<yuan.length;i++){
        yuan[i].onclick=function(){
            if(now==i){return;}
            if(now<i){
            yuan[now].style.background = '#a2a2a2';
            yuan[i].style.background = '#fff';
            yuan[i].style.border='2px solid #a2a2a2';
            bannertu[i].style.left = bannertuw+'px';
            animate(bannertu[now],{left:-bannertuw});
            animate(bannertu[i],{left:0});
            now=next=i;}
            if(now>i){
            yuan[now].style.background = '#a2a2a2';
            yuan[i].style.background = '#fff';
            yuan[i].style.border='2px solid #a2a2a2';
            bannertu[i].style.left = -bannertuw+'px';
            animate(bannertu[now],{left:bannertuw});
            animate(bannertu[i],{left:0});
            now=next=i;
            }
        }
    }

		// 	now=this.index;
		// }
		// yuan[i].onclick=(function(i){
  //           return function(){
  //           	bannertu[now].style.display='none';
  //           	yuan[now].style.background='#a2a2a2';
  //           	bannertu[i].style.display='block';
  //           	yuan[i].style.background='#fff';
  //               yuan[i].style.border='2px solid #a2a2a2';
  //           	now=i;
  //           }
		// })(i);
	left.onclick=function(){
		if (!flag) {
            return;
        }
		moveL();
		flag=false;
	}
	right.onclick=function(){
		if (!flag) {
            return;
        }
		move();
		flag=false;
	}
	// function move(){
	// 	num++;
	// 	if(num==bannertu.length){
	// 		num=0;
	// 	}
	// 	for(i=0;i<bannertu.length;i++){
 //            animate(bannertu[i],{opacity:0});
	// 	    yuan[i].style.background='#a2a2a2';
            
	// 	}
	// 	animate(bannertu[num],{opacity:1});
	// 	yuan[num].style.background='#fff';
 //        yuan[num].style.border='2px solid #a2a2a2';
	// }
	// function moveL(){
	// 	num--;
	// 	if(num<0){
	// 		num=bannertu.length-1;
	// 	}
	// 	for(i=0;i<bannertu.length;i++){
 //            animate(bannertu[i],{opacity:0});
	// 	    yuan[i].style.background='#a2a2a2';
            
	// 	}
	// 	animate(bannertu[num],{opacity:1});
	// 	yuan[num].style.background='#fff';
 //        yuan[num].style.border='2px solid #a2a2a2';
	// }
	function move(){
        next++;
        if(next==bannertu.length){
        	next=0;
        }
        bannertu[next].style.left=bannertuw+'px';
        yuan[now].style.background='#a2a2a2';
        animate(bannertu[now],{left:-bannertuw});
        yuan[next].style.background='#fff';
        yuan[next].style.border='2px solid #a2a2a2';
        animate(bannertu[next],{left:0},function(){
            flag=true;
        });
        now=next;
	}
	function moveL(){
        next--;
        if(next<0){
        	next=bannertu.length-1;
        }
        bannertu[next].style.left=-bannertuw+'px';
        yuan[now].style.background='#a2a2a2';
        animate(bannertu[now],{left:bannertuw});
        yuan[next].style.background='#fff';
        yuan[next].style.border='2px solid #a2a2a2';
        animate(bannertu[next],{left:0},function(){
            flag=true;
        });
        now=next;
	}
    kuang.onmouseover=function(){
        clearInterval(t);
   }
    kuang.onmouseout=function(){
        t=setInterval(move, 2000);
   }

}
