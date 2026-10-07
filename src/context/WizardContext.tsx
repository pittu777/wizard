import { createContext } from "react";
import type { FormData, WizardAction, WizardState } from "../wizard/wizard.types";




const WizardContext = createContext();

const initialFormData : FormData = {
    
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        country: "",
        plan: "basic",
        newsletter: false
}

const initialState: WizardState = {
    step: 1,
    totalSteps: 3,
    formData: initialFormData,
    errors: {},
}

function wizardReducer(state: WizardState, action: WizardAction):WizardState{
    switch (action.type){
        case "UPDATE_FIELD":
            return {
                ...state,
                formData : {
                    ...state.formData,
                    [action.field]: action.value,
                },
                errors: {
                    ...state.errors,
                    [action.field]: undefined
                }
            }
        case "SET_ERRORS":

            return {
                ...state, errors: action.errors
            }
        case "NEXT_STEP":
            return {
                ...state,
                step: Math.min(state.step+1, state.totalSteps+1)
            }
        case "PREV_STEP":
            return {...s}
    }
}