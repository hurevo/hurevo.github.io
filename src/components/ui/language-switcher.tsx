import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
// @ts-expect-error - paraglide runtime is auto-generated
import { getLocale, setLocale } from "@/paraglide/runtime";
import { localizeHref, withoutBase } from "@/lib/url";

export function LanguageSwitcher({ className }: { className?: string }) {
  const currentLocale = getLocale() as string;

  const handleLocaleChange = (newLocale: string) => {
    const currentPath = withoutBase(window.location.href);
    const targetHref = localizeHref(currentPath, newLocale);
    window.location.href = targetHref;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="ghost"
          size="icon"
          className={className}
          aria-label="Language options"
        >
          <span className="sr-only">Toggle language</span>
          <Languages className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleLocaleChange("en")}
          className={currentLocale === "en" ? "font-medium" : ""}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLocaleChange("id")}
          className={currentLocale === "id" ? "font-medium" : ""}
        >
          Bahasa Indonesia
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
