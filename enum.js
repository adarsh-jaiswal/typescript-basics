var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["SUN"] = 0] = "SUN";
    DaysOfWeek[DaysOfWeek["Mon"] = 1] = "Mon";
    DaysOfWeek[DaysOfWeek["TUE"] = 2] = "TUE";
    DaysOfWeek[DaysOfWeek["WED"] = 3] = "WED";
})(DaysOfWeek || (DaysOfWeek = {}));
var day;
day = DaysOfWeek.Mon;
if (day === DaysOfWeek.Mon) {
    console.log("equal");
}
