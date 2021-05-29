export interface EvidencesSimplified{
    $key?: string,
    identifier?: string,
    name?: string,
    title?: string,
    status: "draft" | "active" | "retired" | "unknown",
    date?: Date,
    effectivePeriod?: Date, 
    exposureBackground: string,
}
