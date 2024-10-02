document.querySelector('.MCD').style.height=`${screen.height-142}px`;//-142
document.querySelector('.A_MCD_MAIN').style.height=`${screen.height-60-142}px`;
document.querySelector('.A_MCD_MAIN_SBD').style.height=`${screen.height-100-142}px`;

document.querySelector('.SUB_PD_M').style.height=`${screen.height-105-142}px`;
document.querySelector('.ADD_PD_M').style.height=`${screen.height-105-142}px`;




//SUB_PD_M

setInterval(()=>{
    
    
    if(document.querySelector('.H').scrollTop != 0 || localStorage.getItem('CT') ==='true'){
        
        //scroll not equal to 0
        document.querySelector('.MCD_TC_Phone').style.display='none';//35px
        document.querySelector('.MCD_TC_CNL').style.display='none';//52px

        document.querySelector('.MCD_B').style.height=`${screen.height-50-142}px`;
        document.querySelector('.H').style.height=`${screen.height-50-142}px`;
        document.querySelector('.C').style.height=`${screen.height-50-142}px`;
    }else {
        
        //scroll equal to 0
        document.querySelector('.MCD_TC_Phone').style.display='flex';//35px
        document.querySelector('.MCD_TC_CNL').style.display='flex';//52px

        document.querySelector('.MCD_B').style.height=`${screen.height-137-142}px`;
        document.querySelector('.H').style.height=`${screen.height-137-142}px`;
        document.querySelector('.C').style.height=`${screen.height-137-142}px`;
    }


    if(localStorage.getItem('CT') ==='true'){
        document.querySelector('.C').style.zIndex=1;
        document.querySelector('.H').style.zIndex=0;
    }else{
        document.querySelector('.H').style.zIndex=1;
        document.querySelector('.C').style.zIndex=0;
    }


    if(localStorage.getItem("ADMIN")==="true"){
        document.querySelector('.A_MCD').style.display="block";
    }else{
        document.querySelector('.A_MCD').style.display="none";
    }
    
    
    
    
},100)







const MA_B=document.querySelectorAll('.MA_B');
MA_B.forEach((e)=>{
    e.addEventListener('click',()=>{
        let dataDashed_Id=e.dataset.id;

        if(dataDashed_Id==='A'){
            document.querySelector('.A').style.display='flex';
            document.querySelector('.M').style.display='none';
        }else if(dataDashed_Id==='M'){
            document.querySelector('.M').style.display='flex';
            document.querySelector('.A').style.display='none';
        }else{
            document.querySelector('.M').style.display='none';
            document.querySelector('.A').style.display='none';
        }

    })
})

document.querySelector('.CA').addEventListener('click',()=>{

    if(localStorage.getItem("user_NP") === null){
    document.querySelector('.CALA_page_B').style.display='block';
    }
})

setInterval(()=>{
    if(localStorage.getItem("user_NP") != null){
        document.querySelector('.CALA_page_B').style.display='none';
        document.querySelector('.CA').innerText=localStorage.getItem('user_NP').split('/')[0];
    }
},100)

document.querySelector('.CALA_page_Button').addEventListener('click',()=>{
    
    if(`${document.querySelector('.IPC').value}`.length===10 && document.querySelector('.IP').value != "" || `${document.querySelector('.IPC').value}`.length===11 && document.querySelector('.IP').value != ""){

        let PN='';
        if(`${document.querySelector('.IPC').value}`.length===11){
            PN=`+234${`${document.querySelector('.IPC').value}`.slice(1,11)}`;
        }else{
            PN=`+234${document.querySelector('.IPC').value}`;
        }

        localStorage.setItem("user_NP",`${document.querySelector('.IP').value}/${PN}`)

        if(`${document.querySelector('.IP').value}`.toLocaleLowerCase()==="yahaya abdullahi" && document.querySelector('.IPC').value === "1234567890"){
            localStorage.setItem("ADMIN",'true')
        }else{
            localStorage.setItem("ADMIN",'false')
        }
    }else if(document.querySelector('.IP').value===""){
        

        if(`${document.querySelector('.IPC').value}`.length != 10 || `${document.querySelector('.IPC').value}`.length != 11){
            document.querySelector('.IP').style.outline="2px solid red";
            document.querySelector('.IPC').style.outline="2px solid red";
        }
        
        if(`${document.querySelector('.IPC').value}`.length === 10 || `${document.querySelector('.IPC').value}`.length === 11){
            document.querySelector('.IP').style.outline="2px solid red";
            document.querySelector('.IPC').style.outline="2px solid green";
        }
        
    }else{
        document.querySelector('.IP').style.outline="2px solid green";
        document.querySelector('.IPC').style.outline="2px solid red";
    }

    
})

document.querySelector('.home').addEventListener('click',()=>{

    document.querySelector('.H').style.zIndex=1;
    document.querySelector('.C').style.zIndex=0;
    localStorage.setItem('CT','false')
})

document.querySelector('.cart').addEventListener('click',()=>{

    document.querySelector('.C').style.zIndex=1;
    document.querySelector('.H').style.zIndex=0;
    localStorage.setItem('CT','true')
})




setInterval(()=>{
    //A_MCD_MAIN_STD_I
    document.querySelector('.A_MCD_MAIN_STD_I').addEventListener('click',()=>{

        document.querySelector('.A_MCD_MAIN_F').style.zIndex=1;
        document.querySelector('.A_MCD_MAIN_S').style.zIndex=0;
        
    })
},100)


localStorage.setItem('FPC','display')
setInterval(()=>{
    if(localStorage.getItem('FPC')==='display'){

        document.querySelector('.FPC').style.display='block';
        setTimeout(()=>{
            document.querySelector('.FPC').style.display='none';
            localStorage.removeItem('FPC')
        },10000)
    }
})

document.querySelector('.A_MCD_L').addEventListener('click',()=>{

    localStorage.removeItem("ADMIN")
    localStorage.removeItem("user_NP")
    document.querySelector('.CA').innerText="create new account";

    document.querySelector('.H').style.zIndex=1;
    document.querySelector('.C').style.zIndex=0;
    localStorage.setItem('CT','false')

    localStorage.setItem('FPC','display')


    
})


document.querySelector('.LO_D').addEventListener('click',()=>{

    localStorage.removeItem("ADMIN")
    localStorage.removeItem("user_NP")
    document.querySelector('.CA').innerText="create new account";
    document.querySelector('.M').style.display='none';

    document.querySelector('.H').style.zIndex=1;
    document.querySelector('.C').style.zIndex=0;
    localStorage.setItem('CT','false')

    localStorage.setItem('FPC','display')




    for(let i=0;i<=localStorage.getItem('orderSet').split(',').length;i++){
        localStorage.getItem('orderSet').split(',').length

        localStorage.removeItem(`CI${localStorage.getItem('orderSet').split(',')[i].split('/')[0]}`,localStorage.getItem('orderSet').split(',')[0])
    }
     
    localStorage.setItem("CCA_represh",'true')
    
 })







 //A_MCD_S
 document.querySelector('.A_MCD_S').addEventListener('click',()=>{

    document.querySelector('.ADD_PD').style.display="none";
    document.querySelector('.SUB_PD').style.display="block";
     
 })


//A_MCD_A
 document.querySelector('.A_MCD_A').addEventListener('click',()=>{

    document.querySelector('.ADD_PD').style.display="block";
    document.querySelector('.SUB_PD').style.display="none";
     
 })



 //SUB_PD_H
 document.querySelector('.SUB_PD_H').addEventListener('click',()=>{

    document.querySelector('.SUB_PD').style.display="none";
     
 })


 //ADD_PD_H
 document.querySelector('.ADD_PD_H').addEventListener('click',()=>{

    document.querySelector('.ADD_PD').style.display="none";
     
 })

 