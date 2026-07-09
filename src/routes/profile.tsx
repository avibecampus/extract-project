import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { LogOut, Trash2, Download, Shield, Bell, User } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/profile")({ component: Profile });

function Profile() {
  const [name, setName] = useState("Student");
  const [bio, setBio] = useState("Chasing CA Foundation · early riser · caffeine.");
  const [career, setCareer] = useState("CA");
  const [level, setLevel] = useState("Foundation");
  const [date, setDate] = useState("2026-11-01");
  const [notif, setNotif] = useState(true);
  const [tfa, setTfa] = useState(false);
  const [reminder, setReminder] = useState("18:00");
  const [confirmDel, setConfirmDel] = useState(false);
  const nav = useNavigate();

  return (
    <AppShell title="Profile">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white sm:text-[28px]">Profile & Settings</h1>
        <p className="mt-1 text-sm text-white/55">Manage your account, preferences and data.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="surface rounded-lg p-6 lg:col-span-2">
          <div className="flex flex-wrap items-center gap-5">
            <div className="grid h-16 w-16 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-white/70">
              <User size={24} strokeWidth={1.5} />
            </div>
            <div className="min-w-0 flex-1">
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-md bg-transparent px-2 py-1 text-xl font-semibold text-white outline-none hover:bg-white/[0.03] focus:bg-white/[0.05]" />
              <div className="px-2 text-sm text-white/45">student@vibecampus.com</div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <FieldSelect label="Career goal" value={career} onChange={setCareer} options={["CA","Engineering","Freelancing","PM","Designer","Other"]} />
            <FieldSelect label="Level" value={level} onChange={setLevel} options={["Foundation","Intermediate","Advanced","Year 1","Year 2","Year 3","Year 4"]} />
            <Field label="Exam date" type="date" value={date} onChange={setDate} />
            <Field label="Reminder time" type="time" value={reminder} onChange={setReminder} />
          </div>

          <div className="mt-4">
            <label className="mb-1.5 block text-[11px] uppercase tracking-wider text-white/45">Bio</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3}
              className="w-full rounded-md border border-white/8 bg-white/[0.02] p-3 text-sm text-white outline-none focus:border-[oklch(0.72_0.13_250)]" />
          </div>

          <div className="mt-6 rounded-md border border-white/8 bg-white/[0.02] p-4">
            <div className="mb-2 flex items-center justify-between text-[11px] text-white/60">
              <span className="uppercase tracking-wider text-white/45">Progress</span>
              <span className="font-medium text-white">Level 4 · 62%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
              <div className="h-full bg-[oklch(0.64_0.16_255)]" style={{ width: "62%" }} />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px] text-white/55">
              <div><div className="text-white">12</div>Day streak</div>
              <div><div className="text-white">14</div>Tests taken</div>
              <div><div className="text-white">18</div>Milestones</div>
            </div>
          </div>

          <button className="btn-primary mt-6">Save changes</button>
        </div>

        <div className="space-y-4">
          <Card title="Account" icon={Shield}>
            <button className="w-full rounded-md border border-white/8 px-3 py-2 text-left text-sm text-white/75 hover:border-white/20 hover:text-white">Change password</button>
            <Toggle label="Two-factor auth" checked={tfa} onChange={setTfa} />
            <div className="text-[11px] text-white/45">Last login · today, 09:12</div>
          </Card>

          <Card title="Preferences" icon={Bell}>
            <Toggle label="Email notifications" checked={notif} onChange={setNotif} />
          </Card>

          <Card title="Data & Privacy" icon={Download}>
            <button className="inline-flex w-full items-center gap-2 rounded-md border border-white/8 px-3 py-2 text-left text-sm text-white/75 hover:border-white/20 hover:text-white">
              <Download size={13} /> Export my data
            </button>
            <Link to="/legal" className="block text-[11px] text-[oklch(0.78_0.12_250)] hover:underline">Privacy Policy</Link>
            <Link to="/legal" className="block text-[11px] text-[oklch(0.78_0.12_250)] hover:underline">Terms of Service</Link>
          </Card>

          <Card title="Danger zone" icon={LogOut} danger>
            <button onClick={() => nav({ to: "/" })} className="inline-flex w-full items-center gap-2 rounded-md border border-white/8 px-3 py-2 text-left text-sm text-white/85 hover:border-white/20">
              <LogOut size={13} /> Sign out
            </button>
            {!confirmDel ? (
              <button onClick={() => setConfirmDel(true)} className="inline-flex w-full items-center gap-2 rounded-md border border-[oklch(0.66_0.20_25)]/30 px-3 py-2 text-left text-sm text-[oklch(0.78_0.16_25)] hover:border-[oklch(0.66_0.20_25)]/50">
                <Trash2 size={13} /> Delete account
              </button>
            ) : (
              <div className="rounded-md border border-[oklch(0.66_0.20_25)]/40 bg-[oklch(0.66_0.20_25)]/10 p-3 text-xs text-[oklch(0.85_0.10_25)]">
                Are you sure? This is permanent.
                <div className="mt-2 flex gap-2">
                  <button className="rounded-md bg-[oklch(0.55_0.22_25)] px-3 py-1 text-white">Delete</button>
                  <button onClick={() => setConfirmDel(false)} className="rounded-md border border-white/15 px-3 py-1">Cancel</button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] uppercase tracking-wider text-white/45">{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-white/8 bg-white/[0.02] px-3 py-2 text-sm text-white outline-none focus:border-[oklch(0.72_0.13_250)]" />
    </label>
  );
}
function FieldSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] uppercase tracking-wider text-white/45">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-white/8 bg-[oklch(0.19_0.010_260)] px-3 py-2 text-sm text-white outline-none focus:border-[oklch(0.72_0.13_250)]">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center justify-between text-sm text-white/80">
      {label}
      <button type="button" onClick={() => onChange(!checked)}
        className={`relative h-5 w-9 rounded-full transition ${checked ? "bg-[oklch(0.64_0.16_255)]" : "bg-white/12"}`}>
        <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${checked ? "left-4" : "left-0.5"}`} />
      </button>
    </label>
  );
}
function Card({ title, icon: Icon, children, danger }: { title: string; icon: any; children: React.ReactNode; danger?: boolean }) {
  return (
    <div className={`surface rounded-lg p-5 ${danger ? "border-[oklch(0.66_0.20_25)]/20" : ""}`}>
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white"><Icon size={14} strokeWidth={1.75} /> {title}</div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
