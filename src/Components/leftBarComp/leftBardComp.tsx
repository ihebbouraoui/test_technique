import React, {useState} from "react";
import './leftBar.scss'
const LeftBardComp=()=>{
    const itemList=['Lorem Ipsum est tout' , 'Lorem Ipsum est tout' , 'Lorem Ipsum est tout' , 'Lorem Ipsum est tout' ,'Lorem Ipsum est tout','Lorem Ipsum est tout']
    const [openList,setOpenList]=useState(true)
    return(
        <div className={'mainContainer'}>
           <div className={'categories'}>
                <span>
                Les Categories
            </span>
                <img alt={'img'} onClick={()=>{setOpenList(!openList)}}/>
           </div>

            {
                openList && (
                    <div className={'items'}>
                        {
                            itemList.map((element:string,index:number)=>(
                                <span key={index}>
                                    {element}
                                </span>
                            ))
                        }

                    </div>
                )
            }

        </div>
    )
}
export default LeftBardComp
