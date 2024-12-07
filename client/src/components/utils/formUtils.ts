
import * as Yup from "yup"

export type fieldValidationProps = {
    id: string;
    required?: boolean;
    spaces?: boolean;
    pattern?: RegExp;
    message?: string;
    [key: string]: unknown;
    label: string;
    type: string;
    placeholder: string
}
export function generateValidationSchema(config: fieldValidationProps[]) {
    const schema: Record<string, Yup.StringSchema> = {}
    config.forEach((field) => {
        let fieldValidation = Yup.string();
        if (field.required) {
            fieldValidation = fieldValidation.required("Required");
        }

        if (field.noSpaces) {
            fieldValidation = fieldValidation.matches(/^\S*$/, field.message);
        }

        if (field.pattern) {
            fieldValidation = fieldValidation.matches(field.pattern, field.message || `Invalid ${field.id}`);
        }
        if (field.ref) {
            fieldValidation = fieldValidation.oneOf([Yup.ref(field.ref as string)], field.message)
        }

        schema[field.id] = fieldValidation;
    })
    return Yup.object(schema)
}


export default function generateIntialValue(config: fieldValidationProps[]) {
    const initialValues: Record<string, string> = {};
    config.forEach((field) => {
        initialValues[field.id] = "";
    });
    return initialValues;
}

