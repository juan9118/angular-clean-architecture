import { Input } from './input';
import { Output } from './output';

export interface Interactor {
  execute(request: Input): Promise<Output>;
}

export interface InputUseCase extends Input {}

export interface OutputUseCase extends Output {
  data?: object;
}
export interface UseCase<T extends InputUseCase> {
  execute(request: T): Promise<OutputUseCase>;
}
