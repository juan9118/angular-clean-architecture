import { TransferOutput } from '../../../../app/transfer/transfer.out';

import { TransferPresenter, TransferPresenterOutput } from './transfer.presenter';

export class TransferPresenterImpl implements TransferPresenter {
  present(data: TransferOutput): Promise<TransferPresenterOutput> {
    const transferPresenterOutput: TransferPresenterOutput = { id: data.transactionId };
    return Promise.resolve(transferPresenterOutput);
  }
}
