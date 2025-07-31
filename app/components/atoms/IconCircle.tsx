export default function IconCircle({ icon}: {icon: any}) {
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full">
      {icon}
    </div>
  );
}