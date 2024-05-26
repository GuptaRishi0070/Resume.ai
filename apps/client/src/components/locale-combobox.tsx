import { t } from "@lingui/macro";
import { Check } from "@phosphor-icons/react";
import { Button, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, Popover, PopoverContent, PopoverTrigger, ScrollArea } from "@reactive-resume/ui";
import { cn } from "@reactive-resume/utils";
import fuzzy from "fuzzy";
import React, { useMemo, useState } from "react";

type Language = {
  name: string;
  locale: string;
};

type Props = {
  value: string;
  languages: Language[];
  onChange: (value: string) => void;
};

export const LocaleCombobox: React.FC<Props> = ({ value, languages, onChange }) => {
  const [search, setSearch] = useState("");

  const filteredLanguages = useMemo(() => {
    return fuzzy.filter(search, languages, {
      extract: (lang) => `${lang.name} ${lang.locale}`,
    });
  }, [search, languages]);

  return (
    <Command shouldFilter={false}>
      <CommandInput
        value={search}
        placeholder={t`Search for a language`}
        onValueChange={setSearch}
      />
      <CommandEmpty>{t`No results found`}</CommandEmpty>
      <CommandGroup>
        <ScrollArea orientation="vertical">
          <div className="max-h-60">
            {filteredLanguages.map(({ original }) => (
              <CommandItem
                key={original.locale}
                value={original.locale.trim()}
                onSelect={() => onChange(original.locale)}
              >
                <Check
                  className={cn(
                    "mr-2 size-4 opacity-0",
                    value === original.locale && "opacity-100",
                  )}
                />
                {original.name}{" "}
                <span className="ml-1 text-xs opacity-50">({original.locale})</span>
              </CommandItem>
            ))}
          </div>
        </ScrollArea>
      </CommandGroup>
    </Command>
  );
};

export const LocaleComboboxPopover: React.FC<Props> = ({ value, languages, onChange }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          variant="outline"
          className="w-full justify-between hover:bg-secondary/20 active:scale-100"
        >
          <span className="line-clamp-1 text-left font-normal">
            {/* Display selected language */}
            {languages.find(lang => lang.locale === value)?.name}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="p-0">
        {/* Render the combobox component */}
        <LocaleCombobox value={value} languages={languages} onChange={onChange} />
      </PopoverContent>
    </Popover>
  );
};
