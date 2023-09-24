import { Inject, Injectable, Scope } from '@nestjs/common';
import { ICreateTicketUseCasePresenter } from './create-ticket-usecase-presenter.interface';
import { REQUEST } from '@nestjs/core/router/request/request-constants';
import { Request } from 'express';

@Injectable({
  scope: Scope.REQUEST,
})
export class CreateTicketUseCasePresenter
  implements ICreateTicketUseCasePresenter
{
  public constructor(@Inject(REQUEST) private readonly _request: Request) {}

  public succeeded(id: string): void {
    this._request.res?.json({
      data: id,
    });
  }

  public failed(reason: string): void {
    this._request.res?.json({
      data: null,
      error: reason,
    });
  }
}
