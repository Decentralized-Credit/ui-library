const styles = `
  .animate { animation: 1s ease-in-out infinite alternate color }
  @keyframes color { to { opacity: 0.1 } }
`;

export default function EmptyStateAnimation({ size = 6 }) {
  return (
    <>
      <style>{styles}</style>
      <div className="mx-auto mb-4 grid w-max grid-cols-3 gap-[1px]">
        {Array.from({ length: 9 }).map((_, index) => (
          <span
            key={index}
            style={{
              animationDelay: `${Math.random() * 1000}ms`,
              width: `${size}px`,
            }}
            className="animate aspect-square rounded-xs bg-gray-200"
          />
        ))}
      </div>
    </>
  );
}
