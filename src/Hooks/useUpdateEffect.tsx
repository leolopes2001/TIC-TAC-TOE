import { DependencyList, EffectCallback, useEffect } from "react";
import { useFirstRender } from "./useFirstRender";

export const useUppdateEffect = (
  effect: EffectCallback,
  deps?: DependencyList
) => {
  const isFirst = useFirstRender();

  useEffect(() => {
    if (!isFirst) return effect();
  }, deps);
};
