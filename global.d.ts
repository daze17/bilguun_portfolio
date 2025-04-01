import type { FC, PropsWithChildren } from "global";
import type { PageProps } from "next/types";

import { formats } from "./i18n/request";
import { routing } from "./i18n/routing";
import messages from "./messages/en.json";

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
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
    Formats: typeof formats;
  }
}

declare type RouterParams<P, SP> = {
  params: P;
  searchParams: SP;
};
