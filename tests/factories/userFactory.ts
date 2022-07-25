import { faker } from '@faker-js/faker';

// sign up user
export function sucessUser() {
    const fakerPassword = faker.internet.password();
    return {
        email: faker.internet.email(),
        password: fakerPassword,
        confirmPassword: fakerPassword,
    };
}

export function missingEmailUser() {
    const fakerPassword = faker.internet.password();
    return {
        password: fakerPassword,
        confirmPassword: fakerPassword,
    };
}

export function missingPasswordUser() {
    return {
        email: faker.internet.email(),
    };
}

export function conflictEmailUser() {
    return {
        email: "teste@teste.com",
        password: "senhasenha",
        confirmPassword: "senhasenha",
    };
}

// login user
export function loginUser() {
    return {
        email: "teste@teste.com",
        password: "senhasenha",
    };
}

export function wrongPasswordUser() {
    return {
        email: "teste@teste.com",
        password: "senhasenha123",
    };
}

export function wrongEmailUser() {
    return {
        email: faker.internet.email(),
        password: faker.internet.password(),
    }
}	

export function missingEmailUserLogin() {
    return {
        password: faker.internet.password(),
    }
}

export function missingPasswordUserLogin() {   
    return {
        email: faker.internet.email(),
    }
}