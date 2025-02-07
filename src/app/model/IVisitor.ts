export interface IVisitor {
    _id: {$oid:string};
    name: string;
    welcomeMessage: string;
    weddingForm:{
        ppl:number,
        children:number,
        ceremony:boolean,
        party:boolean
        notAttending:boolean
    } | undefined;
}