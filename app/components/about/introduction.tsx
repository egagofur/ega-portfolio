import { introduction } from "@/src/data/About/introduction";

export default function Introduction() {
  return (
    <div className="max-w-2xl">
      {introduction.map((item: any, index: number) => (
        <h1 key={index} className="text-zinc-400">
          {item}
        </h1>
      ))}
    </div>
  );
}
