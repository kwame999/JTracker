import { useState } from "react"
import type { ColumnProps, CardProps, CardPreview } from './Types'
import IconSet from "./icons/icon"

const Column = ({children, color, name = "grey", onShowModal}: ColumnProps) => {

    return(
        <section className="p-3 rounded-t-xl rounded-b[18px] outline-1 outline-amber-950" style={{backgroundColor: color}} >
            <div className="flex justify-between mb-2 font-bold">{name}
                <button>fdf</button>
            </div>
            <div className="flex flex-col">
                {children}
            </div>

            <div>
                <button onClick={onShowModal} className="flex justify-center-safe w-full outline-1 p-1">

                    <IconSet iconName="plus" size={24}></IconSet>
                </button>
            </div>        
        </section>
        
    )

}

const Card = ({job, onDelete, onEdit}: CardProps) => {
    
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const {id, company, position, link, status, moodTxt, createdAt, salary, companyIcon: {logo, alt}} = job
    function handleOpen(){
        setIsOpen( !isOpen ? true : false );
    }
    
    return(
        <section className="flex flex-col rounded-xl w-134.5">
            
            <div className="flex p-3.5 bg-blue-500 rounded-lg w-full">
            <img src={logo} alt={alt} width={60} className="rounded-md mr-3"/>
                    <div className="flex  flex-col justify-center w-full">
                        <p className="font-bold text-md">{company}</p>
                        
                        <div className="flex gap-6">
                            <IconSet iconName="user" size={18}>
                                <p><span className=" font-semibold">Position: </span>{position}</p>
                            </IconSet>

                            <IconSet iconName="money" size={15}>
                                <p><span className="font-semibold">Salary: </span>{salary}</p>
                            </IconSet>

                            <IconSet iconName="calender" size={18}>
                                <p><span className="font-semibold">Applied: </span>{link}</p>
                            </IconSet>

                        <button onClick={ handleOpen } className="ml-auto">
                            <IconSet iconName="cheveron" size={16}></IconSet>
                        </button>

                        </div>
                    </div>
            </div>
                    <div>
                        <button onClick={ ()=> {onDelete(id)} }>Delete</button>
                        <button onClick={ ()=> {onEdit(id)} }>Edit</button>
                    </div>

                    
  

            {isOpen && 
                <>
                    <p>Link:{link}</p>
                    <p>Applied:{createdAt}</p>
                    <p>Status:{status}</p>
                    <p>Mood:{moodTxt}</p>
                    <p>Rating:{salary}</p>
                </>
            }

        </section>
    )


}

const PreviewCard = ({companyName, jobPosition, jobLink, jobSalary}: CardPreview) => {
    // const {icon} = companyIcon
    return(
        <section className="flex w-full bg-red-700 items-center p-5 gap-4 rounded-xl mt-6 mb-4">
            <img src={`https://img.logo.dev/${companyName}.com?token=pk_RKtwoXuaQDSJdIEDV1NYVA`} alt="" width={80} className="rounded-lg"/>
                <div className="flex  flex-col">
                    <p className="font-bold text-lg">{companyName}</p>
                    <div className="flex justify-between gap-4">
                        <p><span className="font-medium">Position:</span>{jobPosition}</p>
                        <p><span className="font-medium">Salary:</span>{jobSalary}</p>
                        <p><span className="font-medium">Applied:</span>{jobLink}</p>
                    </div>
                </div>  
        </section>
    )

}


export { Column, Card, PreviewCard}