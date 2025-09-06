export default function StatItem({ number, label }: { number: string; label: string }) {
    return (
        <div className="text-center">
            <p className="text-2xl font-bold text-green-400">{number}</p>
            <p className="text-gray-400">{label}</p>
        </div>
    );
}