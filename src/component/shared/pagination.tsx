import React, { useState } from 'react';
import  Back from "../../assets/back.svg";
import styles from '../shared/scss/table.module.scss';
import  Forward from "../../assets/forward.svg";
import _ from 'lodash'
const Pagination = (props: { itemsCount: any; pageSize: any; currentPage: any; onPageChange: any; onNextpage: any; onPrevpage: any; disableNextPage: any; pageLength: any; }) => {
    const {itemsCount,pageSize,currentPage,onPageChange,onNextpage,onPrevpage,disableNextPage,pageLength}=props
    const pagesCount=Math.ceil(itemsCount/pageSize);
    const pages=_.range(1,pagesCount+1)
    //  console.log('pages count',pageSize)
    if(pagesCount==1) return null



  
    return ( 
        <React.Fragment>          
       <div style={{display:itemsCount === 0 ? 'none': 'flex',justifyContent:'space-between',alignItems:'center'}}>
        

        {pages.length <= 10 &&
           <div style={{display:'flex',alignContent:'center'}}>
             <button disabled={currentPage===1} onClick={onPrevpage} style={{backgroundColor:'#e5e8ee',height:'40px',width:'40px',border:'none',borderRadius:'9px',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'1em'}} >
               <img src={Back} className={styles.navicon} alt="horse" />
             </button>   
             {pages.map(page=>
                 <div onClick={()=>onPageChange(page)} key={page} style={{height:'40px',color:page===currentPage ? ' #545F7D':'#979daf',fontWeight:page===currentPage ? 'bold':'',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'1em',cursor:'pointer'}} >{page}</div>  
             )}
             <button disabled={pagesCount===currentPage} onClick={onNextpage} style={{backgroundColor:'#e5e8ee',height:'40px',width:'40px',border:'none',borderRadius:'9px',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'1em'}}>
               <img src={Forward} className={styles.navicon} alt="horse" />
             </button>   
           </div>
         } 



        {/* {pages.length > 7 &&
           <div style={{display:'flex',alignContent:'center'}}>
             <button disabled={currentPage===1} onClick={onPrevpage} style={{backgroundColor:'#e5e8ee',height:'40px',width:'40px',border:'none',borderRadius:'9px',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'1em'}} >
               <img src={Back} className={styles.navicon} alt="horse" />
             </button>  


             {pages.slice(0,1).map(page=>
                 <div onClick={()=>onPageChange(page)} key={page} style={{height:'40px',color:page===currentPage ? ' #545F7D;':'#979daf;',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'1em',cursor:'pointer'}}>{currentPage}</div>  
             )} 
           
             <button disabled={pagesCount===currentPage} onClick={onNextpage} style={{backgroundColor:'#e5e8ee',height:'40px',width:'40px',border:'none',borderRadius:'9px',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'1em'}}>
               <img src={Forward} className={styles.navicon} alt="horse" />
             </button>    
           </div>
        } */}


           </div> 
        </React.Fragment>
     );
}
 
export default Pagination;