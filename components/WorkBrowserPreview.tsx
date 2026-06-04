'use client';

import Image from 'next/image';

type WorkBrowserPreviewProps = {
    image: string;
    previewLabel: string;
    name: string;
};

export default function WorkBrowserPreview({image, previewLabel, name}: WorkBrowserPreviewProps) {
    return (
        <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent/5 to-transparent rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"/>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f172a] shadow-2xl shadow-black/40">
                <div className="flex items-center gap-2 px-4 py-3 bg-[#1e293b] border-b border-white/5">
                    <span className="w-3 h-3 rounded-full bg-red-500"/>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"/>
                    <span className="w-3 h-3 rounded-full bg-green-500"/>
                    <span className="ml-3 flex-1 text-center text-xs text-white/40 truncate px-4 italic">
                        {previewLabel}
                    </span>
                </div>
                <div className="relative aspect-[16/10] bg-[#111] overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none"/>
                </div>
            </div>
        </div>
    );
}
