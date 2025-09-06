 import React from 'react';

export default function TechItem({ icon, name }: { icon: React.ReactNode; name: string }) {
    return (
        <div className="flex items-center gap-2 bg-[#1c2333] px-3 py-2 rounded-lg">
            {icon}
            <span>{name}</span>
        </div>
    );
}