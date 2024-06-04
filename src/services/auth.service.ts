import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    private readonly users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
    ];

    login(username: string, password: string): boolean {
        const user = this.users.find(user => user.username === username && user.password === password);
        return !!user; // Return true if the user is found, otherwise false
    }
}
