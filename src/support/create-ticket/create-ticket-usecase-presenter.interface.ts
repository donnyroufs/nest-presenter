export interface ICreateTicketUseCasePresenter {
  succeeded(id: string): void;
  failed(reason: string): void;
}

export const ICreateTicketUseCasePresenterToken = Symbol(
  'ICreateTicketUseCasePresenter',
);
