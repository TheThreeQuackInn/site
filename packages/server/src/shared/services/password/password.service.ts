import {Injectable} from '@nestjs/common';
import {hash, compare} from 'bcrypt';

@Injectable()
export class PasswordService {
    /**
     * Validate a password
     */
    validatePassword(password: string, hashedPassword: string): Promise<boolean> {
        return compare(password, hashedPassword);
    }

    /**
     * Hash a password
     */
    hashPassword(password: string): Promise<string> {
        return hash(password, 10);
    }
}
