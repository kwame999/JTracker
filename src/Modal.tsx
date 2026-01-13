import { useReducer, useState } from "react"

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

type Job ={
    jobtype: JobType
}

type State = {
    boarder: string;
};

type Action = 
    | { type: 'EMPTY' }
    | { type: 'ACTIVE' }
    | { type: 'FILLED' };

function inputReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'EMPTY':
            return { boarder: "white" };
        case 'ACTIVE':
            return {  boarder: "green" };
        case 'FILLED':
            return {  boarder: "green" };
        default:
            return state; 
    }
}
const Modal = () => {
    
    const [jobs, setJobs] = useState<JobType[]>([]);
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [status, setStatus] = useState("draft");
    const [link, setLink] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [rating, setRating] = useState(0);
    const [moodTxt, setMoodTxt] = useState("");

    const [state, dispatch] = useReducer(inputReducer, {boarder: "white", 
                                                     })
    console.log(jobs)
    
    function handleJobType(){
        
        setJobs(
            
            [...jobs, {
                
                id: crypto.randomUUID(),
                company: company,
                companyIcon: {
                    logo: `https://img.logo.dev/${company}.com?token=pk_RKtwoXuaQDSJdIEDV1NYVA`,
                    alt: `${company} logo`
                },
                position: position,
                status: status,
                link: link,
                createdAt: createdAt,
                rating: rating,
                moodTxt: moodTxt,
                favorites: false,
            }
        ]
        
        
    )
    
    
}
localStorage.setItem("Jobs", JSON.stringify(jobs))

console.log(state.boarder)

return(
    
    <section>

            <form action="">

                <div>
                    
                    <label htmlFor="">Company name:</label>
                    
                    <input style={{backgroundColor: state.boarder}} type="text" name="company" id="" value={company} onChange={(e)=>{
                        setCompany(e.target.value)
                        
                        !e.target.value ?
                        dispatch({
                            type: 'EMPTY'
                        }):
                        dispatch({
                            type: 'ACTIVE'
                        })
                    }}/>
                    <label htmlFor="">role:</label>
                    <input type="text" name="role"  id="" value={position} onChange={(e)=>{
                        setPosition(e.target.value)
                    }}/>
                    <label htmlFor="">link</label>
                    <input type="text" name="link" id="" value={link} onChange={(e)=>{
                        setLink(e.target.value);
                    }}/>
                    <label htmlFor="">Created at:</label>
                    <input type="text" name="date" id="" value={createdAt} onChange={(e)=>{
                        setCreatedAt(e.target.value);
                    }}/>
                    <label htmlFor="mood"></label>
                
                </div>

                <textarea name="moodMsg" id="" onChange={(e)=>{
                    setMoodTxt(e.target.value);
                }}></textarea>

                <select name="status" id="" onChange={(e)=>{
                    setStatus(e.target.value);
                }}>
                    
                    <option value="wishlist">Wishlist</option>
                    <option value="applied">Applied</option>
                    <option value="interview">Interview</option>
                    <option value="offer">Offer</option>
                    <option value="rejected">Rejected</option>
                    <option value="ghosted">Ghosted</option>
                
                </select>

                <button type="submit" onClick={(e)=>{
                    e.preventDefault();
                    handleJobType();
                    setCompany("");
                    setCreatedAt("");
                    setLink("");
                    setMoodTxt("");
                    setPosition("");
                    setStatus("");
                    setMoodTxt("");
                }}>Track</button>
            </form>

        </section>
)


}


const Card = (jobs: JobType) => {
    
    const {company, position, link, status, moodTxt, createdAt, rating} = jobs

    // const deleteTodo = (id) => { jobType.filter(job => job !== jobType.id)}

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
            <button>Delete</button>
            <button>Edit</button>
        </div>

        </section>
    )


}


export {Modal, Card}