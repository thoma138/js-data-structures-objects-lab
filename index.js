
const driver = {
    name: "Sam",
    address: "11 Broadway"
};

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = {...driver};
    key = address;
    value = '11 Broadway';
    newDriver[address] = value;

    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return driver.key = value;
}