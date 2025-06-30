import "@/app/globals.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`rounded-lg bg-blue-600 px-4 py-2 font-medium text-white 
                  hover:bg-primary/90 transition ${className ?? ""}`}
    />
  );
}
