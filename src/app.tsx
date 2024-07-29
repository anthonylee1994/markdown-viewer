import React from "react";
import {MarkdownInput} from "./components/MarkdownInput.tsx";
import {MarkdownPreview} from "./components/MarkdownPreview";

export const App = () => {
    const [markdown, setMarkdown] = React.useState("");

    return (
        <div className="flex lg:min-h-[100vh] flex-col lg:flex-row">
            <div className="bg-blue-50 flex-1 p-4">
                <MarkdownInput value={markdown} onChange={setMarkdown} />
            </div>
            <div className="flex-1 p-4">
                <MarkdownPreview markdown={markdown || "No markdown"} />
            </div>
        </div>
    );
};
