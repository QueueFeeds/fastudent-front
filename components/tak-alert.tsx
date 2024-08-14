import { CircleAlert, Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface TakalertProps {
  variant?: "destructive" | "default" | null | undefined;
}

export function Takalert({ variant }: TakalertProps) {
  return (
    <Alert variant={variant} className="w-[634px] h-20 ">
      <CircleAlert className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}
