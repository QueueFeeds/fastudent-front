import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Loader2 } from "lucide-react";

interface TakButtonProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "loding";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  disabled?: boolean;
}

export function TakButton({
  variant,
  size,
  className,
  disabled,
}: TakButtonProps) {
  const isLoading = variant === "loding";

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      disabled={disabled || isLoading}
    >
      {isLoading ? <Loader2 className="animate-spin" /> : ""}
      Loading
    </Button>
  );
}
