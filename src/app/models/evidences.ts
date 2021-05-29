export interface Evidences{
    resourceType: "Evidence",

    url?: string,
    identifier?: Identifier[],
    version?: string,
    name?: string,
    title?: string,
    shortTitle?: string,
    subtitle?: string,
    status: "draft" | "active" | "retired" | "unknown",
    date?: Date,
    publisher?: string,
    contact?: ContactDetail[],
    description?: string,
    note?: Annotation[],
    useContext?: UsageContext[],
    jurisdiction?: CodeableConcept[], 
    copyright?: string,
    approvalDate?: string,
    lastReviewDate?: string,
    effectivePeriod?: Period[], 
    topic?: CodeableConcept[],  
    author?: ContactDetail[],
    editor?: ContactDetail[],
    reviewer?: ContactDetail[],
    endorser?: ContactDetail[],
    relatedArtifact?: string[],         //RelatedArtifact
    exposureBackground: Reference,
    exposureVariant?: Reference[],
    outcome?: Reference[]
}

//CONTACT DETAIL
export interface ContactDetail{
    name?: string,
    telecom?: ContactPoint[]
}

//CONTACT POINT
export interface ContactPoint{
    system?: "phone" | "fax" | "email" | "pager" | "url" | "sms" | "other",
    value?: string,
    use?: "home" | "work" | "temp" | "old" | "mobile",
    rank?: '1' | '2' | '3' | "4" | "5",
    period?: Period
}

//PERIOD
export interface Period{
    start?: string,
    end?: string
}
//USAGE CONTEXT
export interface UsageContext{
    code?: Coding,
    value?: CodeableConcept
}

//IDENTIFIER
export interface Identifier{
    use?: "usual" | "official" | "temp" | "secondary" | "old",
    type?: CodeableConcept,
    system?: string,
    value?: string,
    period?: Period,
    assigner?: Reference
}

//CODEABLE CONCEPT
export interface CodeableConcept{
    text?: string,
    coding?: Coding[]
}

//CODING
export interface Coding{
    system?: string,
    version?: string,
    code?: string,
    display?: string,
    userSelected?: boolean
}

//REFERENCE
export interface Reference{
    reference?: string,
    type?: string,
    identifier?: Identifier,
    display?: string
}

//ANNOTATION
export interface Annotation{
    author?: string,
    time?: string,
    text: string
}