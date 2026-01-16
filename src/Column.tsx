import type { ReactNode } from "react"

//Types:
type ColumnProps = {

    children?: ReactNode,
    color?: string,
    name: string,
}


type JobType = {
    
    id: string,
    company: string,
    companyIcon: Company,
    position: string,
    status: string,
    link?: string,
    createdAt: string,
    rating?: number,
    moodTxt: string,
    favorites: boolean,
}


type Company = {
    logo: string,
    alt: string
}

type CardProps = {
    job: JobType,
    onDelete: (id: string) => void
    onEdit: (id: string) => void
}

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
    
    const {id, company, position, link, status, moodTxt, createdAt, rating} = job


    return(
        
        <section>
        
            <p>Company:{company}</p>
            <p>Position:{position}</p>
            <p>Link:{link}</p>
            <p>Applied:{createdAt}</p>
            <p>Status:{status}</p>
            <p>Mood:{moodTxt}</p>
            <p>Rating:{rating}</p>
        <div>
            <button onClick={()=>{

                onDelete(id)

            }}>Delete</button>
            <button onClick={()=>{

                onEdit(id)
            }}
            >Edit</button>
        </div>

        </section>
    )


}


export { Column, Card}