import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import remarkMath from "remark-math";
import {dracula} from "react-syntax-highlighter/dist/cjs/styles/prism";
import Latex from "react-latex";
import "katex/dist/katex.min.css";
import "./index.less";

interface Props {
    markdown: string;
}

export const MarkdownPreview = ({markdown}: Props) => {
    return (
        <div className="g-markdown-preview bg-gray-200 p-4 rounded-lg overflow-auto">
            <ReactMarkdown
                rehypePlugins={[rehypeRaw, remarkMath]}
                remarkPlugins={[remarkGfm]}
                components={{
                    code({className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || "");

                        if (match?.[1] === "math") {
                            return <Latex displayMode>{`$${children}$`}</Latex>;
                        }

                        return match ? (
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-expect-error
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
