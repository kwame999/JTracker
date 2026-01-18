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

//Column Types (Column.tsx):

type ColumnProps = {

    // children?: ReactNode,
    color?: string,
    name: string,
}


type CardProps = {
    job: JobType,
    onDelete: (id: string) => void
    onEdit: (id: string) => void
}

type CardPreview = {
    companyName: string,
    jobPosition: string,
    jobLink: string
}

//Dash assets
type Tags = string

//Header assets (DashAssets.tsx)
type HeaderProps = {
    jobProjName: string
}

//Modal assets (Modal.tsx)
type State = {
    boarder: string,
};

type ValueState = {
    key: string | number
};

//SideNav (SideNav.tsx)
type SideNavProps = {
    recentJobs: JobType[]

}

export type {JobType, Company, ColumnProps, CardProps, CardPreview, Tags, HeaderProps, State, ValueState, SideNavProps}


