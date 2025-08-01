type Props ={
    label: string;
    varient?: "primary" | "secondary";
}

export default function Button({ label, varient = "primary" }: Props) {
    const base = "px-4 py-2 rounded text-sm font-semibold ";
    const styles = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",}
  return (
    <button className={`${base} ${styles[varient]}`}>
      {label}
    </button>
  );
}