"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import { Logo } from "@/components/chrome/Logo";
import { Button } from "@/components/ui/Button";
import { strategyCall } from "@/content/strategyCall";

type Answers = {
  firstName: string;
  email: string;
  segment: string;
  fleetSize: string;
  countries: string;
  bottleneck: string;
  tools: string[];
  goals: string;
};

const empty: Answers = {
  firstName: "",
  email: "",
  segment: "",
  fleetSize: "",
  countries: "",
  bottleneck: "",
  tools: [],
  goals: "",
};

/** Question steps only (intro + success are separate phases). */
const QUESTION_COUNT = 8;

export function StrategyCallWizard() {
  const [phase, setPhase] = useState<"intro" | "questions" | "success">("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(empty);
  const [error, setError] = useState(false);

  const progress = useMemo(() => {
    if (phase !== "questions") return 0;
    return step + 1;
  }, [phase, step]);

  function setField<K extends keyof Answers>(key: K, value: Answers[K]) {
    setError(false);
    setAnswers((a) => ({ ...a, [key]: value }));
  }

  function toggleTool(id: string) {
    setError(false);
    setAnswers((a) => ({
      ...a,
      tools: a.tools.includes(id)
        ? a.tools.filter((t) => t !== id)
        : [...a.tools, id],
    }));
  }

  function canContinue() {
    switch (step) {
      case 0:
        return answers.firstName.trim().length > 0;
      case 1:
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email.trim());
      case 2:
        return answers.segment.length > 0;
      case 3:
        return answers.fleetSize.length > 0;
      case 4:
        return answers.countries.trim().length > 0;
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

  function goNext() {
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

  return (
    <div className="flex min-h-dvh flex-col bg-ink [color-scheme:dark]">
      <header className="relative flex items-center justify-center px-5 py-5">
        {phase !== "intro" && phase !== "success" ? (
          <button
            type="button"
            onClick={goBack}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-sm text-mist transition-opacity hover:opacity-70 md:left-8"
          >
            ← {strategyCall.back}
          </button>
        ) : null}
        <Link href="/" aria-label="Depesch home" className="inline-flex">
          <Logo className="h-6 w-auto md:h-7" priority />
        </Link>
      </header>

      {phase === "questions" ? (
        <ProgressDots total={QUESTION_COUNT} current={progress} />
      ) : null}

      <div className="mx-auto flex w-full max-w-[560px] flex-1 flex-col px-5 pb-16 pt-10 md:max-w-[640px] md:pt-14">
        {phase === "intro" ? (
          <Intro onStart={goNext} />
        ) : null}
        {phase === "success" ? <Success /> : null}
        {phase === "questions" ? (
          <QuestionStep
            step={step}
            answers={answers}
            error={error}
            setField={setField}
            toggleTool={toggleTool}
            onContinue={goNext}
            canContinue={canContinue()}
          />
        ) : null}
      </div>
    </div>
  );
}

function ProgressDots({ total, current }: { total: number; current: number }) {
  return (
    <div
      className="mx-auto flex w-full max-w-[420px] items-center justify-between px-8 pt-2"
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
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <p className="eyebrow text-mist">{intro.eyebrow}</p>
      <h1 className="heading mt-5 max-w-xl text-balance">{intro.title}</h1>
      <p className="lead mt-5 max-w-md text-balance">{intro.body}</p>
      <Button size="lg" className="group mt-10 gap-3" onClick={onStart}>
        {intro.cta}
        <span aria-hidden>{strategyCall.continueArrow}</span>
      </Button>
    </div>
  );
}

function Success() {
  const { success } = strategyCall;
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <h1 className="heading max-w-xl text-balance">{success.title}</h1>
      <p className="lead mt-5 max-w-md text-balance">{success.body}</p>
      <Link href={success.href} className="btn btn-accent btn-lg mt-10">
        {success.cta}
      </Link>
    </div>
  );
}

function QuestionStep({
  step,
  answers,
  error,
  setField,
  toggleTool,
  onContinue,
  canContinue,
}: {
  step: number;
  answers: Answers;
  error: boolean;
  setField: <K extends keyof Answers>(key: K, value: Answers[K]) => void;
  toggleTool: (id: string) => void;
  onContinue: () => void;
  canContinue: boolean;
}) {
  const s = strategyCall.steps;
  const firstName = answers.firstName.trim() || "there";

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1">
        {step === 0 ? (
          <StepBlock title={s.firstName.title}>
            <TextInput
              label={strategyCall.fields.firstName}
              value={answers.firstName}
              onChange={(v) => setField("firstName", v)}
              placeholder="Enter your first name"
              autoFocus
              onEnter={onContinue}
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
            <TextInput
              label={strategyCall.fields.email}
              type="email"
              value={answers.email}
              onChange={(v) => setField("email", v)}
              placeholder={s.email.placeholder}
              autoFocus
              onEnter={onContinue}
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
                  onClick={() => setField("segment", item.id)}
                />
              ))}
            </div>
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
            <TextInput
              label="Countries"
              value={answers.countries}
              onChange={(v) => setField("countries", v)}
              placeholder={s.countries.placeholder}
              autoFocus
              onEnter={onContinue}
            />
          </StepBlock>
        ) : null}

        {step === 5 ? (
          <StepBlock title={s.bottleneck.title} body={s.bottleneck.body}>
            <div className="grid gap-3">
              {strategyCall.bottlenecks.map((item) => (
                <ChoiceRow
                  key={item.id}
                  label={item.label}
                  selected={answers.bottleneck === item.id}
                  onClick={() => setField("bottleneck", item.id)}
                  radio
                />
              ))}
            </div>
          </StepBlock>
        ) : null}

        {step === 6 ? (
          <StepBlock title={s.tools.title} body={s.tools.body}>
            <div className="grid grid-cols-2 gap-3">
              {strategyCall.tools.map((item) => (
                <ChoiceRow
                  key={item.id}
                  label={item.label}
                  selected={answers.tools.includes(item.id)}
                  onClick={() => toggleTool(item.id)}
                />
              ))}
            </div>
          </StepBlock>
        ) : null}

        {step === 7 ? (
          <StepBlock title={s.goals.title}>
            <textarea
              value={answers.goals}
              onChange={(e) => setField("goals", e.target.value)}
              placeholder={s.goals.placeholder}
              rows={5}
              className="w-full resize-y rounded-xl border border-ink-3 bg-transparent px-4 py-3.5 text-base text-white outline-none placeholder:text-muted/70 focus:border-white"
            />
          </StepBlock>
        ) : null}

        {error ? (
          <p className="mt-4 text-center text-sm text-red-400">
            This field is required
          </p>
        ) : null}
      </div>

      <div className="mt-10 flex justify-center">
        <Button
          size="lg"
          className={`gap-3 ${canContinue ? "" : "opacity-40"}`}
          onClick={onContinue}
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
}: {
  title: ReactNode;
  body?: string;
  children: ReactNode;
}) {
  return (
    <div className="text-center">
      <h1 className="heading text-balance text-[1.65rem] sm:text-[2rem]">
        {title}
      </h1>
      {body ? <p className="lead mx-auto mt-4 max-w-md text-balance">{body}</p> : null}
      <div className="mt-8 text-left">{children}</div>
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  autoFocus,
  onEnter,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  autoFocus?: boolean;
  onEnter?: () => void;
}) {
  return (
    <label className="relative block">
      <span className="sr-only">{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onEnter?.();
          }
        }}
        className="w-full rounded-xl border border-ink-3 bg-transparent px-4 py-4 text-base text-white outline-none placeholder:text-muted/70 focus:border-white"
      />
    </label>
  );
}

function ChoiceRow({
  label,
  selected,
  onClick,
  radio,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  radio?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl border px-4 py-4 text-left text-sm text-white transition-colors ${
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
      <span className="flex-1 leading-snug">{label}</span>
      {!radio ? (
        <span className="text-mist" aria-hidden>
          ›
        </span>
      ) : null}
    </button>
  );
}
