import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/cjs/styles/prism";
import "./index.less";

interface Props {
    markdown: string;
}

export const MarkdownPreview = ({markdown}: Props) => {
    return (
        <div className="g-markdown-preview bg-gray-200 p-4 rounded-lg overflow-auto">
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                components={{
                    code({className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || "");

                        return match ? (
                            <SyntaxHighlighter style={dracula} PreTag="div" language={match[1]} {...props}>
                                {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                    table({children, ...props}) {
                        return (
                            <div className="overflow-auto">
                                <table {...props}>{children}</table>
                            </div>
                        );
                    },
                }}
            >
                {markdown}
            </ReactMarkdown>
        </div>
    );
};
