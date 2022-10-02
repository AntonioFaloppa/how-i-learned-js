function apendix (symptoms) {
    //pain less tha 5
    if (symptoms.pain < 5) return "no worries";
    if (symptoms.noPooDays > 2) {
        if (symptoms.color === "blue") return "go to hospital";
        return "take Festal";
    }
};
module.exports = apendix;