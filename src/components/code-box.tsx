import { Sandpack } from "@codesandbox/sandpack-react";
import { useEffect, useState } from "react";

export function CodeBox() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return <Sandpack />;
}
