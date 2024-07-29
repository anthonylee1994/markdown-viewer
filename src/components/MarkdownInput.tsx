import React from "react";

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export const MarkdownInput = ({value, onChange}: Props) => {
    const [height, setHeight] = React.useState("auto");

    React.useEffect(() => {
        const height = value.split("\n").length;
        setHeight(`${height * 28 + 20}px`);
    }, [value]);

    return (
        <textarea
            rows={1}
            placeholder="Type some markdown..."
            className="leading-6 inline-block resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={value}
            style={{height}}
            onChange={e => onChange(e.target.value)}
        />
    );
};
