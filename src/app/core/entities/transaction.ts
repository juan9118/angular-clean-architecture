import { ID } from '../definitions/id';

import { Entity } from './entity';
import { User } from './user';
import { TRANSACTION_TYPES } from '../definitions/transaction-type';

export class Transaction implements Entity {
  constructor(
    public from: User,
    public to: User,
    public value: number,
    public type: TRANSACTION_TYPES,
    public id?: ID,
  ) {}
}
