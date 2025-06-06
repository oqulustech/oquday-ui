
import { useState, useCallback } from "react"
import { Input } from 'react-daisyui'

const ValidatedInput = ({
    labelName,
    type,
    name,
    wasSubmitted,
    errors,
    fieldSchema,
    defaultValue,
    ...props
}: { labelName: any, type: any, name: any, wasSubmitted: any, defaultValue: any, errors: any, fieldSchema: any }) => {
    const [value, setValue] = useState("")
    const [touched, setTouched] = useState(false)

    const getErrors = useCallback(() => {
        const validationResult = fieldSchema.safeParse(value)
        return validationResult.success
            ? []
            : validationResult.error.flatten().formErrors
    }, [fieldSchema, value])

    const fieldErrors = errors || getErrors()
    const shouldRenderErrors = errors || wasSubmitted || touched

    const handleBlur = () => setTouched(true)
    const handleChange = (e: any) => setValue(e.currentTarget.value)

    return (
        <>
            <div className="mb-3">
                <label className="form-check-label">{labelName}</label>
                <Input
                    id={name}
                    name={name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className='form-control'
                    {...props}
                />
            </div>
            {shouldRenderErrors && (
                <span className="text-sm text-red-500">{fieldErrors}</span>
            )}
        </>
    )
}
export { ValidatedInput }