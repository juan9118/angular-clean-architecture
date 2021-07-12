import { TransferOutput } from '../../../../app/transfer/transfer.out';

import { TransferPresenter, TransferPresenterOutput } from './transfer.presenter';

export class TransferPresenterImpl implements TransferPresenter {
  present(data: TransferOutput): Promise<TransferPresenterOutput> {
    let presenterOutput: TransferPresenterOutput = {id: ''};
    presenterOutput.id = data.transactionId;
    return Promise.resolve(presenterOutput);
  }
}
