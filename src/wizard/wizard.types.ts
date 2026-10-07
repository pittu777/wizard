
export interface FormData{
    firstName: string;
    lastName: string;
    email: string;
    phone:string;
    address: string;
    city: string;
     country: string;
      plan:  "basic" | "pro" | "enterprise";
       newsletter: boolean;
    
}

export type FormErrors = Partial<Record<keyof FormData, string>>;

export interface WizardState{
    step : number;
    totalSteps: number;
    formData: FormData;
    errors: FormErrors;
}

export type WizardAction = 
|{type:"UPDATE_FIELD", field: keyof FormData; value: FormData[keyof FormData]}
| { type: "SET_ERRORS"; errors: FormErrors }
| { type: "NEXT_STEP" }
| {type: "PREV_STEP"}
| {type: "GOTO_STEP"; step: number}
| {type: "RESET"}