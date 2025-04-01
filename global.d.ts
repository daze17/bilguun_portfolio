import type { FC, PropsWithChildren } from "global";
import type { PageProps } from "next/types";

import en from "./messages/en.json";

declare module "react" {
  export declare type FCC<P = {}> = FC<PropsWithChildren<P>>;
  export declare type Page<P = {}, SP = {}> = FC<
    PageProps & RouterParams<P, SP>
  >;
  export declare type Layout<P = {}> = FCC<RouterParams<P>>;
  export declare type ServerActionWithoutState<Payload = FormData> = (
    payload: Awaited<Payload>
  ) => Payload | Promise<Payload>;
  export declare type ServerAction<
    State = FormState | undefined,
    Payload = FormData
  > = (state: Awaited<State>, payload: Payload) => State | Promise<State>;
}

declare module "next-intl" {
  interface AppConfig {
    // Locale: (typeof routing.locales)[number];
    // Messages: typeof messages;
    Formats: typeof en;
  }
}

declare type RouterParams<P, SP> = {
  params: P;
  searchParams: SP;
};

// type Messages = typeof en;

// declare global {
//   // Use type safe message keys with `next-intl`
//   interface IntlMessages extends Messages {}
// }
