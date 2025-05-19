export default function EmptyStateAnimation() {
  return (
    <div className="mx-auto mb-4 grid w-max grid-cols-3 gap-[1px]">
      {Array.from({ length: 9 }).map((_, index) => (
        <span
          key={index}
          style={{ animationDelay: `${Math.random() * 1000}ms` }}
          className="animate-colors size-1.5 animate-(--color-animation) rounded-xs bg-gray-200"
        />
      ))}
    </div>
  );
}
