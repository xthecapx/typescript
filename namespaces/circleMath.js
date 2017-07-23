var MyMath;
(function (MyMath) {
    function calculateCircunference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircunference = calculateCircunference;
})(MyMath || (MyMath = {}));
