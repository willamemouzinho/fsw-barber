import { Badge } from "./badge";
import { Separator } from "./ui/separator";

export function BookingItem() {
  return (
    <div className="flex h-28 rounded-md border border-input bg-card">
      <div className="flex flex-1 flex-col justify-between p-3">
        <div className="self-start">
          <Badge>Confirmado</Badge>
        </div>

        <div className="flex flex-col gap-y-1">
          <h3 className="font-bold">Corte de Cabelo</h3>
          <div className="flex items-center gap-x-2">
            <div className="h-6 w-6 rounded-full bg-slate-700" />
            <span className="text-sm">Willame Mouzinho</span>
          </div>
        </div>
      </div>

      <Separator orientation="vertical" className="h-full bg-input" />

      <div className="flex w-28 flex-col items-center justify-center gap-y-0">
        <div className="text-xs">Fevereiro</div>
        <div className="text-2xl">06</div>
        <div className="text-xs">09:45</div>
      </div>
    </div>
  );
}
