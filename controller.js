app.controller('entryCtrl', function ($scope) {
    $scope.data = {
        entry: []
    };
    $scope.create = function () {
        $scope.data.entry.push({
           userText: $scope.userText,
           dateOfCreate: new Date().toLocaleDateString()
        });
    };
    $scope.howManyDeal = function () {
        return $scope.data.entry.length ? 'Запланировано ' + $scope.data.entry.length + ' дел' : 'На сегодня дел нет';
    };
});