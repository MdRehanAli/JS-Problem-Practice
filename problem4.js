// Use bestFriends(): names = [‘sajid’, ‘rafiq’, ‘kamal’, ‘jubayer bin rased’, ‘chinku’]; Here the biggest length array is the best friend.

function bestFriends(names) {

    if (Array.isArray(names) == false) {
        return 'Please enter an array first.'
    }

    let stringLength = names[0];
    for (let i = 0; i < names.length; i++) {
        const index = i;
        const element = names[index];

        if (element.length > stringLength.length) {
            stringLength = element;
        }
    }
    return stringLength;

}

const names = ['sajid', 'rafiq', 'kamal', 'jubyer bin rased', 'chinku'];
const name = bestFriends(names);
console.log(name);