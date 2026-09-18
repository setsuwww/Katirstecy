export default function ServiceStage({ service }) {
    return (
        <div>
            <div className="mb-4 flex items-center gap-4">
                <span className="text-[10px] font-mono font-medium uppercase text-olive-50 bg-olive-800 px-2 py-1.5 rounded-sm">
                    {service.label}
                </span>
            </div>

            <h2 className="text-xl font-fondamento text-olive-600 font-medium tracking-tight sm:text-4xl">
                {service.title}
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-olive-500 sm:text-base">
                {service.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-sm bg-white border border-olive-300 px-3 py-1.5 text-xs text-olive-500"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
