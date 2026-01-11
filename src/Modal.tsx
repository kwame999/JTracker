import { useState } from "react"

type JobType = {
    
    id: number,
    company: string,
    position: string,
    status: "wishlist" | "applied" | "interview" | "offer" | "rejected" | "ghosted",
    link?: string,
    createdAt: string,
    rating?: number,
    moodTxt: string,

}

const Modal = () => {
    
    const [jobType, setJobType] = useState([{}])
    const [company, setCompany] = useState("")
    const [role, setRole] = useState("")
    const [status, setStatus] = useState("")
    const [link, setLink] = useState("")
    const [createdAt, setCreatedAt] = useState("")
    const [rating, setRating] = useState("-")
    const [moodTxt, setMoodTxt] = useState("")

    console.log(jobType)
    
    function handleJobType(){
        
        setJobType(
            [...jobType,  {
                
                id: "",
                company: company,
                role: role,
                status: status,
                link: link,
                createdAt: createdAt,
                rating: rating,
                moodTxt: moodTxt,
                
            }
        ]
        
    )
       
    }
    
    

    return(
    
        <section>

            <form action="">

                <div>
                    <label htmlFor="">Company name:</label>
                    <input type="text" name="company" id="" value={company} onChange={(e)=>{
                        setCompany(e.target.value)
                    }}/>
                    <label htmlFor="">role:</label>
                    <input type="text" name="role"  id="" value={role} onChange={(e)=>{
                        setRole(e.target.value)
                    }}/>
                    <label htmlFor="">link</label>
                    <input type="text" name="link" id="" value={link} onChange={(e)=>{
                        setLink(e.target.value);
                    }}/>
                    <label htmlFor="created at"></label>
                    <input type="text" name="date" id="" value={createdAt} onChange={(e)=>{
                        setCreatedAt(e.target.value);
                    }}/>
                    <label htmlFor="mood"></label>
                    <input type="text" name="mood" id="" value={moodTxt} onChange={(e)=>{
                        setMoodTxt(e.target.value);
                        
                    }}/>

                
                </div>

                <textarea name="moodMsg" id=""></textarea>
                <select name="status" id="">
                    
                    <option value="wishlist">Wishlist</option>
                    <option value="applied">Applied</option>
                    <option value="interview">Interview</option>
                    <option value="offer">Offer</option>
                    <option value="rejected">Rejected</option>
                    <option value="ghosted">Ghosted</option>
                
                </select>

                <button type="submit" onClick={(e)=>{
                    e.preventDefault();
                    handleJobType()
                }}>ss</button>
            </form>

        </section>
)


}


const Card = (jobType: JobType) => {
    
    const {company, position, link, status, moodTxt, createdAt, rating} = jobType

    return(
        
        <section>
        
            <p>Company:{company}</p>
            <p>Position:{position}</p>
            <p>Link:{link}</p>
            <p>Applied:{createdAt}</p>
            <p>Status:{status}</p>
            <p>Mood:{moodTxt}</p>
            <p>Rating:{rating}</p>
        
        </section>
    )

}



export {Modal, Card}