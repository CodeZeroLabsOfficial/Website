import type { ProductContent } from "@/lib/content";
import { Icon } from "@/components/Icon";

function ChauffeurScreen() {
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <p className="font-display text-sm font-semibold text-white">Your ride</p>
        <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold text-white">
          On the way
        </span>
      </div>
      <div className="relative flex-1 overflow-hidden rounded-2xl bg-ink-3/40">
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10" />
        <div className="absolute left-6 top-8 h-2 w-2 rounded-full bg-white" />
        <div className="absolute bottom-10 right-7 h-2 w-2 rounded-full bg-white" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 220" fill="none">
          <path d="M28 40 C90 70 110 120 160 178" stroke="currentColor" className="text-white" strokeWidth="2.5" strokeDasharray="6 6" />
        </svg>
      </div>
      <div className="rounded-2xl bg-ink-2 p-3.5">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white">
            <Icon name="route" className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-white">Mercedes S-Class</p>
            <p className="text-[11px] text-muted">James · 4.9★ · 4 min away</p>
          </div>
          <Icon name="phone" className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
}

function ClinicScreen() {
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <p className="font-display text-sm font-semibold text-white">Appointments</p>
      <div className="rounded-2xl bg-accent/12 p-3.5">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">Today · 10:30</p>
        <p className="mt-1 text-sm font-semibold text-white">Dr. Amelia Hart</p>
        <p className="text-[11px] text-muted">Telehealth · General consult</p>
        <button className="mt-2.5 w-full rounded-full bg-accent py-2 text-[11px] font-semibold text-accent-contrast">
          Join video call
        </button>
      </div>
      {[
        { t: "Wed · 09:00", d: "Blood test results", i: "heart" as const },
        { t: "Fri · 14:15", d: "Repeat prescription", i: "calendar" as const },
      ].map((r) => (
        <div key={r.t} className="flex items-center gap-3 rounded-2xl bg-ink-2 p-3">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-accent/15 text-accent">
            <Icon name={r.i} className="h-4.5 w-4.5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-white">{r.d}</p>
            <p className="text-[10px] text-muted">{r.t}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function GymScreen() {
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <p className="font-display text-sm font-semibold text-white">This week</p>
        <span className="flex items-center gap-1 rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-semibold text-accent">
          <Icon name="flame" className="h-3 w-3" /> 6 day streak
        </span>
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {[1, 1, 1, 1, 1, 0, 0].map((v, i) => (
          <div
            key={i}
            className={`h-8 rounded-md ${v ? "bg-accent" : "bg-ink-3/50"}`}
          />
        ))}
      </div>
      <div className="rounded-2xl bg-accent/12 p-3.5">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">Next class · 18:00</p>
        <p className="mt-1 text-sm font-semibold text-white">HIIT &amp; Strength</p>
        <p className="text-[11px] text-muted">Studio 2 · 4 spots left</p>
        <button className="mt-2.5 w-full rounded-full bg-accent py-2 text-[11px] font-semibold text-accent-contrast">
          Book class
        </button>
      </div>
      <div className="flex items-center gap-3 rounded-2xl bg-ink-2 p-3">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-accent/15 text-accent">
          <Icon name="dumbbell" className="h-4.5 w-4.5" />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-white">Bench press PR</p>
          <p className="text-[10px] text-muted">+5kg this week</p>
        </div>
      </div>
    </div>
  );
}

export function PhoneMock({ content }: { content: ProductContent }) {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-white/10 blur-2xl" />
      <div className="h-[540px] w-[268px] rounded-[2.6rem] border border-ink-3 bg-ink-2/80 p-2.5 shadow-2xl backdrop-blur">
        <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-ink">
          <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink-2" />
          <div className="h-full pt-8">
            {content.theme === "chauffeur" && <ChauffeurScreen />}
            {content.theme === "clinic" && <ClinicScreen />}
            {content.theme === "gym" && <GymScreen />}
          </div>
        </div>
      </div>
    </div>
  );
}
