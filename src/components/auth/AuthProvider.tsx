import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import { getSupabaseBrowserClient } from "@/lib/supabase";
import {
  AuthContext,
  type AuthContextValue,
  type SignUpInput,
  type UserProfileInput,
} from "./auth-context";

function buildProfileMetadata(profile: UserProfileInput) {
  return {
    full_name: profile.full_name.trim(),
    bio: profile.bio.trim(),
    career: profile.career,
    level: profile.level,
    exam_date: profile.exam_date,
    reminder_time: profile.reminder_time,
    email_notifications: profile.email_notifications,
    two_factor_enabled: profile.two_factor_enabled,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const supabase = useMemo(() => getSupabaseBrowserClient(), []);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    let active = true;

    void supabase.auth.getSession().then(({ data, error }) => {
      if (error) {
        console.error("Failed to restore Supabase session", error);
      }

      if (active) {
        setSession(data.session ?? null);
        setLoading(false);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setLoading(false);
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  const signIn = useCallback(
    async (email: string, password: string) => {
      if (!supabase) {
        throw new Error("Supabase is only available in the browser.");
      }

      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        throw error;
      }
    },
    [supabase],
  );

  const signUp = useCallback(
    async ({ email, password, profile }: SignUpInput) => {
      if (!supabase) {
        throw new Error("Supabase is only available in the browser.");
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: buildProfileMetadata(profile),
        },
      });

      if (error) {
        throw error;
      }

      return { needsEmailConfirmation: !data.session };
    },
    [supabase],
  );

  const signOut = useCallback(async () => {
    if (!supabase) {
      throw new Error("Supabase is only available in the browser.");
    }

    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
  }, [supabase]);

  const updateProfile = useCallback(
    async (profile: UserProfileInput) => {
      if (!supabase) {
        throw new Error("Supabase is only available in the browser.");
      }

      const { error } = await supabase.auth.updateUser({
        data: buildProfileMetadata(profile),
      });

      if (error) {
        throw error;
      }
    },
    [supabase],
  );

  const updatePassword = useCallback(
    async (password: string) => {
      if (!supabase) {
        throw new Error("Supabase is only available in the browser.");
      }

      const { error } = await supabase.auth.updateUser({ password });
      if (error) {
        throw error;
      }
    },
    [supabase],
  );

  const sendPasswordReset = useCallback(
    async (email: string) => {
      if (!supabase) {
        throw new Error("Supabase is only available in the browser.");
      }

      const redirectTo =
        typeof window === "undefined" ? undefined : `${window.location.origin}/login`;

      const { error } = await supabase.auth.resetPasswordForEmail(
        email,
        redirectTo ? { redirectTo } : undefined,
      );

      if (error) {
        throw error;
      }
    },
    [supabase],
  );

  const value = useMemo<AuthContextValue>(
    () => ({
      user: session?.user ?? null,
      session,
      loading,
      signIn,
      signUp,
      signOut,
      updateProfile,
      updatePassword,
      sendPasswordReset,
    }),
    [loading, sendPasswordReset, session, signIn, signOut, signUp, updatePassword, updateProfile],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
