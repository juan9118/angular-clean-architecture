import { Output } from './output';
import { Input } from './input';

export interface PresenterOutput extends Output {}

export interface Presenter<T extends Output> {
  present(data: T): Promise<PresenterOutput>;
}

/* export interface InputPresenter extends Input { }
export interface OutputPresenter extends Output {
  data?: object
}

export interface Presenter<T extends InputPresenter> {
  present(data: T): Promise<OutputPresenter>;
} */
