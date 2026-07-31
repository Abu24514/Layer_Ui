import { type IntegrationsType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type IntegrationsColumnProps = {
  integrations: IntegrationsType; 
  className?: string;
};

export default function IntegrationsColumn({ integrations, className }: IntegrationsColumnProps) {
  return (
    <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
      {integrations.map((integration) => (
        <div
          key={integration.name}
          className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
        >
          <div className="flex justify-center">
            <Image
              src={integration.icon}
              alt={`${integration.name} logo`}
              className="size-24"
            />
          </div>
          <h3 className="text-3xl text-center mt-6">
            {integration.name}
          </h3>
          <p className="text-center text-white/50 mt-2">
            {integration.description}
          </p>
        </div>
      ))}
    </div>
  );
}