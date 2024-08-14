import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TakAvatarProps {
  className: string;
}

export function TakAvatar({ className }: TakAvatarProps) {
  return (
    <Avatar className={className}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
