export interface StateInterface {
  name: string;
  ticker: string;

  balances: { [address: string]: number };
  votes: VoteInterface[];

  // FCP
  invocations: string[];
  foreignCalls: { contract: string; input: any }[];
}

export interface ActionInterface {
  input: any;
  caller: string;
}

export interface VoteInterface {}

// Module Faces

export interface BalanceInterface {
  function: "balance";
  target?: string;
}

export interface InvokeInterface {
  function: "invoke";
  foreignContract: string;
  invocation: any;
}

export interface ProposeInterface {
  function: "propose";
  type: "mint" | "burn" | "payment";
  target: string;
  qty?: number;
  token?: string;
}

export interface ReadOutboxInterface {
  function: "readOutbox";
  contract: string;
  id: number;
}
