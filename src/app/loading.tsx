import { Loader } from "@/components/ui/loader";

export default function Loading() {
  return (
    <div className="grid min-h-[60dvh] place-items-center">
      <Loader size={88} />
    </div>
  );
}