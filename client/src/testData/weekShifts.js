const date = new Date()

const floaterMorningStartTime = [7, 30, 0];
const floaterMorningEndTime = [16, 0, 0];
const floaterEveningStartTime = [15, 30, 0];
const floaterEveningEndTime = [22, 30, 0];

const coldLineMorningStartTime = [8, 30, 0];
const coldLineMorningEndTime = [16, 0, 0];
const coldLineEveningStartTime = [16, 0, 0];
const coldLineEveningEndTime = [22, 30, 0];

const hotLineMorningStartTime = [9, 30, 0];
const hotLineMorningEndTime = [16, 0, 0];
const hotLineEveningStartTime = [16, 0, 0];
const hotLineEveningEndTime = [22, 30, 0];

const backupHotLineEveningStartTime = [17, 0, 0];
const backupHotLineEveningEndTime = [21, 0, 0];

const cashierMorningStartTime = [8, 30, 0];
const cashierMorningEndTime = [16, 0, 0];
const cashierEveningStartTime = [16, 0, 0];
const cashierEveningEndTime = [22, 30, 0];

const backupCashierMorningStartTime = [9, 30, 0];
const backupCashierMorningEndTime = [16, 0, 0];
const backupCashierEveningStartTime = [16, 0, 0];
const backupCashierEveningEndTime = [22, 30, 0];

const maintenanceMorningStartTime = [9, 0, 0];
const maintenanceMorningEndTime = [16, 0, 0];
const maintenanceEveningStartTime = [16, 0, 0];
const maintenanceEveningEndTime = [22, 30, 0];

const meatPrepMorningStartTime = [9, 0, 0];
const meatPrepMorningEndTime = [16, 0, 0];
const meatPrepEveningStartTime = [16, 0, 0];
const meatPrepEveningEndTime = [22, 30, 0];

const veggiePrepMorningStartTime = [8, 0, 0];
const veggiePrepMorningEndTime = [16, 0, 0];




let sunday = new Date(date)
let monday = new Date(date)
let tuesday = new Date(date)
let wednesday = new Date(date)
let thursday = new Date(date)
let friday = new Date(date)
let saturday = new Date(date)


switch (date.getDay()) {
    case 0:
        sunday = new Date(sunday.setDate(sunday.getDate() - 0 + 7))
        monday = new Date(monday.setDate(monday.getDate() + 1 + 7))
        tuesday = new Date(tuesday.setDate(tuesday.getDate() + 2 + 7))
        wednesday = new Date(wednesday.setDate(wednesday.getDate() + 3 + 7))
        thursday = new Date(thursday.setDate(thursday.getDate() + 4 + 7))
        friday = new Date(friday.setDate(friday.getDate() + 5 + 7))
        saturday = new Date(saturday.setDate(saturday.getDate() + 6 + 7))
        break;
    case 1:
        sunday = new Date(sunday.setDate(sunday.getDate() + 6 + 7))
        monday = new Date(monday.setDate(monday.getDate() - 0 + 7))
        tuesday = new Date(tuesday.setDate(tuesday.getDate() + 1 + 7))
        wednesday = new Date(wednesday.setDate(wednesday.getDate() + 2 + 7))
        thursday = new Date(thursday.setDate(thursday.getDate() + 3 + 7))
        friday = new Date(friday.setDate(friday.getDate() + 4 + 7))
        saturday = new Date(saturday.setDate(saturday.getDate() + 5 + 7))
        break;
    case 2:
        sunday = new Date(sunday.setDate(sunday.getDate() + 5 + 7))
        monday = new Date(monday.setDate(monday.getDate() - 1 + 7))
        tuesday = new Date(tuesday.setDate(tuesday.getDate() - 0 + 7))
        wednesday = new Date(wednesday.setDate(wednesday.getDate() + 1 + 7))
        thursday = new Date(thursday.setDate(thursday.getDate() + 2 + 7))
        friday = new Date(friday.setDate(friday.getDate() + 3 + 7))
        saturday = new Date(saturday.setDate(saturday.getDate() + 4 + 7))
        break;
    case 3:
        sunday = new Date(sunday.setDate(sunday.getDate() + 4 + 7))
        monday = new Date(monday.setDate(monday.getDate() - 2 + 7))
        tuesday = new Date(tuesday.setDate(tuesday.getDate() - 1 + 7))
        wednesday = new Date(wednesday.setDate(wednesday.getDate() - 0 + 7))
        thursday = new Date(thursday.setDate(thursday.getDate() + 1 + 7))
        friday = new Date(friday.setDate(friday.getDate() + 2 + 7))
        saturday = new Date(saturday.setDate(saturday.getDate() + 3 + 7))
        break;
    case 4:
        sunday = new Date(sunday.setDate(sunday.getDate() + 3 + 7))
        monday = new Date(monday.setDate(monday.getDate() - 3 + 7))
        tuesday = new Date(tuesday.setDate(tuesday.getDate() - 2 + 7))
        wednesday = new Date(wednesday.setDate(wednesday.getDate() - 1 + 7))
        thursday = new Date(thursday.setDate(thursday.getDate() - 0 + 7))
        friday = new Date(friday.setDate(friday.getDate() + 1 + 7))
        saturday = new Date(saturday.setDate(saturday.getDate() + 2 + 7))
        break;
    case 5:
        sunday = new Date(sunday.setDate(sunday.getDate() + 2 + 7))
        monday = new Date(monday.setDate(monday.getDate() - 4 + 7))
        tuesday = new Date(tuesday.setDate(tuesday.getDate() - 3 + 7))
        wednesday = new Date(wednesday.setDate(wednesday.getDate() - 2 + 7))
        thursday = new Date(thursday.setDate(thursday.getDate() - 1 + 7))
        friday = new Date(friday.setDate(friday.getDate() + 0 + 7))
        saturday = new Date(saturday.setDate(saturday.getDate() + 1 + 7))
        break;
    case 6:
        sunday = new Date(sunday.setDate(sunday.getDate() + 1 + 7))
        monday = new Date(monday.setDate(monday.getDate() - 5 + 7))
        tuesday = new Date(tuesday.setDate(tuesday.getDate() - 4 + 7))
        wednesday = new Date(wednesday.setDate(wednesday.getDate() - 3 + 7))
        thursday = new Date(thursday.setDate(thursday.getDate() - 2 + 7))
        friday = new Date(friday.setDate(friday.getDate() - 1 + 7))
        saturday = new Date(saturday.setDate(saturday.getDate() + 0 + 7))
        break;
}


const shifts = [

    //--------Sunday shifts--------
    [
        //--------Sunday morning shifts--------
        {
            title: "Floater",
            startDate: `${sunday = new Date(sunday.setHours(floaterMorningStartTime[0], floaterMorningStartTime[1], floaterMorningStartTime[2]))}`,
            endDate: `${sunday = new Date(sunday.setHours(floaterMorningEndTime[0], floaterMorningEndTime[1], floaterMorningEndTime[2]))}`
        },
        {
            title: "Cold Line",
            startDate: `${sunday = new Date(sunday.setHours(coldLineMorningStartTime[0], coldLineMorningStartTime[1], coldLineMorningStartTime[2]))}`,
            endDate: `${sunday = new Date(sunday.setHours(coldLineMorningEndTime[0], coldLineMorningEndTime[1], coldLineMorningEndTime[2]))}`
        },
        {
            title: "Hot Line",
            startDate: `${sunday = new Date(sunday.setHours(hotLineMorningStartTime[0], hotLineMorningStartTime[1], hotLineMorningStartTime[2]))}`,
            endDate: `${sunday = new Date(sunday.setHours(hotLineMorningEndTime[0], hotLineMorningEndTime[1], hotLineMorningEndTime[2]))}`
        },
        {
            title: "Cashier",
            startDate: `${sunday = new Date(sunday.setHours(cashierMorningStartTime[0], cashierMorningStartTime[1], cashierMorningStartTime[2]))}`,
            endDate: `${sunday = new Date(sunday.setHours(cashierMorningEndTime[0], cashierMorningEndTime[1], cashierMorningEndTime[2]))}`
        },
        {
            title: "Backup Cash",
            startDate: `${sunday = new Date(sunday.setHours(backupCashierMorningStartTime[0], backupCashierMorningStartTime[1], backupCashierMorningStartTime[2]))}`,
            endDate: `${sunday = new Date(sunday.setHours(backupCashierMorningEndTime[0], backupCashierMorningEndTime[1], backupCashierMorningEndTime[2]))}`
        },
        {
            title: "Maintenance",
            startDate: `${sunday = new Date(sunday.setHours(maintenanceMorningStartTime[0], maintenanceMorningStartTime[1], maintenanceMorningStartTime[2]))}`,
            endDate: `${sunday = new Date(sunday.setHours(maintenanceMorningEndTime[0], maintenanceMorningEndTime[1], maintenanceMorningEndTime[2]))}`
        },
        {
            title: "Meat Prep",
            startDate: `${sunday = new Date(sunday.setHours(meatPrepMorningStartTime[0], meatPrepMorningStartTime[1], meatPrepMorningStartTime[2]))}`,
            endDate: `${sunday = new Date(sunday.setHours(meatPrepMorningEndTime[0], meatPrepMorningEndTime[1], meatPrepMorningEndTime[2]))}`
        },
        


        //sunday evening shifts
        {
            title: "Floater",
            startDate: `${sunday = new Date(sunday.setHours(floaterEveningStartTime[0], floaterEveningStartTime[1], floaterEveningStartTime[2]))}`,
            endDate: `${sunday = new Date(sunday.setHours(floaterEveningEndTime[0], floaterEveningEndTime[1], floaterEveningEndTime[2]))}`
        },
        {
            title: "Cold Line",
            startDate: `${sunday = new Date(sunday.setHours(coldLineEveningStartTime[0], coldLineEveningStartTime[1], coldLineEveningStartTime[2]))}`,
            endDate: `${sunday = new Date(sunday.setHours(coldLineEveningEndTime[0], coldLineEveningEndTime[1], coldLineEveningEndTime[2]))}`
        },
        {
            title: "Hot Line",
            startDate: `${sunday = new Date(sunday.setHours(hotLineEveningStartTime[0], hotLineEveningStartTime[1], hotLineEveningStartTime[2]))}`,
            endDate: `${sunday = new Date(sunday.setHours(hotLineEveningEndTime[0], hotLineEveningEndTime[1], hotLineEveningEndTime[2]))}`
        },
        {
            title: "Backup Hot Line",
            startDate: `${sunday = new Date(sunday.setHours(backupHotLineEveningStartTime[0], backupHotLineEveningStartTime[1], backupHotLineEveningStartTime[2]))}`,
            endDate: `${sunday = new Date(sunday.setHours(backupHotLineEveningEndTime[0], backupHotLineEveningEndTime[1], backupHotLineEveningEndTime[2]))}`
        },
        {
            title: "Cashier",
            startDate: `${sunday = new Date(sunday.setHours(cashierEveningStartTime[0], cashierEveningStartTime[1], cashierEveningStartTime[2]))}`,
            endDate: `${sunday = new Date(sunday.setHours(cashierEveningEndTime[0], cashierEveningEndTime[1], cashierEveningEndTime[2]))}`
        },
        {
            title: "Backup Cash",
            startDate: `${sunday = new Date(sunday.setHours(backupCashierEveningStartTime[0], backupCashierEveningStartTime[1], backupCashierEveningStartTime[2]))}`,
            endDate: `${sunday = new Date(sunday.setHours(backupCashierEveningEndTime[0], backupCashierEveningEndTime[1], backupCashierEveningEndTime[2]))}`
        },
        {
            title: "Maintenance",
            startDate: `${sunday = new Date(sunday.setHours(maintenanceEveningStartTime[0], maintenanceEveningStartTime[1], maintenanceEveningStartTime[2]))}`,
            endDate: `${sunday = new Date(sunday.setHours(maintenanceEveningEndTime[0], maintenanceEveningEndTime[1], maintenanceEveningEndTime[2]))}`
        },
        {
            title: "Meat Prep",
            startDate: `${sunday = new Date(sunday.setHours(meatPrepEveningStartTime[0], meatPrepEveningStartTime[1], meatPrepEveningStartTime[2]))}`,
            endDate: `${sunday = new Date(sunday.setHours(meatPrepEveningEndTime[0], meatPrepEveningEndTime[1], meatPrepEveningEndTime[2]))}`
        },
    ],

//---------------------------------------------------//
//--------------------- Monday ----------------------//
//---------------------------------------------------//
//---------------------------------------------------//

    //--------Monday shifts--------
    [
        //--------Monday morning shifts--------
        {
            title: "Floater",
            startDate: `${monday = new Date(monday.setHours(floaterMorningStartTime[0], floaterMorningStartTime[1], floaterMorningStartTime[2]))}`,
            endDate: `${monday = new Date(monday.setHours(floaterMorningEndTime[0], floaterMorningEndTime[1], floaterMorningEndTime[2]))}`
        },
        {
            title: "Cold Line",
            startDate: `${monday = new Date(monday.setHours(coldLineMorningStartTime[0], coldLineMorningStartTime[1], coldLineMorningStartTime[2]))}`,
            endDate: `${monday = new Date(monday.setHours(coldLineMorningEndTime[0], coldLineMorningEndTime[1], coldLineMorningEndTime[2]))}`
        },
        {
            title: "Hot Line",
            startDate: `${monday = new Date(monday.setHours(hotLineMorningStartTime[0], hotLineMorningStartTime[1], hotLineMorningStartTime[2]))}`,
            endDate: `${monday = new Date(monday.setHours(hotLineMorningEndTime[0], hotLineMorningEndTime[1], hotLineMorningEndTime[2]))}`
        },
        {
            title: "Cashier",
            startDate: `${monday = new Date(monday.setHours(cashierMorningStartTime[0], cashierMorningStartTime[1], cashierMorningStartTime[2]))}`,
            endDate: `${monday = new Date(monday.setHours(cashierMorningEndTime[0], cashierMorningEndTime[1], cashierMorningEndTime[2]))}`
        },
        {
            title: "Backup Cash",
            startDate: `${monday = new Date(monday.setHours(backupCashierMorningStartTime[0], backupCashierMorningStartTime[1], backupCashierMorningStartTime[2]))}`,
            endDate: `${monday = new Date(monday.setHours(backupCashierMorningEndTime[0], backupCashierMorningEndTime[1], backupCashierMorningEndTime[2]))}`
        },
        {
            title: "Maintenance",
            startDate: `${monday = new Date(monday.setHours(maintenanceMorningStartTime[0], maintenanceMorningStartTime[1], maintenanceMorningStartTime[2]))}`,
            endDate: `${monday = new Date(monday.setHours(maintenanceMorningEndTime[0], maintenanceMorningEndTime[1], maintenanceMorningEndTime[2]))}`
        },
        {
            title: "Meat Prep",
            startDate: `${monday = new Date(monday.setHours(meatPrepMorningStartTime[0], meatPrepMorningStartTime[1], meatPrepMorningStartTime[2]))}`,
            endDate: `${monday = new Date(monday.setHours(meatPrepMorningEndTime[0], meatPrepMorningEndTime[1], meatPrepMorningEndTime[2]))}`
        },
        {
            title: "Veggie Prep",
            startDate: `${monday = new Date(monday.setHours(veggiePrepMorningStartTime[0], veggiePrepMorningStartTime[1], veggiePrepMorningStartTime[2]))}`,
            endDate: `${monday = new Date(monday.setHours(veggiePrepMorningEndTime[0], veggiePrepMorningEndTime[1], veggiePrepMorningEndTime[2]))}`
        },

        

        //Monday evening shifts
        {
            title: "Floater",
            startDate: `${monday = new Date(monday.setHours(floaterEveningStartTime[0], floaterEveningStartTime[1], floaterEveningStartTime[2]))}`,
            endDate: `${monday = new Date(monday.setHours(floaterEveningEndTime[0], floaterEveningEndTime[1], floaterEveningEndTime[2]))}`
        },
        {
            title: "Cold Line",
            startDate: `${monday = new Date(monday.setHours(coldLineEveningStartTime[0], coldLineEveningStartTime[1], coldLineEveningStartTime[2]))}`,
            endDate: `${monday = new Date(monday.setHours(coldLineEveningEndTime[0], coldLineEveningEndTime[1], coldLineEveningEndTime[2]))}`
        },
        {
            title: "Hot Line",
            startDate: `${monday = new Date(monday.setHours(hotLineEveningStartTime[0], hotLineEveningStartTime[1], hotLineEveningStartTime[2]))}`,
            endDate: `${monday = new Date(monday.setHours(hotLineEveningEndTime[0], hotLineEveningEndTime[1], hotLineEveningEndTime[2]))}`
        },
        {
            title: "Backup Hot Line",
            startDate: `${monday = new Date(monday.setHours(backupHotLineEveningStartTime[0], backupHotLineEveningStartTime[1], backupHotLineEveningStartTime[2]))}`,
            endDate: `${monday = new Date(monday.setHours(backupHotLineEveningEndTime[0], backupHotLineEveningEndTime[1], backupHotLineEveningEndTime[2]))}`
        },
        {
            title: "Cashier",
            startDate: `${monday = new Date(monday.setHours(cashierEveningStartTime[0], cashierEveningStartTime[1], cashierEveningStartTime[2]))}`,
            endDate: `${monday = new Date(monday.setHours(cashierEveningEndTime[0], cashierEveningEndTime[1], cashierEveningEndTime[2]))}`
        },
        {
            title: "Backup Cash",
            startDate: `${monday = new Date(monday.setHours(backupCashierEveningStartTime[0], backupCashierEveningStartTime[1], backupCashierEveningStartTime[2]))}`,
            endDate: `${monday = new Date(monday.setHours(backupCashierEveningEndTime[0], backupCashierEveningEndTime[1], backupCashierEveningEndTime[2]))}`
        },
        {
            title: "Maintenance",
            startDate: `${monday = new Date(monday.setHours(maintenanceEveningStartTime[0], maintenanceEveningStartTime[1], maintenanceEveningStartTime[2]))}`,
            endDate: `${monday = new Date(monday.setHours(maintenanceEveningEndTime[0], maintenanceEveningEndTime[1], maintenanceEveningEndTime[2]))}`
        },
        {
            title: "Meat Prep",
            startDate: `${monday = new Date(monday.setHours(meatPrepEveningStartTime[0], meatPrepEveningStartTime[1], meatPrepEveningStartTime[2]))}`,
            endDate: `${monday = new Date(monday.setHours(meatPrepEveningEndTime[0], meatPrepEveningEndTime[1], meatPrepEveningEndTime[2]))}`
        },
    ],

//---------------------------------------------------//
//--------------------- Tuesday ---------------------//
//---------------------------------------------------//
//---------------------------------------------------//

    //--------tuesday shifts--------
    [
        //--------tuesday morning shifts--------
        {
            title: "Floater",
            startDate: `${tuesday = new Date(tuesday.setHours(floaterMorningStartTime[0], floaterMorningStartTime[1], floaterMorningStartTime[2]))}`,
            endDate: `${tuesday = new Date(tuesday.setHours(floaterMorningEndTime[0], floaterMorningEndTime[1], floaterMorningEndTime[2]))}`
        },
        {
            title: "Cold Line",
            startDate: `${tuesday = new Date(tuesday.setHours(coldLineMorningStartTime[0], coldLineMorningStartTime[1], coldLineMorningStartTime[2]))}`,
            endDate: `${tuesday = new Date(tuesday.setHours(coldLineMorningEndTime[0], coldLineMorningEndTime[1], coldLineMorningEndTime[2]))}`
        },
        {
            title: "Hot Line",
            startDate: `${tuesday = new Date(tuesday.setHours(hotLineMorningStartTime[0], hotLineMorningStartTime[1], hotLineMorningStartTime[2]))}`,
            endDate: `${tuesday = new Date(tuesday.setHours(hotLineMorningEndTime[0], hotLineMorningEndTime[1], hotLineMorningEndTime[2]))}`
        },
        {
            title: "Cashier",
            startDate: `${tuesday = new Date(tuesday.setHours(cashierMorningStartTime[0], cashierMorningStartTime[1], cashierMorningStartTime[2]))}`,
            endDate: `${tuesday = new Date(tuesday.setHours(cashierMorningEndTime[0], cashierMorningEndTime[1], cashierMorningEndTime[2]))}`
        },
        {
            title: "Backup Cash",
            startDate: `${tuesday = new Date(tuesday.setHours(backupCashierMorningStartTime[0], backupCashierMorningStartTime[1], backupCashierMorningStartTime[2]))}`,
            endDate: `${tuesday = new Date(tuesday.setHours(backupCashierMorningEndTime[0], backupCashierMorningEndTime[1], backupCashierMorningEndTime[2]))}`
        },
        {
            title: "Maintenance",
            startDate: `${tuesday = new Date(tuesday.setHours(maintenanceMorningStartTime[0], maintenanceMorningStartTime[1], maintenanceMorningStartTime[2]))}`,
            endDate: `${tuesday = new Date(tuesday.setHours(maintenanceMorningEndTime[0], maintenanceMorningEndTime[1], maintenanceMorningEndTime[2]))}`
        },
        {
            title: "Meat Prep",
            startDate: `${tuesday = new Date(tuesday.setHours(meatPrepMorningStartTime[0], meatPrepMorningStartTime[1], meatPrepMorningStartTime[2]))}`,
            endDate: `${tuesday = new Date(tuesday.setHours(meatPrepMorningEndTime[0], meatPrepMorningEndTime[1], meatPrepMorningEndTime[2]))}`
        },
        {
            title: "Veggie Prep",
            startDate: `${tuesday = new Date(tuesday.setHours(veggiePrepMorningStartTime[0], veggiePrepMorningStartTime[1], veggiePrepMorningStartTime[2]))}`,
            endDate: `${tuesday = new Date(tuesday.setHours(veggiePrepMorningEndTime[0], veggiePrepMorningEndTime[1], veggiePrepMorningEndTime[2]))}`
        },

        

        //tuesday evening shifts
        {
            title: "Floater",
            startDate: `${tuesday = new Date(tuesday.setHours(floaterEveningStartTime[0], floaterEveningStartTime[1], floaterEveningStartTime[2]))}`,
            endDate: `${tuesday = new Date(tuesday.setHours(floaterEveningEndTime[0], floaterEveningEndTime[1], floaterEveningEndTime[2]))}`
        },
        {
            title: "Cold Line",
            startDate: `${tuesday = new Date(tuesday.setHours(coldLineEveningStartTime[0], coldLineEveningStartTime[1], coldLineEveningStartTime[2]))}`,
            endDate: `${tuesday = new Date(tuesday.setHours(coldLineEveningEndTime[0], coldLineEveningEndTime[1], coldLineEveningEndTime[2]))}`
        },
        {
            title: "Hot Line",
            startDate: `${tuesday = new Date(tuesday.setHours(hotLineEveningStartTime[0], hotLineEveningStartTime[1], hotLineEveningStartTime[2]))}`,
            endDate: `${tuesday = new Date(tuesday.setHours(hotLineEveningEndTime[0], hotLineEveningEndTime[1], hotLineEveningEndTime[2]))}`
        },
        {
            title: "Backup Hot Line",
            startDate: `${tuesday = new Date(tuesday.setHours(backupHotLineEveningStartTime[0], backupHotLineEveningStartTime[1], backupHotLineEveningStartTime[2]))}`,
            endDate: `${tuesday = new Date(tuesday.setHours(backupHotLineEveningEndTime[0], backupHotLineEveningEndTime[1], backupHotLineEveningEndTime[2]))}`
        },
        {
            title: "Cashier",
            startDate: `${tuesday = new Date(tuesday.setHours(cashierEveningStartTime[0], cashierEveningStartTime[1], cashierEveningStartTime[2]))}`,
            endDate: `${tuesday = new Date(tuesday.setHours(cashierEveningEndTime[0], cashierEveningEndTime[1], cashierEveningEndTime[2]))}`
        },
        {
            title: "Backup Cash",
            startDate: `${tuesday = new Date(tuesday.setHours(backupCashierEveningStartTime[0], backupCashierEveningStartTime[1], backupCashierEveningStartTime[2]))}`,
            endDate: `${tuesday = new Date(tuesday.setHours(backupCashierEveningEndTime[0], backupCashierEveningEndTime[1], backupCashierEveningEndTime[2]))}`
        },
        {
            title: "Maintenance",
            startDate: `${tuesday = new Date(tuesday.setHours(maintenanceEveningStartTime[0], maintenanceEveningStartTime[1], maintenanceEveningStartTime[2]))}`,
            endDate: `${tuesday = new Date(tuesday.setHours(maintenanceEveningEndTime[0], maintenanceEveningEndTime[1], maintenanceEveningEndTime[2]))}`
        },
        {
            title: "Meat Prep",
            startDate: `${tuesday = new Date(tuesday.setHours(meatPrepEveningStartTime[0], meatPrepEveningStartTime[1], meatPrepEveningStartTime[2]))}`,
            endDate: `${tuesday = new Date(tuesday.setHours(meatPrepEveningEndTime[0], meatPrepEveningEndTime[1], meatPrepEveningEndTime[2]))}`
        },
    ],

//---------------------------------------------------//
//--------------------- Wednesday -------------------//
//---------------------------------------------------//
//---------------------------------------------------//

    //--------Wednesday shifts--------
    [
        //--------Wednesday morning shifts--------
        {
            title: "Floater",
            startDate: `${wednesday = new Date(wednesday.setHours(floaterMorningStartTime[0], floaterMorningStartTime[1], floaterMorningStartTime[2]))}`,
            endDate: `${wednesday = new Date(wednesday.setHours(floaterMorningEndTime[0], floaterMorningEndTime[1], floaterMorningEndTime[2]))}`
        },
        {
            title: "Cold Line",
            startDate: `${wednesday = new Date(wednesday.setHours(coldLineMorningStartTime[0], coldLineMorningStartTime[1], coldLineMorningStartTime[2]))}`,
            endDate: `${wednesday = new Date(wednesday.setHours(coldLineMorningEndTime[0], coldLineMorningEndTime[1], coldLineMorningEndTime[2]))}`
        },
        {
            title: "Hot Line",
            startDate: `${wednesday = new Date(wednesday.setHours(hotLineMorningStartTime[0], hotLineMorningStartTime[1], hotLineMorningStartTime[2]))}`,
            endDate: `${wednesday = new Date(wednesday.setHours(hotLineMorningEndTime[0], hotLineMorningEndTime[1], hotLineMorningEndTime[2]))}`
        },
        {
            title: "Cashier",
            startDate: `${wednesday = new Date(wednesday.setHours(cashierMorningStartTime[0], cashierMorningStartTime[1], cashierMorningStartTime[2]))}`,
            endDate: `${wednesday = new Date(wednesday.setHours(cashierMorningEndTime[0], cashierMorningEndTime[1], cashierMorningEndTime[2]))}`
        },
        {
            title: "Backup Cash",
            startDate: `${wednesday = new Date(wednesday.setHours(backupCashierMorningStartTime[0], backupCashierMorningStartTime[1], backupCashierMorningStartTime[2]))}`,
            endDate: `${wednesday = new Date(wednesday.setHours(backupCashierMorningEndTime[0], backupCashierMorningEndTime[1], backupCashierMorningEndTime[2]))}`
        },
        {
            title: "Maintenance",
            startDate: `${wednesday = new Date(wednesday.setHours(maintenanceMorningStartTime[0], maintenanceMorningStartTime[1], maintenanceMorningStartTime[2]))}`,
            endDate: `${wednesday = new Date(wednesday.setHours(maintenanceMorningEndTime[0], maintenanceMorningEndTime[1], maintenanceMorningEndTime[2]))}`
        },
        {
            title: "Meat Prep",
            startDate: `${wednesday = new Date(wednesday.setHours(meatPrepMorningStartTime[0], meatPrepMorningStartTime[1], meatPrepMorningStartTime[2]))}`,
            endDate: `${wednesday = new Date(wednesday.setHours(meatPrepMorningEndTime[0], meatPrepMorningEndTime[1], meatPrepMorningEndTime[2]))}`
        },
        {
            title: "Veggie Prep",
            startDate: `${wednesday = new Date(wednesday.setHours(veggiePrepMorningStartTime[0], veggiePrepMorningStartTime[1], veggiePrepMorningStartTime[2]))}`,
            endDate: `${wednesday = new Date(wednesday.setHours(veggiePrepMorningEndTime[0], veggiePrepMorningEndTime[1], veggiePrepMorningEndTime[2]))}`
        },

        

        //wednesday evening shifts
        {
            title: "Floater",
            startDate: `${wednesday = new Date(wednesday.setHours(floaterEveningStartTime[0], floaterEveningStartTime[1], floaterEveningStartTime[2]))}`,
            endDate: `${wednesday = new Date(wednesday.setHours(floaterEveningEndTime[0], floaterEveningEndTime[1], floaterEveningEndTime[2]))}`
        },
        {
            title: "Cold Line",
            startDate: `${wednesday = new Date(wednesday.setHours(coldLineEveningStartTime[0], coldLineEveningStartTime[1], coldLineEveningStartTime[2]))}`,
            endDate: `${wednesday = new Date(wednesday.setHours(coldLineEveningEndTime[0], coldLineEveningEndTime[1], coldLineEveningEndTime[2]))}`
        },
        {
            title: "Hot Line",
            startDate: `${wednesday = new Date(wednesday.setHours(hotLineEveningStartTime[0], hotLineEveningStartTime[1], hotLineEveningStartTime[2]))}`,
            endDate: `${wednesday = new Date(wednesday.setHours(hotLineEveningEndTime[0], hotLineEveningEndTime[1], hotLineEveningEndTime[2]))}`
        },
        {
            title: "Backup Hot Line",
            startDate: `${wednesday = new Date(wednesday.setHours(backupHotLineEveningStartTime[0], backupHotLineEveningStartTime[1], backupHotLineEveningStartTime[2]))}`,
            endDate: `${wednesday = new Date(wednesday.setHours(backupHotLineEveningEndTime[0], backupHotLineEveningEndTime[1], backupHotLineEveningEndTime[2]))}`
        },
        {
            title: "Cashier",
            startDate: `${wednesday = new Date(wednesday.setHours(cashierEveningStartTime[0], cashierEveningStartTime[1], cashierEveningStartTime[2]))}`,
            endDate: `${wednesday = new Date(wednesday.setHours(cashierEveningEndTime[0], cashierEveningEndTime[1], cashierEveningEndTime[2]))}`
        },
        {
            title: "Backup Cash",
            startDate: `${wednesday = new Date(wednesday.setHours(backupCashierEveningStartTime[0], backupCashierEveningStartTime[1], backupCashierEveningStartTime[2]))}`,
            endDate: `${wednesday = new Date(wednesday.setHours(backupCashierEveningEndTime[0], backupCashierEveningEndTime[1], backupCashierEveningEndTime[2]))}`
        },
        {
            title: "Maintenance",
            startDate: `${wednesday = new Date(wednesday.setHours(maintenanceEveningStartTime[0], maintenanceEveningStartTime[1], maintenanceEveningStartTime[2]))}`,
            endDate: `${wednesday = new Date(wednesday.setHours(maintenanceEveningEndTime[0], maintenanceEveningEndTime[1], maintenanceEveningEndTime[2]))}`
        },
        {
            title: "Meat Prep",
            startDate: `${wednesday = new Date(wednesday.setHours(meatPrepEveningStartTime[0], meatPrepEveningStartTime[1], meatPrepEveningStartTime[2]))}`,
            endDate: `${wednesday = new Date(wednesday.setHours(meatPrepEveningEndTime[0], meatPrepEveningEndTime[1], meatPrepEveningEndTime[2]))}`
        },
    ],

//---------------------------------------------------//
//--------------------- Thursday --------------------//
//---------------------------------------------------//
//---------------------------------------------------//

    //--------Thursday shifts--------
    [
        //--------Thursday morning shifts--------
        {
            title: "Floater",
            startDate: `${thursday = new Date(thursday.setHours(floaterMorningStartTime[0], floaterMorningStartTime[1], floaterMorningStartTime[2]))}`,
            endDate: `${thursday = new Date(thursday.setHours(floaterMorningEndTime[0], floaterMorningEndTime[1], floaterMorningEndTime[2]))}`
        },
        {
            title: "Cold Line",
            startDate: `${thursday = new Date(thursday.setHours(coldLineMorningStartTime[0], coldLineMorningStartTime[1], coldLineMorningStartTime[2]))}`,
            endDate: `${thursday = new Date(thursday.setHours(coldLineMorningEndTime[0], coldLineMorningEndTime[1], coldLineMorningEndTime[2]))}`
        },
        {
            title: "Hot Line",
            startDate: `${thursday = new Date(thursday.setHours(hotLineMorningStartTime[0], hotLineMorningStartTime[1], hotLineMorningStartTime[2]))}`,
            endDate: `${thursday = new Date(thursday.setHours(hotLineMorningEndTime[0], hotLineMorningEndTime[1], hotLineMorningEndTime[2]))}`
        },
        {
            title: "Cashier",
            startDate: `${thursday = new Date(thursday.setHours(cashierMorningStartTime[0], cashierMorningStartTime[1], cashierMorningStartTime[2]))}`,
            endDate: `${thursday = new Date(thursday.setHours(cashierMorningEndTime[0], cashierMorningEndTime[1], cashierMorningEndTime[2]))}`
        },
        {
            title: "Backup Cash",
            startDate: `${thursday = new Date(thursday.setHours(backupCashierMorningStartTime[0], backupCashierMorningStartTime[1], backupCashierMorningStartTime[2]))}`,
            endDate: `${thursday = new Date(thursday.setHours(backupCashierMorningEndTime[0], backupCashierMorningEndTime[1], backupCashierMorningEndTime[2]))}`
        },
        {
            title: "Maintenance",
            startDate: `${thursday = new Date(thursday.setHours(maintenanceMorningStartTime[0], maintenanceMorningStartTime[1], maintenanceMorningStartTime[2]))}`,
            endDate: `${thursday = new Date(thursday.setHours(maintenanceMorningEndTime[0], maintenanceMorningEndTime[1], maintenanceMorningEndTime[2]))}`
        },
        {
            title: "Meat Prep",
            startDate: `${thursday = new Date(thursday.setHours(meatPrepMorningStartTime[0], meatPrepMorningStartTime[1], meatPrepMorningStartTime[2]))}`,
            endDate: `${thursday = new Date(thursday.setHours(meatPrepMorningEndTime[0], meatPrepMorningEndTime[1], meatPrepMorningEndTime[2]))}`
        },
        {
            title: "Veggie Prep",
            startDate: `${thursday = new Date(thursday.setHours(veggiePrepMorningStartTime[0], veggiePrepMorningStartTime[1], veggiePrepMorningStartTime[2]))}`,
            endDate: `${thursday = new Date(thursday.setHours(veggiePrepMorningEndTime[0], veggiePrepMorningEndTime[1], veggiePrepMorningEndTime[2]))}`
        },

        

        //thursday evening shifts
        {
            title: "Floater",
            startDate: `${thursday = new Date(thursday.setHours(floaterEveningStartTime[0], floaterEveningStartTime[1], floaterEveningStartTime[2]))}`,
            endDate: `${thursday = new Date(thursday.setHours(floaterEveningEndTime[0], floaterEveningEndTime[1], floaterEveningEndTime[2]))}`
        },
        {
            title: "Cold Line",
            startDate: `${thursday = new Date(thursday.setHours(coldLineEveningStartTime[0], coldLineEveningStartTime[1], coldLineEveningStartTime[2]))}`,
            endDate: `${thursday = new Date(thursday.setHours(coldLineEveningEndTime[0], coldLineEveningEndTime[1], coldLineEveningEndTime[2]))}`
        },
        {
            title: "Hot Line",
            startDate: `${thursday = new Date(thursday.setHours(hotLineEveningStartTime[0], hotLineEveningStartTime[1], hotLineEveningStartTime[2]))}`,
            endDate: `${thursday = new Date(thursday.setHours(hotLineEveningEndTime[0], hotLineEveningEndTime[1], hotLineEveningEndTime[2]))}`
        },
        {
            title: "Backup Hot Line",
            startDate: `${thursday = new Date(thursday.setHours(backupHotLineEveningStartTime[0], backupHotLineEveningStartTime[1], backupHotLineEveningStartTime[2]))}`,
            endDate: `${thursday = new Date(thursday.setHours(backupHotLineEveningEndTime[0], backupHotLineEveningEndTime[1], backupHotLineEveningEndTime[2]))}`
        },
        {
            title: "Cashier",
            startDate: `${thursday = new Date(thursday.setHours(cashierEveningStartTime[0], cashierEveningStartTime[1], cashierEveningStartTime[2]))}`,
            endDate: `${thursday = new Date(thursday.setHours(cashierEveningEndTime[0], cashierEveningEndTime[1], cashierEveningEndTime[2]))}`
        },
        {
            title: "Backup Cash",
            startDate: `${thursday = new Date(thursday.setHours(backupCashierEveningStartTime[0], backupCashierEveningStartTime[1], backupCashierEveningStartTime[2]))}`,
            endDate: `${thursday = new Date(thursday.setHours(backupCashierEveningEndTime[0], backupCashierEveningEndTime[1], backupCashierEveningEndTime[2]))}`
        },
        {
            title: "Maintenance",
            startDate: `${thursday = new Date(thursday.setHours(maintenanceEveningStartTime[0], maintenanceEveningStartTime[1], maintenanceEveningStartTime[2]))}`,
            endDate: `${thursday = new Date(thursday.setHours(maintenanceEveningEndTime[0], maintenanceEveningEndTime[1], maintenanceEveningEndTime[2]))}`
        },
        {
            title: "Meat Prep",
            startDate: `${thursday = new Date(thursday.setHours(meatPrepEveningStartTime[0], meatPrepEveningStartTime[1], meatPrepEveningStartTime[2]))}`,
            endDate: `${thursday = new Date(thursday.setHours(meatPrepEveningEndTime[0], meatPrepEveningEndTime[1], meatPrepEveningEndTime[2]))}`
        },
    ],

//---------------------------------------------------//
//--------------------- Friday ----------------------//
//---------------------------------------------------//
//---------------------------------------------------//

    //--------Friday shifts--------
    [
        //--------Friday morning shifts--------
        {
            title: "Floater",
            startDate: `${friday = new Date(friday.setHours(floaterMorningStartTime[0], floaterMorningStartTime[1], floaterMorningStartTime[2]))}`,
            endDate: `${friday = new Date(friday.setHours(floaterMorningEndTime[0], floaterMorningEndTime[1], floaterMorningEndTime[2]))}`
        },
        {
            title: "Cold Line",
            startDate: `${friday = new Date(friday.setHours(coldLineMorningStartTime[0], coldLineMorningStartTime[1], coldLineMorningStartTime[2]))}`,
            endDate: `${friday = new Date(friday.setHours(coldLineMorningEndTime[0], coldLineMorningEndTime[1], coldLineMorningEndTime[2]))}`
        },
        {
            title: "Hot Line",
            startDate: `${friday = new Date(friday.setHours(hotLineMorningStartTime[0], hotLineMorningStartTime[1], hotLineMorningStartTime[2]))}`,
            endDate: `${friday = new Date(friday.setHours(hotLineMorningEndTime[0], hotLineMorningEndTime[1], hotLineMorningEndTime[2]))}`
        },
        {
            title: "Cashier",
            startDate: `${friday = new Date(friday.setHours(cashierMorningStartTime[0], cashierMorningStartTime[1], cashierMorningStartTime[2]))}`,
            endDate: `${friday = new Date(friday.setHours(cashierMorningEndTime[0], cashierMorningEndTime[1], cashierMorningEndTime[2]))}`
        },
        {
            title: "Backup Cash",
            startDate: `${friday = new Date(friday.setHours(backupCashierMorningStartTime[0], backupCashierMorningStartTime[1], backupCashierMorningStartTime[2]))}`,
            endDate: `${friday = new Date(friday.setHours(backupCashierMorningEndTime[0], backupCashierMorningEndTime[1], backupCashierMorningEndTime[2]))}`
        },
        {
            title: "Maintenance",
            startDate: `${friday = new Date(friday.setHours(maintenanceMorningStartTime[0], maintenanceMorningStartTime[1], maintenanceMorningStartTime[2]))}`,
            endDate: `${friday = new Date(friday.setHours(maintenanceMorningEndTime[0], maintenanceMorningEndTime[1], maintenanceMorningEndTime[2]))}`
        },
        {
            title: "Meat Prep",
            startDate: `${friday = new Date(friday.setHours(meatPrepMorningStartTime[0], meatPrepMorningStartTime[1], meatPrepMorningStartTime[2]))}`,
            endDate: `${friday = new Date(friday.setHours(meatPrepMorningEndTime[0], meatPrepMorningEndTime[1], meatPrepMorningEndTime[2]))}`
        },
        {
            title: "Veggie Prep",
            startDate: `${friday = new Date(friday.setHours(veggiePrepMorningStartTime[0], veggiePrepMorningStartTime[1], veggiePrepMorningStartTime[2]))}`,
            endDate: `${friday = new Date(friday.setHours(veggiePrepMorningEndTime[0], veggiePrepMorningEndTime[1], veggiePrepMorningEndTime[2]))}`
        },

        

        //friday evening shifts
        {
            title: "Floater",
            startDate: `${friday = new Date(friday.setHours(floaterEveningStartTime[0], floaterEveningStartTime[1], floaterEveningStartTime[2]))}`,
            endDate: `${friday = new Date(friday.setHours(floaterEveningEndTime[0], floaterEveningEndTime[1], floaterEveningEndTime[2]))}`
        },
        {
            title: "Cold Line",
            startDate: `${friday = new Date(friday.setHours(coldLineEveningStartTime[0], coldLineEveningStartTime[1], coldLineEveningStartTime[2]))}`,
            endDate: `${friday = new Date(friday.setHours(coldLineEveningEndTime[0], coldLineEveningEndTime[1], coldLineEveningEndTime[2]))}`
        },
        {
            title: "Hot Line",
            startDate: `${friday = new Date(friday.setHours(hotLineEveningStartTime[0], hotLineEveningStartTime[1], hotLineEveningStartTime[2]))}`,
            endDate: `${friday = new Date(friday.setHours(hotLineEveningEndTime[0], hotLineEveningEndTime[1], hotLineEveningEndTime[2]))}`
        },
        {
            title: "Backup Hot Line",
            startDate: `${friday = new Date(friday.setHours(backupHotLineEveningStartTime[0], backupHotLineEveningStartTime[1], backupHotLineEveningStartTime[2]))}`,
            endDate: `${friday = new Date(friday.setHours(backupHotLineEveningEndTime[0], backupHotLineEveningEndTime[1], backupHotLineEveningEndTime[2]))}`
        },
        {
            title: "Cashier",
            startDate: `${friday = new Date(friday.setHours(cashierEveningStartTime[0], cashierEveningStartTime[1], cashierEveningStartTime[2]))}`,
            endDate: `${friday = new Date(friday.setHours(cashierEveningEndTime[0], cashierEveningEndTime[1], cashierEveningEndTime[2]))}`
        },
        {
            title: "Backup Cash",
            startDate: `${friday = new Date(friday.setHours(backupCashierEveningStartTime[0], backupCashierEveningStartTime[1], backupCashierEveningStartTime[2]))}`,
            endDate: `${friday = new Date(friday.setHours(backupCashierEveningEndTime[0], backupCashierEveningEndTime[1], backupCashierEveningEndTime[2]))}`
        },
        {
            title: "Maintenance",
            startDate: `${friday = new Date(friday.setHours(maintenanceEveningStartTime[0], maintenanceEveningStartTime[1], maintenanceEveningStartTime[2]))}`,
            endDate: `${friday = new Date(friday.setHours(maintenanceEveningEndTime[0], maintenanceEveningEndTime[1], maintenanceEveningEndTime[2]))}`
        },
        {
            title: "Meat Prep",
            startDate: `${friday = new Date(friday.setHours(meatPrepEveningStartTime[0], meatPrepEveningStartTime[1], meatPrepEveningStartTime[2]))}`,
            endDate: `${friday = new Date(friday.setHours(meatPrepEveningEndTime[0], meatPrepEveningEndTime[1], meatPrepEveningEndTime[2]))}`
        },
    ],

//---------------------------------------------------//
//--------------------- Saturday --------------------//
//---------------------------------------------------//
//---------------------------------------------------//

    //--------Saturday shifts--------
    [
        //--------Saturday morning shifts--------
        {
            title: "Floater",
            startDate: `${saturday = new Date(saturday.setHours(floaterMorningStartTime[0], floaterMorningStartTime[1], floaterMorningStartTime[2]))}`,
            endDate: `${saturday = new Date(saturday.setHours(floaterMorningEndTime[0], floaterMorningEndTime[1], floaterMorningEndTime[2]))}`
        },
        {
            title: "Cold Line",
            startDate: `${saturday = new Date(saturday.setHours(coldLineMorningStartTime[0], coldLineMorningStartTime[1], coldLineMorningStartTime[2]))}`,
            endDate: `${saturday = new Date(saturday.setHours(coldLineMorningEndTime[0], coldLineMorningEndTime[1], coldLineMorningEndTime[2]))}`
        },
        {
            title: "Hot Line",
            startDate: `${saturday = new Date(saturday.setHours(hotLineMorningStartTime[0], hotLineMorningStartTime[1], hotLineMorningStartTime[2]))}`,
            endDate: `${saturday = new Date(saturday.setHours(hotLineMorningEndTime[0], hotLineMorningEndTime[1], hotLineMorningEndTime[2]))}`
        },
        {
            title: "Cashier",
            startDate: `${saturday = new Date(saturday.setHours(cashierMorningStartTime[0], cashierMorningStartTime[1], cashierMorningStartTime[2]))}`,
            endDate: `${saturday = new Date(saturday.setHours(cashierMorningEndTime[0], cashierMorningEndTime[1], cashierMorningEndTime[2]))}`
        },
        {
            title: "Backup Cash",
            startDate: `${saturday = new Date(saturday.setHours(backupCashierMorningStartTime[0], backupCashierMorningStartTime[1], backupCashierMorningStartTime[2]))}`,
            endDate: `${saturday = new Date(saturday.setHours(backupCashierMorningEndTime[0], backupCashierMorningEndTime[1], backupCashierMorningEndTime[2]))}`
        },
        {
            title: "Maintenance",
            startDate: `${saturday = new Date(saturday.setHours(maintenanceMorningStartTime[0], maintenanceMorningStartTime[1], maintenanceMorningStartTime[2]))}`,
            endDate: `${saturday = new Date(saturday.setHours(maintenanceMorningEndTime[0], maintenanceMorningEndTime[1], maintenanceMorningEndTime[2]))}`
        },
        {
            title: "Meat Prep",
            startDate: `${saturday = new Date(saturday.setHours(meatPrepMorningStartTime[0], meatPrepMorningStartTime[1], meatPrepMorningStartTime[2]))}`,
            endDate: `${saturday = new Date(saturday.setHours(meatPrepMorningEndTime[0], meatPrepMorningEndTime[1], meatPrepMorningEndTime[2]))}`
        },
        // {
        //     title: "Veggie Prep",
        //     startDate: `${saturday = new Date(saturday.setHours(veggiePrepMorningStartTime[0], veggiePrepMorningStartTime[1], veggiePrepMorningStartTime[2]))}`,
        //     endDate: `${saturday = new Date(saturday.setHours(veggiePrepMorningEndTime[0], veggiePrepMorningEndTime[1], veggiePrepMorningEndTime[2]))}`
        // },

        

        //saturday evening shifts
        {
            title: "Floater",
            startDate: `${saturday = new Date(saturday.setHours(floaterEveningStartTime[0], floaterEveningStartTime[1], floaterEveningStartTime[2]))}`,
            endDate: `${saturday = new Date(saturday.setHours(floaterEveningEndTime[0], floaterEveningEndTime[1], floaterEveningEndTime[2]))}`
        },
        {
            title: "Cold Line",
            startDate: `${saturday = new Date(saturday.setHours(coldLineEveningStartTime[0], coldLineEveningStartTime[1], coldLineEveningStartTime[2]))}`,
            endDate: `${saturday = new Date(saturday.setHours(coldLineEveningEndTime[0], coldLineEveningEndTime[1], coldLineEveningEndTime[2]))}`
        },
        {
            title: "Hot Line",
            startDate: `${saturday = new Date(saturday.setHours(hotLineEveningStartTime[0], hotLineEveningStartTime[1], hotLineEveningStartTime[2]))}`,
            endDate: `${saturday = new Date(saturday.setHours(hotLineEveningEndTime[0], hotLineEveningEndTime[1], hotLineEveningEndTime[2]))}`
        },
        {
            title: "Backup Hot Line",
            startDate: `${saturday = new Date(saturday.setHours(backupHotLineEveningStartTime[0], backupHotLineEveningStartTime[1], backupHotLineEveningStartTime[2]))}`,
            endDate: `${saturday = new Date(saturday.setHours(backupHotLineEveningEndTime[0], backupHotLineEveningEndTime[1], backupHotLineEveningEndTime[2]))}`
        },
        {
            title: "Cashier",
            startDate: `${saturday = new Date(saturday.setHours(cashierEveningStartTime[0], cashierEveningStartTime[1], cashierEveningStartTime[2]))}`,
            endDate: `${saturday = new Date(saturday.setHours(cashierEveningEndTime[0], cashierEveningEndTime[1], cashierEveningEndTime[2]))}`
        },
        {
            title: "Backup Cash",
            startDate: `${saturday = new Date(saturday.setHours(backupCashierEveningStartTime[0], backupCashierEveningStartTime[1], backupCashierEveningStartTime[2]))}`,
            endDate: `${saturday = new Date(saturday.setHours(backupCashierEveningEndTime[0], backupCashierEveningEndTime[1], backupCashierEveningEndTime[2]))}`
        },
        {
            title: "Maintenance",
            startDate: `${saturday = new Date(saturday.setHours(maintenanceEveningStartTime[0], maintenanceEveningStartTime[1], maintenanceEveningStartTime[2]))}`,
            endDate: `${saturday = new Date(saturday.setHours(maintenanceEveningEndTime[0], maintenanceEveningEndTime[1], maintenanceEveningEndTime[2]))}`
        },
        {
            title: "Meat Prep",
            startDate: `${saturday = new Date(saturday.setHours(meatPrepEveningStartTime[0], meatPrepEveningStartTime[1], meatPrepEveningStartTime[2]))}`,
            endDate: `${saturday = new Date(saturday.setHours(meatPrepEveningEndTime[0], meatPrepEveningEndTime[1], meatPrepEveningEndTime[2]))}`
        },
    ],

]

export default shifts;