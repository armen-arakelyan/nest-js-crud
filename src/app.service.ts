import { Injectable } from '@nestjs/common';
import { ListData, ModifiedBody } from './types/ListTypes';

@Injectable()
export class AppService {
  #list = [
    { _id: 1, name: 'Armen' },
    { _id: 2, name: 'Armen2' },
    { _id: 3, name: 'Armen3' },
  ]

  getList(): ListData[] {
    return this.#list;
  }

  addPersonToList(body: ModifiedBody): ListData[] {
    const { _id, name } = body;
    this.#list.push({ _id, name });
    return this.#list;
  }

  editPerson(id: string, name: string) {
    this.#list = this.#list.map(itm => itm._id === +id ? { ...itm, name } : itm)
    return `Edited user id - ${id}`
  }

  deletePersonById(id: string) {
    this.#list = this.#list.filter(itm => itm._id !== +id);
    return `Deleted user id - ${id}`
  }
}
