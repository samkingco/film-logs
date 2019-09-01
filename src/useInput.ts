import React, { useState } from "react";

export function useInput(initialValue: string = "") {
  const [value, setValue] = useState<string>(initialValue);
  return {
    value,
    onChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setValue(event.target.value)
  };
}
