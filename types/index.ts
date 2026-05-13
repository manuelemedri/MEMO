export type Category='Lavoro'|'Personale'|'Pagamenti'|'Spesa'|'Casa'|'Salute';
export type Priority='Alta'|'Media'|'Bassa'; export type Status='todo'|'done'|'in_scadenza'|'pagata'|'da_pagare';
export type Task={id:string;title:string;description:string;category:Category;priority:Priority;dueDate:string;status:'todo'|'done';source:string;createdAt:string};
export type Deadline={id:string;title:string;provider:string;amount:number;dueDate:string;status:'pagata'|'da_pagare'|'in_scadenza';priority:Priority;category:Category;documentUrl:string;reminderPlan:{step:string;date:string;time:string;text:string;channels:string[]}[]};
export type InboxItem={id:string;source:string;sourceType:string;title:string;excerpt:string;suggestedCategory:Category;timestamp:string;metadata?:Record<string,string>};
export type GroceryItem={id:string;name:string;category:string;completed:boolean;addedBy:string};
export type Routine={id:string;title:string;recurrence:string;category:string;active:boolean;days:string[];completedToday:boolean};
export type Event={id:string;title:string;date:string;startTime:string;endTime:string;location:string;category:Category};
