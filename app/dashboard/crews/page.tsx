import { getAllCrews } from "@/app/lib/data";
import CrewTable from "@/app/ui/crews/crews";

export default async function Page() {
  const crews = await getAllCrews();
    return (
        <div className="flex flex-col gap-4 justify-center w-full h-screen">
          <p className="text-2xl py-2 ml-4 font-bold">Crews</p>
          <div>
            <CrewTable crews={crews} />
          </div>
        </div>
    );
}