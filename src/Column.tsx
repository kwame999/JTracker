import { useState } from "react"
import type { ColumnProps, CardProps, CardPreview } from './Types'


const Column = ({children, color, name = "grey"}: ColumnProps) => {

    return(
        <section>
            <div className="flex gap-2">{name}
                <button>fdf</button>
            </div>
            <div style={{backgroundColor: color}} 
                         className="flex flex-col">
                {children}
            </div>
        
        </section>
        
    )

}

const Card = ({job, onDelete, onEdit}: CardProps) => {
    
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const {id, company, position, link, status, moodTxt, createdAt, rating, companyIcon: {logo, alt}} = job
    function handleOpen(){
        setIsOpen( !isOpen ? true : false );
    }
    
    return(
        <section>
            <img src={logo} alt={alt} />
            <p>Company:{company}</p>
            <p>Position:{position}</p>
            {isOpen && 
                <>
                    <p>Link:{link}</p>
                    <p>Applied:{createdAt}</p>
                    <p>Status:{status}</p>
                    <p>Mood:{moodTxt}</p>
                    <p>Rating:{rating}</p>
                </>
            }
        <div>
            <button onClick={ ()=> {onDelete(id)} }>Delete</button>
            <button onClick={ ()=> {onEdit(id)} }>Edit</button>
            <button onClick={ handleOpen }>Expand</button>
        </div>

        </section>
    )


}

const PreviewCard = ({companyName, jobPosition, jobLink,}: CardPreview) => {
    // const {icon} = companyIcon
    return(
        <section className="flex w-full bg-red-700 items-center p-5 gap-4 rounded-xl mt-6 mb-4">
            <img src={`https://img.logo.dev/${companyName}.com?token=pk_RKtwoXuaQDSJdIEDV1NYVA`} alt="" width={80} className="rounded-lg"/>
                <div className="flex  flex-col">
                    <p className="font-bold text-lg">{companyName}</p>
                    <div className="flex justify-between gap-4">
                        <p><span className="font-medium">Position:</span>{jobPosition}</p>
                        <p><span className="font-medium">Salary:</span>{jobLink}</p>
                        <p><span className="font-medium">Applied:</span>{jobLink}</p>
                    </div>
                </div>  
        </section>
    )

}


export { Column, Card, PreviewCard}