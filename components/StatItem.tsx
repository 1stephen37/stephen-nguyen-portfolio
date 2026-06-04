export default function StatItem({number, label}: { number: string; label: string }) {
    return (
        <div className="text-center px-2">
            <p className="text-2xl font-bold text-green-400">{number}</p>
            <p className="text-gray-400 text-sm sm:text-base leading-snug">{label}</p>
        </div>
    );
}
