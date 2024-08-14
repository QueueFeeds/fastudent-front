import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
  EnterFullScreenIcon,
} from "@radix-ui/react-icons";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import {
  LucideChevronRight,
  Users,
  History,
  UserCog,
  Link,
  UserPlus,
  FileDown,
  LogIn,
  LogOut,
} from "lucide-react";

import { TakAvatar } from "./tak-avatar";

export function TakCommand() {
  return (
    <Command className="w-[236px] h-auto bg-white border border-slate-300 flex-col justify-start items-start inline-flex">
      <CommandList className="w-full h-full">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup
          heading={
            <span className="text-slate-900 text-sm font-semibold font-['SUIT Variable'] leading-tight">
              마이
            </span>
          }
          className="m-2 text-slate-900 text-sm font-semibold font-['SUIT Variable'] leading-tight"
        >
          <CommandItem>
            <EnterFullScreenIcon className="mr-2 h-4 w-4" />
            <span>스크랩</span>
          </CommandItem>
          <CommandItem disabled>
            <Users className="mr-2 h-4 w-4" />
            <span>트렌드</span>
            <CommandShortcut>준비중</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <History className="mr-2 h-4 w-4" />
            <span>히스토리</span>
            <CommandShortcut>999+</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup
          heading={
            <span className="text-slate-900 text-sm font-semibold font-['SUIT Variable'] leading-tight">
              그룹
            </span>
          }
          className="m-2 text-slate-900 text-sm font-semibold font-['SUIT Variable'] leading-tight"
        >
          <CommandItem>
            <TakAvatar className="mr-2 h-[18px] w-[18px]" />
            <span>VLAD</span>
            <CommandShortcut>6</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <TakAvatar className="mr-2 h-[18px] w-[18px]" />
            <span>한예종 광고 19학번</span>
            <CommandShortcut>21</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <UserCog className="mr-2 h-4 w-4" />
            <span>그룹추가하기</span>
            <CommandShortcut>
              <LucideChevronRight />
            </CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup
          heading={
            <span className="text-slate-900 text-sm font-semibold font-['SUIT Variable'] leading-tight">
              바로가기
            </span>
          }
          className="m-2 text-slate-900 text-sm font-semibold font-['SUIT Variable'] leading-tight"
        >
          <CommandItem>
            <Link className="mr-2 h-4 w-4" />
            <span>계정 연결하기</span>
          </CommandItem>
          <CommandItem>
            <UserPlus className="mr-2 h-4 w-4" />
            <span>초대하기</span>
          </CommandItem>
          <CommandItem>
            <FileDown className="mr-2 h-4 w-4" />
            <span>다운로드</span>
          </CommandItem>
          <CommandItem>
            <GearIcon className="mr-2 h-4 w-4" />
            <span>환경설정</span>
          </CommandItem>
          <CommandItem>
            <LogIn className="mr-2 h-4 w-4" />
            <span>로그인</span>
          </CommandItem>
          <CommandItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>로그아웃</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
