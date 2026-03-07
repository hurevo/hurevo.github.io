import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';
// @ts-ignore
import { getLocale, setLocale } from '@/paraglide/runtime';

export function LanguageSwitcher({ className }: { className?: string }) {
    const currentLocale = getLocale() as string;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost" size="icon" className={className} aria-label="Language options">
                    <span className="sr-only">Toggle language</span>
                    <Languages className="size-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={() => setLocale('en')}
                    className={currentLocale === 'en' ? 'bg-accent font-medium' : ''}
                >
                    English
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setLocale('id')}
                    className={currentLocale === 'id' ? 'bg-accent font-medium' : ''}
                >
                    Bahasa Indonesia
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
