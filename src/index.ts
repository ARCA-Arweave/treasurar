import { ActionInterface, StateInterface } from "./faces";
import { Balance } from "./modules/balance";
import { Invoke } from "./modules/invoke";
import { Propose } from "./modules/propose";
import { ReadOutbox } from "./modules/readOutbox";

export async function handle(state: StateInterface, action: ActionInterface) {
  switch (action.input.function) {
    case "propose":
      return { state: Propose(state, action) };

    case "balance":
      return { result: Balance(state, action) };

    // FCP Functions
    case "readOutbox":
      return { state: ReadOutbox(state, action) };

    case "invoke":
      return { state: Invoke(state, action) };
  }
}
