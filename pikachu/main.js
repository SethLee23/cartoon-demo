!function(){
    var duration = 50
    function writeCode(prefix,code,fn){
        let codePaper = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        prefix = prefix || ''
        let n = 0
       setTimeout(function run(){
            n += 1
        codePaper.innerHTML = Prism.highlight(prefix + code.slice(0,n), Prism.languages.css);
        // codePaper.innerHTML = code.slice(0,n)
        styleTag.innerHTML = code.slice(0,n)
        codePaper.scrollTop = codePaper.scrollHeight
        if(n < code.length){
            setTimeout(run,duration)
        }else{
            fn && fn.call()
        }
        },duration)
    }
    $('.actions').on('click','div',function(e){
        let $button =  $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
     switch(speed){
         case 'slow':
         duration = 100
         break
         case 'normal':
         duration = 50
         break
         case 'fast':
         duration = 5
     }
     })
    
let code = `
/*
*首先准备皮卡丘的皮
*/
.preview {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fee433;
  }
  #face {
    width: 100%;
    height: 165px;
    position: relative;
  }
  #face > :not(:last-child){
    z-index: 1;
}
/*
*接着准备皮卡丘的鼻子
*/
  .nose {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px;
    border-radius: 11px;
    border-color: black transparent transparent;
    top: 28px;
    left: 50%;
    margin-left:-12px;
  }
  /*
  *现在该画皮卡丘的眼睛了
  */
  .eye {
    width: 49px;
    height: 49px;
    border-radius: 50%;
    background: #2e2e2e;
    position: absolute;
    border: 2px solid #000000,
  }
  /*
  *左眼在左边
  */
  .eye.left {
    right: 50%;
    margin-right: 90px;
  }
  /*
  *右眼在右边
  */
  .eye.right {
    left: 50%;
    margin-left: 90px;
  }
  /*
  *眼睛要有眼珠子，一闪一闪亮晶晶
  */
  .eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    position: absolute;
    left: 7px;
    border: 2px solid #000;
    top: 4px;
  }
  /*
  *皮卡丘的两个小脸蛋~十万伏特
  */
  .redFace {
    width: 68px;
    height: 68px;
    border: 2px solid black;
    background: #fc0d1c;
    border-radius: 50%;
    position: absolute;
  }
  /*
  *左脸
  */
  .redFace.left {
    right: 50%;
    top: 85px;
    margin-right: 116px;
  }
  /*
  *右脸
  */
  .redFace.right {
    left: 50%;
    top: 85px;
    margin-left: 116px;
  }
  /*
  *上嘴唇
  */
 .upperLip{
    position:absolute;
   width:80px;
   height:20px;
   border:3px solid black;
   background:#fee433;
 }
 /*
 *左边
 */
 .leftUpperLip{
   border-bottom-left-radius:40px 20px;
   border-top:none;
   border-right:none;
   transform:rotate(-20deg);
   right:50%;
   top:52px;
 }
 /*
 *右边
 */
 .rightUpperLip{
   border:3px solid black;
   border-bottom-right-radius:40px 20px;
   border-top:none;
   border-left:none;
   transform:rotate(20deg);
   left:50%;
   top:52px;
 }
/*
*下嘴唇
*/
 .lowerLip-wrapper{
   left:50%;
   margin-left:-150px;
   position:absolute;
   height:107px;
   bottom:0px;
   width:300px;
   overflow:hidden;
 }
 .lowerLip{
   width:300px;
   height:3000px;
   background:#990513;
   border-radius:200px/2000px;
   position: absolute;
   bottom:0px;
   border:2px solid #000;
   overflow:hidden;
 }
 /*
 *小舌头
 */
 .lowerLip::after{
   content:'';
   position:absolute;
   bottom:-20px;
   width:100px;
   height:100px;
   background:#FC4A62;
   left:50%;
   margin-left:-50px;
   border-radius:200px/150px;
 }
 /*
 *一只皮卡丘送给你，皮卡皮卡~
 */
`
writeCode('',code)
}.call()
