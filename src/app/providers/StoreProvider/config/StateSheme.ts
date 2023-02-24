import { CounterSheme } from 'entities/Counter';
import { UserShema } from 'entities/User';

export interface StateSheme {
  counter: CounterSheme,
  user: UserShema
}
