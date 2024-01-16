type MmtUser = {
    userId: string
    mmtAuth: string
    wallet_balance?: number
}

type GiUser = {
    accountId: string
    authToken: string
    go_cash?: number
}

type RedBusUser = {
    uid: string
    jwt: string
    red_money?: number
}

type User = MmtUser | GiUser | RedBusUser

function getCurrentUserFromSession(): User {
    throw "TODO"
}

function openPayment() {
    let user = getCurrentUserFromSession();
}

function getUserBalance(user: User) {
    let balance: number | undefined;

    balance = getMmtBalance(user);  // ERROR user might not be MMT user
    balance = getMmtBalance(user as MmtUser);  // DANGER. This works, but user might not be MMT user
    if (isMmtUser(user)) {
        balance = getMmtBalance(user); // OK user is MMT user
    }
}

function isMmtUser(user: User): user is MmtUser {
    return 'mmtAuth' in user && user.mmtAuth.length === 16
}

function getMmtBalance(user: MmtUser){
    return user.wallet_balance
}
