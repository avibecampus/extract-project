import { createContext, useContext } from "react";
import type { Session, User } from "@supabase/supabase-js";

type UserProfileInput = {
  full_name: string;
  bio: string;
  career: string;
  level: string;
  exam_date: string;
  reminder_time: string;
  email_notifications: boolean;
  two_factor_enabled: boolean;
};

type SignUpInput = {
  email: string;
  password: string;
  profile: UserProfileInput;
};

type AuthContextValue = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (input: SignUpInput) => Promise<{ needsEmailConfirmation: boolean }>;
  signOut: () => Promise<void>;
  updateProfile: (profile: UserProfileInput) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
  sendPasswordReset: (email: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function useAuth() {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return value;
}

export { AuthContext, useAuth };
export type { AuthContextValue, SignUpInput, UserProfileInput };
