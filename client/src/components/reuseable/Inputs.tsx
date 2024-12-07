import { ChangeEventHandler, FocusEventHandler } from "react";
type Props = {
    label: string;
    id: string;
    type: string;
    placeholder: string
};

export type InputsProps = {
    profileImage?: string
    item: Props;
    value: string
    error: string | false | undefined
    handleBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export default function Inputs({ item, value, error, handleBlur, handleChange }: InputsProps) {
    return (
        <div
            className={` min-h-24 w-full ${item.type === "textarea" ? "lg:col-span-2 sm:col-span-2 col-span-1" : ""}`}
        >
            <label className="block text-[#7B7A7F] mb-1">{item.label}</label>
            {item.type === "textarea" ? (
                <div className="mt-4 col-span-2 w-full">
                    <textarea
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={value}
                        name={item.id}
                        placeholder={item.placeholder}
                        className="w-full px-3 py-2 border border-[#28272D] rounded-md outline-none custom-input"
                        rows={4}
                    />
                </div>
            ) : (
                <input
                    id={item.id}
                    type={item.type}
                    name={item.id}
                    value={value}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={item.placeholder}
                    className="w-full px-3 py-2  border border-[#28272D]  rounded-md outline-none custom-input"
                />
            )}
            <p className="text-xs text-red-700">{error}</p>
        </div>
    );
}
