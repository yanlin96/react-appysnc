import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Home {
  readonly id: string;
  readonly address?: string;
  readonly price?: number;
  readonly image_url?: string;
  constructor(init: ModelInit<Home>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home>) => MutableModel<Home> | void): Home;
}