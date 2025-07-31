export default function ColorCirclePallete({ colorOptions}: {colorOptions: string[]}) {
  return (
    <div className="flex justify-center items-center gap-2 mb-4">
  {colorOptions.map((color, idx) => (
    <span
      key={idx}
      className="w-3 h-3 rounded-full border border-gray-300"
      style={{ backgroundColor: color }}
    ></span>
  ))}
</div>
  );
}