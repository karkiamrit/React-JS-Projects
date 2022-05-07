import React from "react";
import './Hemisphere.css';
const hemisphereConfig= {
    Northern:{
        text:'you are in northern hemisphere',
        picture : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYRc19aRidvwSf44K-zxyzry6tqvMJeFTgtMHMeXTPwcnCKUWBAQOEflSc0Df3lfDvM0&usqp=CAU'
    },
    Southern:{
        text:'you are in southern hemisphere',
        picture : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJj1ITbZrrHUeYnl10KsuKdbqd2T_QjV918MSnz_jefr821F_Zdn8qnP8qEPpz2VZlRw&usqp=CAU'

    }
}
const Hemisphere=({latitude})=>
{

    let hemi='';
    if(latitude > 0)
    { 
       hemi='Northern';
    }
    else
    {
        hemi='Southern';
    }
    const {text,picture} =hemisphereConfig[hemi];
    return(
        <div className={hemi}>
            <div className='ui raised text container segment' >
            <div className='image'><img src={picture} alt='hemisphere picture'/>
            </div>
            <div className='ui teal bottom attached label'>
            <h1>{text}</h1>
            </div>
            </div>
             
            </div>
           
    )
    
    
}

export default Hemisphere;