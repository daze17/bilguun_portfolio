import type { FC, PropsWithChildren } from "global";

declare module "react" {
  export declare type FCC<P = {}> = FC<PropsWithChildren<P>>;
  export declare type Page<P = {}, SP = {}> = FC<RouterParams<P, SP>>;
  export declare type Layout<P = {}> = FCC<RouterParams<P>>;
  export declare type ServerActionWithoutState<Payload = FormData> = (
    payload: Awaited<Payload>,
  ) => Payload | Promise<Payload>;
  export declare type ServerAction<
    State = FormState | undefined,
    Payload = FormData,
  > = (state: Awaited<State>, payload: Payload) => State | Promise<State>;
}

declare type RouterParams<P, SP> = {
  params: P;
  searchParams: SP;
};
