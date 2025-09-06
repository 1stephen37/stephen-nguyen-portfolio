export default function TerminalLine({ text, cursor }: { text: string; cursor?: boolean }) {
    const colorize = (t: string) => {
        if (t.startsWith("$")) return <span className="text-green-400">{t}</span>;
        if (t.includes("https://")) return <span className="text-blue-400">{t}</span>;
        if (t.toLowerCase().includes("ready"))
            return <span className="text-purple-400">{t}</span>;
        return <span className="text-green-400">{t}</span>;
    };

    return (
        <div>
            {colorize(text)}
            {cursor && <span className="text-green-400 animate-blink">▮</span>}
        </div>
    );
}