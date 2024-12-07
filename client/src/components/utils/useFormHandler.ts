import { useFormik } from "formik";
import { fieldValidationProps } from "./formUtils";
import generateIntialValue, { generateValidationSchema } from "./formUtils";
export default function useFormHandler<T extends fieldValidationProps[]>(config: T, action: (updatedData: unknown) => Promise<void>) {
    const validationSchema = generateValidationSchema(config)
    const initialValues = generateIntialValue(config)

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            await action(values)
            setSubmitting(false);
        }
    })
    return formik
}

