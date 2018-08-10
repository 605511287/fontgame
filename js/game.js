// class Name{
//     constructor(){
//         this.screen="";
//         this.allbox=[];
//         this.name="";
//         this.left="";
//     }
//     creatletter(num){
//         for(let i=0;i<num;i++){
//             let obj={};
//             let letter="";
//             do{
//                 let n= Math.floor(Math.random()*26+65);
//                  letter = String.fromCharCode(n);
//             }while(this.ifhas(letter));
//             obj.name=letter;
           
//             let div=document.createElement("div");
//             div.className="letterBox";
//             let left1=Math.random()*6.3;
//             obj.left=left1;
//             let m=left1+"rem";
//             console.log(left1,m);
//             div.style.left=m;
//             div.style.backgroundImage=`url(img/A_Z/${letter}.png)`
//             this.screen.appendChild(div);
//             this.allbox.push(obj)
//         }
//     console.log(this.allbox)
//     }
//     ifhas(letter){
//         for(let item of this.allbox){
//             if(letter==item.name);
//             return true;
//         }
//         return false;
//     }
// }

class Game{
    constructor(){
        this.screen="";
        this.allbox=[];
        this.jianpan=""
        this.life=""
        this.jifen=""
        this.lifeNum=10;
        this.jifenNum=0;
        this.speed=0;
        this.death="";
        this.replay="";
        this.text="";
        this.sw=""
        this.xflag=false;
    }
    chushi(){
        clearInterval(this.t);
        this.jifenNum=0;
        this.lifeNum=10;
        this.screen.innerText="";
        this.allbox=[];
        this.life.innerText=this.lifeNum;
        this.jifen.innerText=this.jifenNum;
        this.speed=0;
        this.creatletter(5);
        this.death.style.display="none";
        this.sw.className="switch kai"
    }
    creatletter(num=1){
        for(let i=0;i<num;i++){
            let obj={};
            let letter=""
            do{
                let n=Math.floor(Math.random()*26+65);
                letter=String.fromCharCode(n);
            }
            while(this.ifhas(letter))
            obj.name=letter;
            let m="";
            let left="";
            do{
             m=Math.random()*5.7+0.6;
             left=m+"rem"
            }while(this.ifrepeat(m))          
            let div = document.createElement("div");
            div.style.backgroundImage=`url(img/A_Z/${letter}.png)`
            div.style.left=left;
            div.className="letterBox"
            obj.left=m;
            obj.node=div;
            obj.top=1;
            this.screen.appendChild(div);
            this.allbox.push(obj);
        }
    }
    ifhas(letter){
        for( let item of this.allbox){
         
            if(letter==item.name){
                return true;
            }
        
        }
        return false;
    }
    ifrepeat(m){
        for(let item of this.allbox){
            if(Math.abs(m-item.left)<0.58){
                return true;
            }        
        }
        return false;
    }
    remove(){
        this.t=setInterval(move,200);
        let that=this;
        function move(){
           that.allbox.forEach(function(value,index){
               value.top+=that.speed+0.1;
               if(value.top>=7.94){
                   that.screen.removeChild(value.node);
                   that.allbox.splice(index,1);
                   that.creatletter();
                   that.lifeNum--;
                   that.life.innerText=that.lifeNum;
                   if(that.lifeNum==0){
                       that.death.style.display="block"
                      clearInterval(that.t);
                   }
               }
               value.node.style.top=value.top+"rem";
           })
        }
    }
    key(name){
        let that =this;
        that.allbox.forEach(function(value,index){
            if(name==value.name){
                that.screen.removeChild(value.node);
                that.allbox.splice(index,1);
                that.creatletter();
                that.jifenNum++;
                that.speed=that.jifenNum<10?0:that.jifenNum/100-0.1;
                that.jifen.innerText=that.jifenNum;
            }
        })
    }
    pause(){
        clearInterval(this.t);
    }   
}