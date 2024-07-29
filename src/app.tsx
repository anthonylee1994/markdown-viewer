import React from "react";
import {MarkdownInput} from "./components/MarkdownInput.tsx";
import {MarkdownPreview} from "./components/MarkdownPreview";

export const App = () => {
    const [markdown, setMarkdown] = React.useState("");

    return (
        <div className="flex lg:min-h-[100vh] flex-col lg:flex-row justify-evenly">
            <div className="bg-blue-50 p-4 flex-[1_1_100%] lg:max-w-[50%]">
                <MarkdownInput value={markdown} onChange={setMarkdown} />
            </div>
            <div className="p-4 flex-[1_1_100%] lg:max-w-[50%]">
                <MarkdownPreview markdown={markdown || "No markdown"} />
            </div>
        </div>
    );
};
