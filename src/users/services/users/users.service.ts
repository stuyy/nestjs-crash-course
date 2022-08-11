import { Injectable } from '@nestjs/common';
import { CreateUserType } from '../../../utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Anson', email: 'anson@anson.com' },
    { username: 'Cory', email: 'cory@anson.com' },
    { username: 'Greg', email: 'greg@anson.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }

  fetchUserById(id: number) {
    return { id, username: 'Anson', email: 'anson@email.com' };
  }
}
