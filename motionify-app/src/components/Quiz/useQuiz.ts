"use client";

import { useCallback, useMemo, useState } from "react";

export type QuizSelections = {
  niche: string | null;
  audience: string | null;
  style: string | null;
  mood: string | null;
  duration: string | null;
};

export type Recommendation = {
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
};

const INITIAL: QuizSelections = {
  niche: null,
  audience: null,
  style: null,
  mood: null,
  duration: null,
};

export function useQuiz() {
  const [current, setCurrent] = useState<number>(0);
  const [selections, setSelections] = useState<QuizSelections>(INITIAL);
  const total = 5;

  const select = useCallback((key: keyof QuizSelections, value: string) => {
    setSelections((s) => ({ ...s, [key]: value }));
    setCurrent((c) => Math.min(c + 1, total - 1));
  }, []);

  const isComplete = useMemo(
    () => Object.values(selections).every((v) => v !== null),
    [selections]
  );

  return { current, total, selections, select, setCurrent, isComplete };
}


