enum AccountType {
    Simple,
    Standart,
    Premium
}

const account = AccountType.Premium;
const accountReverse = AccountType[1];

if (accountReverse === AccountType.Standart.toString()) {
    console.log('1')
} else {
    console.log('0');
}

console.log(`${account} ${accountReverse}`);

enum SocialMedia {
    VK= 'VK',
    FACEBOOK='FACEBOOK',
    TIKTOK='TIKTOK',
    INSTA='INSTA'
}

const social = SocialMedia.VK
console.log(social);