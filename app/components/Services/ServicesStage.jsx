export default function ServiceStage({ service }) {
    return (
        <div className="service-stage">
            <div className="mb-3 flex items-center gap-4">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                    {service.label}
                </span>
            </div>

            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                {service.title}
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-neutral-500 sm:text-base">
                {service.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-sm bg-white border border-olive-300 px-3 py-1.5 text-xs text-neutral-500"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
