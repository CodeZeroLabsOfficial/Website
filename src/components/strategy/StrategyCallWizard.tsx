"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/chrome/Logo";
import { ArrowChase } from "@/components/ui/ArrowChase";
import { Button } from "@/components/ui/Button";
import { Field, TextAreaField } from "@/components/ui/Field";
import { MultiSelectField } from "@/components/ui/MultiSelectField";
import { SearchSelectField } from "@/components/ui/SearchSelectField";
import { dispatchPlatforms } from "@/content/demo";
import { strategyCall } from "@/content/strategyCall";
import { submitLead } from "@/lib/leads";
import { STEP_EASE } from "@/lib/motion";

type Answers = {
  firstName: string;
  email: string;
  segment: string;
  segmentOther: string;
  fleetSize: string;
  countries: string[];
  bottleneck: string[];
  tools: string;
  goals: string;
};

const empty: Answers = {
  firstName: "",
  email: "",
  segment: "",
  segmentOther: "",
  fleetSize: "",
  countries: [],
  bottleneck: [],
  tools: "",
  goals: "",
};

/** Question steps only (intro + success are separate phases). */
const QUESTION_COUNT = 8;

export function StrategyCallWizard({ onClose }: { onClose: () => void }) {
  const [phase, setPhase] = useState<"intro" | "questions" | "success">("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(empty);
  const [error, setError] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const reduce = useReducedMotion();

  const progress = useMemo(() => {
    if (phase !== "questions") return 0;
    return step + 1;
  }, [phase, step]);

  function setField<K extends keyof Answers>(key: K, value: Answers[K]) {
    setError(false);
    setAnswers((a) => ({ ...a, [key]: value }));
  }

  function toggleBottleneck(id: string) {
    setError(false);
    setAnswers((a) => ({
      ...a,
      bottleneck: a.bottleneck.includes(id)
        ? a.bottleneck.filter((t) => t !== id)
        : [...a.bottleneck, id],
    }));
  }

  function canContinue() {
    switch (step) {
      case 0:
        return answers.firstName.trim().length > 0;
      case 1:
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email.trim());
      case 2:
        if (answers.segment === "other") {
          return answers.segmentOther.trim().length > 0;
        }
        return answers.segment.length > 0;
      case 3:
        return answers.fleetSize.length > 0;
      case 4:
        return answers.countries.length > 0;
      case 5:
        return answers.bottleneck.length > 0;
      case 6:
        return answers.tools.length > 0;
      case 7:
        return answers.goals.trim().length > 0;
      default:
        return false;
    }
  }

  async function goNext() {
    if (submitting) return;
    if (phase === "intro") {
      setPhase("questions");
      setStep(0);
      return;
    }
    if (!canContinue()) {
      setError(true);
      return;
    }
    if (step >= QUESTION_COUNT - 1) {
      setSubmitting(true);
      setSubmitError(null);
      const segment =
        answers.segment === "other"
          ? answers.segmentOther.trim()
          : (strategyCall.segments.find((item) => item.id === answers.segment)?.label ??
            answers.segment);
      const bottleneck = answers.bottleneck
        .map(
          (id) => strategyCall.bottlenecks.find((item) => item.id === id)?.label ?? id,
        )
        .join(", ");
      const dispatchPlatform = answers.tools;
      const result = await submitLead({
        form: "strategy-call",
        name: answers.firstName.trim(),
        email: answers.email.trim(),
        fields: {
          segment,
          fleetSize: answers.fleetSize,
          location: answers.countries.join(", "),
          bottleneck,
          dispatchPlatform,
          goals: answers.goals.trim(),
        },
        pageUrl: window.location.href,
      });
      setSubmitting(false);
      if (!result.ok) {
        setSubmitError(result.message);
        return;
      }
      setPhase("success");
      return;
    }
    setStep((s) => s + 1);
  }

  function goBack() {
    setError(false);
    if (phase === "questions" && step === 0) {
      setPhase("intro");
      return;
    }
    if (phase === "questions") setStep((s) => Math.max(0, s - 1));
  }

  const panelKey =
    phase === "questions" ? `question-${step}` : phase;
  const onQuestions = phase === "questions";

  return (
    <div className="flex h-full min-h-0 flex-col">
      <header className="relative z-10 flex h-14 shrink-0 items-center bg-ink px-5 md:px-8">
        <div className="flex w-24 shrink-0 items-center">
          {onQuestions ? (
            <button
              type="button"
              onClick={goBack}
              className="flex h-10 items-center text-sm text-mist transition-opacity hover:opacity-70"
            >
              ← {strategyCall.back}
            </button>
          ) : null}
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-center px-2">
          <Logo className="h-5 w-auto" />
        </div>

        <div className="flex w-24 shrink-0 items-center justify-end">
          <button
            type="button"
            aria-label="Close strategy call form"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center text-white"
          >
            <span className="relative block h-4 w-4">
              <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 rotate-45 bg-white" />
              <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 -rotate-45 bg-white" />
            </span>
          </button>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto flex min-h-full w-full max-w-[1200px] flex-col px-5 pb-16 pt-8 md:px-8 md:pt-10">
          {onQuestions ? (
            <div className="mb-8">
              <ProgressDots total={QUESTION_COUNT} current={progress} />
            </div>
          ) : null}

          <AnimatePresence mode="wait">
            <StepPanel key={panelKey} reduce={!!reduce}>
              {phase === "intro" ? <Intro onStart={goNext} /> : null}
              {phase === "success" ? <Success onClose={onClose} /> : null}
              {phase === "questions" ? (
                <QuestionStep
                  step={step}
                  answers={answers}
                  error={error}
                  submitError={submitError}
                  submitting={submitting}
                  setField={setField}
                  toggleBottleneck={toggleBottleneck}
                  onContinue={goNext}
                  canContinue={canContinue()}
                />
              ) : null}
            </StepPanel>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/** Exit fade/sink ~200ms, then enter fade/rise ~450–550ms. */
function StepPanel({
  children,
  reduce,
}: {
  children: ReactNode;
  reduce: boolean;
}) {
  if (reduce) {
    return <div className="flex flex-1 flex-col">{children}</div>;
  }

  return (
    <motion.div
      className="flex flex-1 flex-col"
      initial={{ opacity: 0, y: 12 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          opacity: { duration: 0.45 },
          y: { duration: 0.55, ease: STEP_EASE },
        },
      }}
      exit={{
        opacity: 0,
        y: 12,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  );
}

function ProgressDots({ total, current }: { total: number; current: number }) {
  return (
    <div
      className="mx-auto flex w-full max-w-[420px] items-center justify-between px-10"
      aria-label={`Step ${current} of ${total}`}
    >
      {Array.from({ length: total }, (_, i) => {
        const n = i + 1;
        const done = n <= current;
        return (
          <span key={n} className="flex flex-1 items-center last:flex-none">
            <span
              className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                done ? "bg-accent" : "bg-ink-3"
              }`}
            />
            {n < total ? (
              <span
                className={`mx-0.5 h-px flex-1 ${
                  n < current ? "bg-accent" : "bg-ink-3"
                }`}
              />
            ) : null}
          </span>
        );
      })}
    </div>
  );
}

function Intro({ onStart }: { onStart: () => void }) {
  const { intro } = strategyCall;
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-16 text-center md:py-24">
      <p className="eyebrow text-mist">{intro.eyebrow}</p>
      <h1
        id="strategy-call-title"
        className="mt-5 max-w-xl text-balance font-display text-[1.65rem] font-semibold leading-tight tracking-normal text-white sm:text-[2rem]"
      >
        {intro.title}
      </h1>
      <p className="lead mt-5 max-w-md text-balance">{intro.body}</p>
      <Button className="group mt-10" onClick={onStart}>
        {intro.cta}
        <ArrowChase />
      </Button>
    </div>
  );
}

function Success({ onClose }: { onClose: () => void }) {
  const { success } = strategyCall;
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-16 text-center md:py-24">
      <h1 className="max-w-xl text-balance font-display text-[1.65rem] font-semibold leading-tight tracking-normal text-white sm:text-[2rem]">
        {success.title}
      </h1>
      <p className="lead mt-5 max-w-md text-balance">{success.body}</p>
      <Button className="mt-10" onClick={onClose}>
        {success.cta}
      </Button>
    </div>
  );
}

function QuestionStep({
  step,
  answers,
  error,
  submitError,
  submitting,
  setField,
  toggleBottleneck,
  onContinue,
  canContinue,
}: {
  step: number;
  answers: Answers;
  error: boolean;
  submitError: string | null;
  submitting: boolean;
  setField: <K extends keyof Answers>(key: K, value: Answers[K]) => void;
  toggleBottleneck: (id: string) => void;
  onContinue: () => void;
  canContinue: boolean;
}) {
  const s = strategyCall.steps;
  const firstName = answers.firstName.trim() || "there";
  const reduce = useReducedMotion();
  const otherFieldRef = useRef<HTMLDivElement>(null);
  const showOther = answers.segment === "other";

  function focusOtherField() {
    otherFieldRef.current
      ?.querySelector<HTMLInputElement>("input")
      ?.focus();
  }

  useEffect(() => {
    if (!showOther) return;
    if (reduce) {
      focusOtherField();
      return;
    }
    const id = window.setTimeout(focusOtherField, 280);
    return () => window.clearTimeout(id);
  }, [showOther, reduce]);

  const otherField = (
    <Field
      className="mt-3"
      label={strategyCall.fields.segmentOther}
      showLabel={false}
      value={answers.segmentOther}
      onChange={(v) => setField("segmentOther", v)}
      placeholder={s.segment.otherPlaceholder}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          onContinue();
        }
      }}
    />
  );

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1">
        {step === 0 ? (
          <StepBlock title={s.firstName.title}>
            <Field
              label={strategyCall.fields.firstName}
              showLabel={false}
              value={answers.firstName}
              onChange={(v) => setField("firstName", v)}
              placeholder={s.firstName.placeholder}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  onContinue();
                }
              }}
            />
          </StepBlock>
        ) : null}

        {step === 1 ? (
          <StepBlock
            title={
              <>
                <span className="block text-lg font-medium text-mist sm:text-xl">
                  {s.email.titlePrefix}
                </span>
                <span className="mt-2 block">{s.email.title(firstName)}</span>
              </>
            }
          >
            <Field
              label={strategyCall.fields.email}
              showLabel={false}
              type="email"
              value={answers.email}
              onChange={(v) => setField("email", v)}
              placeholder={s.email.placeholder}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  onContinue();
                }
              }}
            />
          </StepBlock>
        ) : null}

        {step === 2 ? (
          <StepBlock title={s.segment.title} body={s.segment.body}>
            <div className="grid gap-3">
              {strategyCall.segments.map((item) => (
                <ChoiceRow
                  key={item.id}
                  label={item.label}
                  selected={answers.segment === item.id}
                  onClick={() => {
                    setField("segment", item.id);
                    if (item.id !== "other") setField("segmentOther", "");
                  }}
                />
              ))}
            </div>
            {reduce ? (
              showOther ? (
                <div ref={otherFieldRef}>{otherField}</div>
              ) : null
            ) : (
              <AnimatePresence initial={false}>
                {showOther ? (
                  <motion.div
                    ref={otherFieldRef}
                    key="segment-other"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.28, ease: STEP_EASE },
                        opacity: { duration: 0.22, delay: 0.04 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.2, ease: "easeOut" },
                        opacity: { duration: 0.15 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    {otherField}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            )}
          </StepBlock>
        ) : null}

        {step === 3 ? (
          <StepBlock title={s.fleet.title} body={s.fleet.body}>
            <div className="grid grid-cols-2 gap-3">
              {strategyCall.fleetSizes.map((size) => (
                <ChoiceRow
                  key={size}
                  label={size}
                  selected={answers.fleetSize === size}
                  onClick={() => setField("fleetSize", size)}
                  radio
                />
              ))}
            </div>
          </StepBlock>
        ) : null}

        {step === 4 ? (
          <StepBlock title={s.countries.title}>
            <MultiSelectField
              label={strategyCall.fields.countries}
              showLabel={false}
              value={answers.countries}
              onChange={(v) => setField("countries", v)}
              options={strategyCall.countryOptions}
              placeholder={s.countries.placeholder}
              searchPlaceholder={s.countries.searchPlaceholder}
              emptyMessage={s.countries.empty}
              autoFocus
            />
          </StepBlock>
        ) : null}

        {step === 5 ? (
          <StepBlock
            title={s.bottleneck.title}
            body={s.bottleneck.body}
            wide
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {strategyCall.bottlenecks.map((item) => (
                <ChoiceRow
                  key={item.id}
                  label={item.label}
                  selected={answers.bottleneck.includes(item.id)}
                  onClick={() => toggleBottleneck(item.id)}
                  endAffordance={false}
                />
              ))}
            </div>
          </StepBlock>
        ) : null}

        {step === 6 ? (
          <StepBlock title={s.tools.title}>
            <SearchSelectField
              label="Current dispatch platform"
              showLabel={false}
              value={answers.tools}
              onChange={(v) => setField("tools", v)}
              options={dispatchPlatforms}
              placeholder="Select a platform"
              searchPlaceholder="Search platforms…"
              emptyMessage="No platforms match"
              autoFocus
            />
          </StepBlock>
        ) : null}

        {step === 7 ? (
          <StepBlock title={s.goals.title}>
            <TextAreaField
              label={strategyCall.fields.goals}
              showLabel={false}
              value={answers.goals}
              onChange={(v) => setField("goals", v)}
              placeholder={s.goals.placeholder}
              rows={5}
            />
          </StepBlock>
        ) : null}

        {error ? (
          <p className="mx-auto mt-4 max-w-[520px] text-center text-sm text-red-400">
            {strategyCall.requiredError}
          </p>
        ) : null}
        {submitError ? (
          <p className="mx-auto mt-4 max-w-[520px] text-center text-sm text-red-400">
            {submitError}
          </p>
        ) : null}
      </div>

      <div className="mx-auto mt-10 w-full max-w-[520px]">
        <Button
          className={`group w-full ${canContinue && !submitting ? "" : "opacity-40"}`}
          onClick={onContinue}
          disabled={submitting}
        >
          {strategyCall.continue}
          <span aria-hidden>{strategyCall.continueArrow}</span>
        </Button>
      </div>
    </div>
  );
}

function StepBlock({
  title,
  body,
  children,
  wide = false,
}: {
  title: ReactNode;
  body?: string;
  children: ReactNode;
  /** Wider measure for multi-column choice grids. */
  wide?: boolean;
}) {
  return (
    <div className="text-center">
      <h1 className="mx-auto max-w-[800px] text-balance font-display text-[1.65rem] font-semibold leading-tight tracking-normal text-white sm:text-[2rem]">
        {title}
      </h1>
      {body ? (
        <p className="lead mx-auto mt-4 max-w-md text-balance">{body}</p>
      ) : null}
      <div
        className={`mx-auto mt-8 w-full text-left ${
          wide ? "max-w-[920px]" : "max-w-[520px]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function ChoiceRow({
  label,
  selected,
  onClick,
  radio,
  endAffordance = true,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  radio?: boolean;
  /** Trailing chevron for single-select list rows. */
  endAffordance?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-lg border px-4 py-4 text-left text-sm text-white transition-colors ${
        selected
          ? "border-white bg-white/5"
          : "border-ink-3 hover:border-white/50"
      }`}
    >
      {radio ? (
        <span
          className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
            selected ? "border-accent bg-accent" : "border-ink-3"
          }`}
          aria-hidden
        >
          {selected ? (
            <svg viewBox="0 0 12 12" className="h-3 w-3 text-accent-contrast">
              <path
                d="M2.5 6.2 4.8 8.5 9.5 3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : null}
        </span>
      ) : null}
      <span className="min-w-0 flex-1 whitespace-nowrap leading-snug">
        {label}
      </span>
      {!radio && endAffordance ? (
        <span className="shrink-0 text-mist" aria-hidden>
          ›
        </span>
      ) : null}
    </button>
  );
}
